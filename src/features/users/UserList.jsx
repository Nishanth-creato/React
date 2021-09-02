import { userDeleted } from "./usersSlice";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";

export function UserList() {
  const dispatch = useDispatch();

  const { entities } = useSelector((state) => state.users);
  const loading = useSelector((state) => state.loading);

  const handleDelete = (id) => {
    dispatch(userDeleted({ id }));
  };

  return (
    <div className="container">
      <div className="row">
        <h1> User app</h1>
      </div>
      <div className="row">
        <div className="two columns">
          <Link to="/add-user">
            <button className="btn btn-primary">Add user</button>
          </Link>
        </div>
      </div><br></br>
      <div className="row">
        {loading ? (
          "Loading..."
        ) : (
          <table className="table table-dark table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Username</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {entities.length &&
                entities.map(({ id, name, email, username }, i) => (
                  <tr key={i}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{username}</td>
                    <td>
                      <button className="btn btn-danger" onClick={() => handleDelete(id)}>Delete</button>&nbsp; &nbsp;
                      <Link to={`/edit-user/${id}`}>
                        <button className="btn btn-success">Edit</button>
                      </Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

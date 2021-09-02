import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

import { useState } from "react";
import { userUpdated } from "./usersSlice";

export function EditUser() {
  const { pathname } = useLocation();
  const userId = parseInt(pathname.replace("/edit-user/", ""));

  const user = useSelector((state) =>
    state.users.entities.find((user) => user.id === userId)
  );

  const dispatch = useDispatch();
  const history = useHistory();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [username, setUsername] = useState(user.username);
  const [error, setError] = useState(null);

  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleUsername = (e) => setUsername(e.target.value);

  const handleClick = () => {
    if (name && email && username) {
      dispatch(
        userUpdated({
          id: userId,
          name,
          email,
          username
        })
      );

      setError(null);
      history.push("/");
    } else {
      setError("Fill in all fields");
    }
  };

  return (
    <div className="container">
      <div className="row">
        <h1>Edit user</h1>
      </div>
      <div className="row">
        <div className="container">
          <label htmlFor="nameInput">Name</label>
          <input
            className="form-control"
            type="text"
            placeholder="test@mailbox.com"
            id="nameInput"
            onChange={handleName}
            value={name}
          /><br></br>
          <label htmlFor="emailInput">Email</label>
          <input
            className="form-control"
            type="email"
            placeholder="test@mailbox.com"
            id="emailInput"
            onChange={handleEmail}
            value={email}
          /><br></br>
           <label htmlFor="usernameInput">Username</label>
          <input
            className="form-control"
            type="text"
            placeholder="username"
            id="userNameInput"
            onChange={handleUsername}
            value={username}
          /><br></br>
          {error && error}
          <button onClick={handleClick} className="btn btn-warning">
            Save user
          </button>
        </div>
      </div>
    </div>
  );
}

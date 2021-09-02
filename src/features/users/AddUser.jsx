import { useDispatch, useSelector } from "react-redux";

import { useHistory } from "react-router-dom";
import { useState } from "react";
import { userAdded } from "./usersSlice";

export function AddUser() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleUsername = (e) => setUsername(e.target.value);

  const usersAmount = useSelector((state) => state.users.entities.length);

  const handleClick = () => {
    if (name && email && username) {
      dispatch(
        userAdded({
          id: usersAmount + 1,
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

    setName("");
    setEmail("");
    setUsername("");
  };

  return (
    <div className="container">
      <div className="row">
        <h1>Add user</h1>
      </div>
      <div className="row">
        <div className="three columns">
          <label htmlFor="nameInput">Name</label>
          <input
            className="form-control"
            type="text"
            placeholder="Name"
            id="nameInput"
            onChange={handleName}
            value={name}
          /><br></br>
          <label htmlFor="emailInput">Email</label>
          <input
            className="form-control"
            type="email"
            placeholder="name@gmail.com"
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
          <button onClick={handleClick} className=" btn btn-primary">
            Add user
          </button>
        </div>
      </div>
    </div>
  );
}

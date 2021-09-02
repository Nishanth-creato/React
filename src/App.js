import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import { AddUser } from "./features/users/AddUser";
import { EditUser } from "./features/users/EditUser";
import React from "react";
import { UserList } from "./features/users/UserList";
import Navbar from "./layout/Navbar";
import About from "./layout/About";
import Contact from "./layout/Contact";

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route path="/add-user">
            <AddUser />
          </Route>
          <Route path="/edit-user">
            <EditUser />
          </Route>
          <Route path="/">
            <UserList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

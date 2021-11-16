import React, { useState } from "react";
import Login from "../login/login";
import Register from "../register/register";
import Home from "../homepage/homepage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  const [user, setLoginUser] = useState({});
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signup">
                  REGISTER
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signin">
                  LOGIN
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Switch>
        0
        <Route exact path="/">
          {user && user._id ? <Home /> : <Login setLoginUser={setLoginUser} />}
        </Route>
        <Route exact path="/signin">
          <Login setLoginUser={setLoginUser} />
        </Route>
        <Route exact path="/signup" component={Register}></Route>
      </Switch>
    </Router>
  );
}

export default Navbar;

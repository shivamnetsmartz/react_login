import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";

import "./login.css";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const history = useHistory();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = ({ setLoginUser }) => {
    axios.post("http://localhost:5000/login", user).then((res) => {
      alert(res.data.message);
      setLoginUser(res.data.user);
      history.push("/");
    });
  };
  return (
    <div className="wrapper">
      <h1 className="title">Login Form</h1>
      <form action="#">
        <div className="field">
          <input
            type="text"
            placeholder="Enter Your Email"
            name="email"
            value={user.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="field">
          <input
            type="password"
            placeholder="Enter Your Password"
            name="password"
            value={user.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="field">
          <input type="submit" value="Login" onClick={login} />
        </div>

        <div className="signup-link">
          Not a member?{" "}
          <Link exact to="/signup">
            SignUp Now
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;

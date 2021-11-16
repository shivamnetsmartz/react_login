import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./register.css";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const register = () => {
    const { name, email, password, reEnterPassword } = user;
    if (name && email && password && password === reEnterPassword) {
      axios
        .post("http://localhost:5000/register", user)
        .then((res) => console.log(res));
    } else {
      alert("invalid input");
    }
  };

  return (
    <div className="wrapper">
      {console.log("User", user)}
      <h1 className="title">Register Form</h1>
      <form action="#">
        <div className="field">
          <input
            type="text"
            name="name"
            value={user.name}
            placeholder=" Your Name"
            required
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <input
            type="text"
            name="email"
            value={user.email}
            placeholder=" Your Email"
            required
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <input
            type="password"
            name="password"
            value={user.password}
            placeholder="Your Password"
            required
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <input
            type="password"
            name="reEnterPassword"
            value={user.reEnterPassword}
            placeholder="Re-Enter Confirm Password"
            required
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <input type="submit" value="Register" onClick={register} />
        </div>

        <div className="signin-link">
          Already Registered? <Link to="/signin">SignIn Now</Link>
        </div>
      </form>
    </div>
  );
};

export default Register;

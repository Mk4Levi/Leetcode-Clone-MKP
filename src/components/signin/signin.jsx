import React from "react";
import "./signin.css";
import logo from "../../assets/leetcode_logo.svg";

import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="signin-container">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <form className="form-signin">
        <input
          type="email"
          id="inputEmail"
          placeholder="Email address"
          required
          autoFocus
        />

        <input
          type="password"
          id="inputPassword"
          className=""
          placeholder="Password"
          required
        />

        <Link to={"/problems"}>
          <button id="btn-signin" type="submit">
            Sign In
          </button>
        </Link>
      </form>
    </div>
  );
};

export default SignIn;

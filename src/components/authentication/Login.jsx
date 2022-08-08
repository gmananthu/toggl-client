import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from "../../axios/Axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
  const submitForm = (e) => {
    e.preventDefault();
    Axios.post("login",
    {email : email,
    password : password}
    ).then((response)=>{
      window.alert("loginsuccess")
    }).catch((err)=>{
      console.log(err);
    })
  };

  return (
    <div className="loginContainer">
      <div className="wrapper">
        <div className="title">Toggl Login</div>
        <form action="#">
          <div className="field">
            <input
              type="text"
              required=""
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <label>Email Address</label>
          </div>
          <div className="field">
            <input
              type="password"
              required=""
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <label>Password</label>
          </div>
          <div className="content">
            <div className="checkbox">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <div className="pass-link">
              <a href="#">Forgot password?</a>
            </div>
          </div>
          <div className="field">
            <input type="submit" onClick={submitForm} />
          </div>
          <div className="signup-link">
            Not a member? <Link to="/register">Signup now</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

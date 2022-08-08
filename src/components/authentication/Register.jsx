import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from "../../axios/Axios";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    Axios.post("register",
     {
      name: name, 
      email: email,
      phone: phone,
      password: password
      })
      .then((response) => {
        window.alert("register");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="loginContainer">
      <div className="wrapper">
        <div className="title">Toggl Register</div>
        <form action="#">
          <div className="field">
            <input
              type="text"
              required=""
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <label>Name</label>
          </div>
          <div className="field">
            <input
              type="email"
              required=""
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <label>Email Address</label>
          </div>
          <div className="field">
            <input
              type="number"
              required=""
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
            <label>Phone</label>
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
          <div className="field">
            <input
              type="password"
              required=""
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
            <label> Confirm Password</label>
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
            Already have an account? <Link to="/login">Login now</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;

import React from 'react'
import "./HomePage.css"

function homepage() {
  return (
    <div>
        <>
  <input type="checkbox" id="check" />
  <label htmlFor="check">
    <i className="fas fa-bars" id="btn" />
    <i className="fas fa-times" id="cancel" />
  </label>
  <div className="sidebar">
    <header>My Menu</header>
    <a href="#" className="active">
      <i className="fas fa-qrcode" />
      <span>Dashboard</span>
    </a>
    <a href="#">
      <i className="fas fa-link" />
      <span>Shortcuts</span>
    </a>
    <a href="#">
      <i className="fas fa-stream" />
      <span>Overview</span>
    </a>
    <a href="#">
      <i className="fas fa-calendar" />
      <span>Events</span>
    </a>
    <a href="#">
      <i className="far fa-question-circle" />
      <span>About</span>
    </a>
    <a href="#">
      <i className="fas fa-sliders-h" />
      <span>Services</span>
    </a>
    <a href="#">
      <i className="far fa-envelope" />
      <span>Contact</span>
    </a>
  </div>
</>

    </div>
  )
}

export default homepage
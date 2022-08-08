import React from "react";
import "./Projects.css";
import {useNavigate , Outlet} from "react-router-dom"

function Projects() {
    let navigate = useNavigate();
  return (
    <div className="container">
      <div className="projectHeader">
        <div className="projectTitle ps-2">
          <h3>Projects</h3>
        </div>
        {/* <ul>
          <li>hai</li>
          <li>hai</li>
          <li>hai</li>
        </ul> */}
        <div className="projectButtonDiv">
          <button className="projectButton">New project</button>
        </div>
      </div>
      <div className="projectBody">
      <div class="activity-card">
               <div className="d-flex">
                <li onClick={()=>{
                  navigate("/projects/view")
                }}>Projects</li>
                <li onClick={()=>{
                  navigate("/projects/dashboard")
                }}>Project Dashboard</li>
                <li onClick={()=>{
                  navigate("/projects/tasks")
                }}>Tasks</li>
                <li onClick={()=>{
                  navigate("/projects/team")
                }}>Team</li>
                </div>
          </div>
        <Outlet/>




    
      </div>
    </div>
  );
}

export default Projects;

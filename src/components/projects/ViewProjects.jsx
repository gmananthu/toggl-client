import React from "react";
import "./Projects.css";
import { useNavigate , Outlet } from "react-router-dom";

function ViewProjects() {
  let navigate = useNavigate();
  return (
    <div className="container">
      <div className="projectHeader">
        <div className="projectTitle ps-2">
          <h3>Projects</h3>
        </div>
        <div className="projectButtonDiv">
          <button className="projectButton">Edit project</button>
        </div>
      </div>
      <div>

        <section class="recent">
          <div class="activity-grid">
            <div class="activity-card">
              <div class="table-responsive">
                <table>
                  <thead>
                    <tr>
                      <th>Project</th>
                      <th>Client</th>
                      <th>Time Status</th>
                      <th>Team</th>
                      <th>Controls</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>New project</td>
                      <td>Client 1</td>
                      <td>0 H</td>
                      <td>New team</td>
                      <td>
                        <span onClick={()=>{
                            navigate("/projects/dashboard")
                        }} class="badge success">View project</span>
                      </td>
                    </tr>
                    <tr>
                      <td>New project2</td>
                      <td>Client 2</td>
                      <td>0 H</td>
                      <td>New team</td>
                      <td>
                        <span onClick={()=>{
                            navigate("/projects/dashboard")
                        }} class="badge success">View project</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      
      </div>
    </div>
  );
}

export default ViewProjects;

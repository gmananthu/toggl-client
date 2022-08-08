import React from "react";
import "./Projects.css";
import {useNavigate} from "react-router-dom"

function AddProjects() {
    let navigate = useNavigate();
  return (
    <div className="container">
      <div className="projectHeader">
        <div className="projectTitle ps-2">
          <h3>Add Projects</h3>
        </div>
        {/* <ul>
          <li>hai</li>
          <li>hai</li>
          <li>hai</li>
        </ul> */}
        <div className="projectButtonDiv">
          <button className="projectButton">Edit project</button>
        </div>
      </div>
      <div>
        {/* <section class="recent">
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
                            navigate("/")
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
                            navigate("/")
                        }} class="badge success">View project</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section> */}
      </div>
    </div>
  );
}

export default AddProjects;

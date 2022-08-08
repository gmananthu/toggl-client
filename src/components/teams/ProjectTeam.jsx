import React from 'react'
import {useNavigate} from "react-router-dom"
import "./Teams.css";

function ProjectTeam() {
    let navigate = useNavigate();

  return (
    <div className="container">
    {/* <div className="projectHeader">
      <div className="projectTitle ps-2">
        <h3>Tasks</h3>
      </div>
      <div className="projectButtonDiv">
        <button className="projectButton">Add task</button>
      </div>
    </div> */}
    
      <section class="recent">
        <div class="activity-grid">
          <div class="activity-card">
            <div class="table-responsive">
                        <div className="AddButtonDiv">
                        <button className='projectTeamAddButton float-end'>+ Add Member</button>
                        </div>
              <table>
                <thead>
                  <tr>
                    <th>Members</th>
                    <th>Rate</th>
                    <th>Cost</th>
                    <th>Role</th>
                    {/* <th>Role</th> */}
                    {/* <th>Controls</th> */}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Ananthu</td>
                    <td>1000</td>
                    <td>10000</td>
                    <td>
                      <span
                        onClick={() => {
                          //   navigate("/projects/edit")
                        }}
                        class="badge success"
                      >
                        Admin
                      </span>
                    </td>
                  </tr>
                  <tr>
                  <td>Ananthu</td>
                    <td>1000</td>
                    <td>10000</td>
                    <td>
                      <span
                        onClick={() => {
                          //   navigate("/projects/edit")
                        }}
                        class="badge success"
                      >
                        Admin
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>  
  </div>
  )
}

export default ProjectTeam
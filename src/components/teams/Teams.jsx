import React from 'react'
import {useNavigate} from "react-router-dom"

function Teams() {
    let navigate = useNavigate();

  return (
    <div className="container">
    <div className="projectHeader">
      <div className="projectTitle ps-2">
        <h3>Team</h3>
      </div>
      <div className="projectButtonDiv">
        <button className="projectButton">Invite members</button>
      </div>
    </div>
    <div className="projectBody">
      <section class="recent">
        <div class="activity-grid">
          <div class="activity-card">
            <div class="table-responsive">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Workspace</th>
                    <th>Role</th>
                    <th>Controls</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Ananthu</td>
                    <td>ananthu@gmail.com</td>
                    <td>New Workspace</td>
                    <td>Admin</td>
                    <td>
                      <span onClick={()=>{
                          navigate("/projects/edit")
                      }} class="badge success">Choose role</span>
                    </td>
                  </tr>
                  <tr>
                  <td>Ananthu</td>
                    <td>ananthu@gmail.com</td>
                    <td>New Workspace</td>
                    <td>Admin</td>
                    <td>
                      <span onClick={()=>{
                          navigate("/projects/edit")
                      }} class="badge success">Choose role</span>
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
  )
}

export default Teams
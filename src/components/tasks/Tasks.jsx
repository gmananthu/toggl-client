import React from "react";
import { useNavigate } from "react-router-dom";

function Tasks() {
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
                <table>
                  <thead>
                    <tr>
                      <th>Tasks</th>
                      <th>Assignee</th>
                      <th>Progress</th>
                      {/* <th>Role</th> */}
                      {/* <th>Controls</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>new task</td>
                      <td>
                        <span
                          onClick={() => {
                            //   navigate("/projects/edit")
                          }}
                          class="badge success"
                        >
                          Assign team member
                        </span>
                      </td>
                      <td>23H</td>
                    </tr>
                    <tr>
                      <td>new task</td>
                      <td>
                        <span
                          onClick={() => {
                            //   navigate("/projects/edit")
                          }}
                          class="badge success"
                        >
                          Assign team member
                        </span>
                      </td>
                      <td>23H</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>  
    </div>
  );
}

export default Tasks;

import React from "react";
import "./Timer.css";

function Timer() {
  return (
    <div className="container">
      <div className="projectHeader">
        <div>
          <input
            className="addTaskInput"
            type="text"
            placeholder="What are you working on?"
          />
        </div>

        <div className="d-flex">
          <div className="createProjectButton">
            <span>
              <button className="playButton">+ Create a project</button>
            </span>
          </div>
          <div className="timer">
            <h4>
              <b>00:00:00</b>
            </h4>
          </div>

          <button className="playButton">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAABmJLR0QA/wD/AP+gvaeTAAAEFUlEQVRYhdWYb0zVVRjHP+f3uxcu/3F1FYgB5dy0C41GtVH5orTV1OmMVqupY9OM+UJeBFlbtbu1/JMQNZs5l5vTIWuM9aZyzK1MJ6WTzQRCjdQLERO5EJc/4uXe39ML4PLvcv/T6vvuPOd5zvO5vz3nnOdc+A9JRRr4SNGeNMPtyTQgycBw6x7pc7R/1vOvwGQV2RPN7qHNiNogsBp4yI+bC9RFhdFojOt1Xdc/+SumMDabPW5IGypF1EfA0jDWNoAG3SuVt9qrHVHD5BZUrhORw0BuGBBzNapE9jnaUvaC3YgIJif/7XJQ1YAeBYhPIpw2W/TXbzYfGAwLJqeg4ijCm7GAmJOuxesxPdd9bZ/T36w2H6Ty3cUBAZACXR//xmazxwWFycmv3IDIx4sDMinFapc29Kn/qUnl5dkt3uTh6wpyFhVmKrGwxtFW9cNMm+/LGEkju0MB2fpaMWe/reTEke2sWL4sYhhRVDOnZnUAq21XslmZG4CEQAskJsRR99VOlqQnkZP9AK9seoL+gRFa27sj4clIsT7zi+tuU8eUQQNIIKEEWBIsOj7ehMk0vdMTLGb2fvAyX1ZvIS014O/wK00ZpbPGAKLUxrBXmqEX1+Tz3dflFBWGezaqdUVFO82zYLSJuyYqZWWmU3fsLcrL1qJpIV95Kb1jKYU+mIzH37MKWKOFATDpGuVlazl5ZAfLlqaGFKPQVvlgEtz3s2IBMlPFTy2n4cQu8nIeDOorysj2wRiKpFjDAGRlpLN967NB/RQqeRoGk3sxYAxDOHfhRnBHJWM+GN2k9cUaZHh4jN17TnHm7G9BfcXAl1+7veKPLmAsgH9Yam3vZuMbX/D9mZaQ/JXidx8M9fVe4HK0ECLC8VMXKNl2mNudIX9sL8rsy20CUCKNolTwaltAzoER3vmwnh/PXws39GJny/6BqcHERamrWiZ61oAyDJlna7rUwfpXP48EBBGpnTnWABxXq26BqgsWPOi6x0+TO8Tj8VJ1qJFtZcfovesKGwToT/ToJ2cafOd27mMVD4tBOxAfaAWTSce2MpPunkH6nEORQEwmVpWO1oNVM22+K3jwTtPfadbiJILUjmEId3pdjN6L6ni6Yo137ejpaZ5VGrPazs5HO98X4XQ0WUKQE+UtaW4+Oj53YnZDXl/vFbxbYHrvx1hu0dTmzpaam/4m570O/myr6fe45WngXIxBnEq0l7quHjy/kIPfB9qQ8+dRa2pRnVfXs1Gq0J9POBL4VTeZnne0HLgSyC9oF5SbX7FeoApYGQHHAKL2Wy2DNf5qJGyYCdm13PzhTaJUKSIvELhxN0Aug6qNG7t/vKPjUMiHUNj/z+Tl2S3e1JEnlRirEJWFYFFKvAK9SnHDMx53aaHn6/9K/wAF1GZICeu4NgAAAABJRU5ErkJggg=="/>
          </button>
        </div>
      </div>

      <div className="timerBody d-flex flex-column">
        <section className="totalWorkContainer">
          <div>
            <span className="ps-4">THIS WEEK</span>
          </div>
          <div>
            <span className="pe-4">TODAY 00:00:00</span>
            <input className="calender" type="date" />
            <span className="pe-3">WEEK TOTAL 00:00:24</span>
          </div>
        </section>
        <hr />
        <section className="todayWorkContainer">
        <span className="ps-4 pt-2">TODAY</span>
        <hr />
          <section class="recent">
            <div class="activity-grid">
              <div class="activity-card">
                <div class="table-responsive">
                  <table>
                    <tbody>
                      <tr>
                        <td>Project 1</td>
                        <td>3:15-4:45</td>
                        <td>1:30</td>
                      </tr>
                      <tr>
                        <td>Project 2</td>
                        <td>3:15-4:15</td>
                        <td>1:30</td>
                      </tr>
                     
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
}

export default Timer;

import React from "react";
import "./PageThree.css";

export default function PageThree() {
  return (
    <div className=".page-three">
      <div className="card-content">
        <div className="card-subtitle">WORK EXPERIENCE</div>
        <div className="card-timeline">
          <div className="card-item" data-year="2014">
            <div className="card-item-title">
              Front-end Developer at <span>JotForm</span>
            </div>
            <div className="card-item-desc">
              Disrupt stumptown retro everyday carry unicorn.
            </div>
          </div>
          <div className="card-item" data-year="2016">
            <div className="card-item-title">
              UI Developer at <span>GitHub</span>
            </div>
            <div className="card-item-desc">
              Developed new conversion funnels and disrupt.
            </div>
          </div>
          <div className="card-item" data-year="2018">
            <div className="card-item-title">
              Illustrator at <span>Google</span>
            </div>
            <div className="card-item-desc">
              Onboarding illustrations for App.
            </div>
          </div>
          <div className="card-item" data-year="2020">
            <div className="card-item-title">
              Full-Stack Developer at <span>CodePen</span>
            </div>
            <div className="card-item-desc">
              Responsible for the encomposing brand expreience.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

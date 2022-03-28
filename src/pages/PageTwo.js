import React from "react";
import "./PageTwo.css";
import DownArrow from "../components/DownArrow/DownArrow";
import WaveBlock from "../pages/WaveBlock/WaveBlock";
import ProfileCard from "../components/ProfileCard/ProfileCard";

export default function PageTwo() {
  return (
    <div>
      <div className="wave-container">
        <WaveBlock />
      </div>
      <DownArrow />
      <div className="skills-container">
        <div className="skills-container__left">
          <ProfileCard />
        </div>
      </div>
    </div>
  );
}

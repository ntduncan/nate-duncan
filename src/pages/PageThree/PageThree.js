import React from "react";
import "./PageThree.css";
import WaveBlock from "../WaveBlock/WaveBlock";

export default function PageThree() {
  return (
    <div className=".page-three">
      <div className="wave-container rotate">
        <WaveBlock />
      </div>
      <div className="about-me">
        <div className="about-me__right"></div>
        <div className="about-me__left"></div>
      </div>
    </div>
  );
}

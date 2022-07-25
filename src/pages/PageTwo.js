import React from "react";
import "./PageTwo.css";
import DownArrow from "../components/DownArrow/DownArrow";
import WaveBlock from "../pages/WaveBlock/WaveBlock";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import CollapsibleCards from '../components/CollapsibleCards/CollapsibleCards';

export default function PageTwo() {
  const cardData = [
    {
      logo: "https://us.123rf.com/450wm/katarepsius/katarepsius1807/katarepsius180700197/114801945-black-silhouette-of-leafed-tree-icon-isolated-on-transparent-background-vector-illustration-sign-sym.jpg?ver=6",
      title: "Test 1",
      body: "This is the first test card",
    },
    {
      logo: "https://us.123rf.com/450wm/katarepsius/katarepsius1807/katarepsius180700197/114801945-black-silhouette-of-leafed-tree-icon-isolated-on-transparent-background-vector-illustration-sign-sym.jpg?ver=6",
      title: "Test 2",
      body: "This is the second test card",
    },
    {
      logo: "https://us.123rf.com/450wm/katarepsius/katarepsius1807/katarepsius180700197/114801945-black-silhouette-of-leafed-tree-icon-isolated-on-transparent-background-vector-illustration-sign-sym.jpg?ver=6",
      title: "Test 3",
      body: "This is the third test card",
    },
  ]



  return (
    <div>
      <div className="wave-container">
        <WaveBlock />
      <DownArrow />
          <CollapsibleCards cardData={cardData}/>
      </div>
      {/* <div className="skills-container">
        <div className="skills-container__left">
          <ProfileCard />
        </div>
      </div> */}
    </div>
  );
}

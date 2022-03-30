import React from "react";
import "./PageThree.css";
import WaveBlock from "../WaveBlock/WaveBlock";
import BlogCardLeft from "../../components/BlogCard/BlogCardLeft";

export default function PageThree() {
  return (
    <div className=".page-three">
      <div className="wave-container rotate">
        <WaveBlock />
      </div>
      <div className="about-me">
        <div className="about-me__right">
          <BlogCardLeft alternate={false}>
            <h1>Learning to Code</h1>
            <h2>Opening a door to the future</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum
              dolorum architecto obcaecati enim dicta praesentium, quam nobis!
              Neque ad aliquam facilis numquam. Veritatis, sit.
            </p>
          </BlogCardLeft>
          <BlogCardLeft alternate={true}>
            <h1>Learning to Code</h1>
            <h2>Opening a door to the future</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum
              dolorum architecto obcaecati enim dicta praesentium, quam nobis!
              Neque ad aliquam facilis numquam. Veritatis, sit.
            </p>
          </BlogCardLeft>
          <BlogCardLeft alternate={false}>
            <h1>Learning to Code</h1>
            <h2>Opening a door to the future</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum
              dolorum architecto obcaecati enim dicta praesentium, quam nobis!
              Neque ad aliquam facilis numquam. Veritatis, sit.
            </p>
          </BlogCardLeft>
        </div>
        <div className="about-me__left"></div>
        <div className="about-me__right"></div>
      </div>
    </div>
  );
}

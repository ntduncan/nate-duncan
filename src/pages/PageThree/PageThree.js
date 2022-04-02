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
        <h1 className="about-me__title">When I'm not working I'm usually...</h1>
        <div className="about-me__body">
          <BlogCardLeft
            alternate={false}
            photoUrl="https://images.unsplash.com/photo-1598909820593-c970004196f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGZseSUyMGZpc2hpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
          >
            <h1>Fly Fishing</h1>
            <h2>Getting outside</h2>
            <p>
              Coding is great, but it is can easily become your career and
              hobby. I like fly fishing because it is a good excuse to get away
              from the computer and get some fresh air.
            </p>
          </BlogCardLeft>
          <BlogCardLeft
            alternate={true}
            photoUrl="https://images.unsplash.com/photo-1556244573-c3686c0f0e78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
          >
            <h1>Learning to Code</h1>
            <h2>Opening a door to the future</h2>
            <p>
              I love coding! More than just coding, I enjoy learning to code. I
              spend a good amount of my free time taking Udemy courses,
              exploring codepen.io, and testing out new technologies that I
              haven't tried out yet.
            </p>
          </BlogCardLeft>
          <BlogCardLeft
            alternate={false}
            photoUrl="https://images.unsplash.com/photo-1470549638415-0a0755be0619?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzF8fHJlYWRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
          >
            <h1>Reading</h1>
            <h2>Experience life in a differnt time</h2>
            <p>
              I enjoy deep thinking into philisophical topics. Old literature is
              a great source of deep thinking opportunities. Reading books from
              50 - 100 years ago allows the reader to see life through a
              completely differnt lense.
            </p>
          </BlogCardLeft>
        </div>
      </div>
        <div className="wave-container">
          <WaveBlock />
        </div>
    </div>
  );
}

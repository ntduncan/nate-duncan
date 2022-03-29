import React, { useState } from "react";
import "./ProfileCard.css";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

export default function ProfileCard() {
  const buttons = document.querySelectorAll(".card-buttons button");
  const sections = document.querySelectorAll(".card-section");
  const cardRef = React.createRef();

  const aboutRef = React.createRef();
  const contactRef = React.createRef();

  const about = React.createRef();
  const contact = React.createRef();

  let [targetSection, setTargetSection] = useState(about);

  const handleButtonClick = () => {
    //   targetSection.current.getAttribute("data-section") !== about
    //     ? cardRef.current.classList.add("is-active")
    //     : cardRef.current.classList.remove("is-active");
    //   cardRef.current.setAttribute("data-state", targetSection);
  };

  return (
    <div>
      <div className="card" data-state="#about" ref={cardRef}>
        <div className="card-header">
          <div className="card-cover"></div>
          <img
            className="card-avatar"
            src="https://avatars.githubusercontent.com/u/60360613?s=400&u=9036dd1f5e6197422ca5d5d6ec3cd7d85f43f104&v=4"
            alt="avatar"
          />
          <h1 className="card-fullname">Nate Duncan</h1>
          <h2 className="card-jobtitle">Full Stack Developer</h2>
        </div>
        <div className="card-social">
          <a href="#">
            <FaGithubSquare />
          </a>
          <a href="#">
            <FaLinkedin />
          </a>
        </div>
        <div className="card-main">
          <div className="card-section is-active" id="about" ref={about}>
            <div className="card-content">
              <h2 className="card-subtitle">Frontend Exp</h2>
              <br />
              <div className="icon-wrapper">
                <img
                  className="tech-icon"
                  src="https://daynin.github.io/clojurescript-presentation/img/react-logo.png"
                />
                <img
                  className="tech-icon"
                  src="https://angularjs.org/img/ng-logo.png"
                />
                <img
                  className="tech-icon"
                  src="https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg"
                />
                <img
                  className="tech-icon"
                  src="https://imgs.search.brave.com/NtMHE94kRcAOBDWfA9e5p4GSCgiM8kSUhv_QKwJF7rM/rs:fit:211:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5V/b1RMUkthTWZNcWhj/bGhfRVRNLXJnQUFB/QSZwaWQ9QXBp"
                />
                <img
                  className="tech-icon"
                  src="https://imgs.search.brave.com/TMqzwKOX3gFX0hiO_dfp7tMAfP2Mjm2smTmHleAC9as/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5i/SThLRGpkOC1uRHZ6/VFhfVW9rN0Z3SGFI/YSZwaWQ9QXBp"
                />
              </div>
            </div>
          </div>
          <div className="card-section" id="contact" ref={contact}>
            <div className="card-content">
              <h2 className="card-subtitle">Backend Exp</h2>
              <div className="icon-wrapper">
                <img
                  className="tech-icon"
                  src="https://code-maven.com/img/node.png"
                />
                <img
                  className="tech-icon"
                  src="https://imgs.search.brave.com/d9gQcdK58bEcEfVYg9I1nnMRHKGqOuF35gnBjB-GWkE/rs:fit:185:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5u/cGJhR1ZPc0JjLUtW/bUFTdUNMSGhBSGFK/UyZwaWQ9QXBp"
                />
                <img
                  className="tech-icon"
                  src="https://imgs.search.brave.com/JLxnDhbs2GAdhNIy4Y1YiauKpBIgy8b7dI7drWfdhGk/rs:fit:300:225:1/g:ce/aHR0cHM6Ly90c2Uy/LmV4cGxpY2l0LmJp/bmcubmV0L3RoP2lk/PU9JUC5JX21vMGlY/RE84UkRTbDYwdFAz/UVNnQUFBQSZwaWQ9/QXBp"
                />
              </div>
            </div>
          </div>
          <div className="card-buttons">
            <button
              data-section="#about"
              className="is-active"
              ref={aboutRef}
              onClick={() => {
                about.current.classList.add("is-active");
                contact.current.classList.remove("is-active");
                aboutRef.current.classList.add("is-active");
                contactRef.current.classList.remove("is-active");
                setTargetSection(about);
                handleButtonClick();
              }}
            >
              FRONTEND
            </button>
            <button
              data-section="#contact"
              ref={contactRef}
              onClick={() => {
                about.current.classList.remove("is-active");
                contact.current.classList.add("is-active");
                aboutRef.current.classList.remove("is-active");
                contactRef.current.classList.add("is-active");
                setTargetSection(contact);
                handleButtonClick();
              }}
            >
              BACKEND
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

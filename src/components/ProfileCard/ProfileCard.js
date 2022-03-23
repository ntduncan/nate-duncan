import React, {useState} from "react";
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
            src="https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
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
              <div className="card-subtitle ">Frontend</div>

            </div>
          </div>
          <div className="card-section" id="contact" ref={contact}>
            <div className={`card-content`}>
              <div className="card-subtitle">Backend</div>
              <div className="card-contact-wrapper">
                <div className="card-contact">
                  BACKEND
                </div>
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
                  setTargetSection(about)
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
                setTargetSection(contact)
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

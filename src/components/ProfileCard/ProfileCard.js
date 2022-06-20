import React from "react";
import "./ProfileCard.css";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

export default function ProfileCard() {
  const cardRef = React.createRef();

  const aboutRef = React.createRef();
  const contactRef = React.createRef();

  const about = React.createRef();
  const contact = React.createRef();

  // let [targetSection, setTargetSection] = useState(about);

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
          <a href="https://github.com/ntduncan" target="_blank" width="50" height="50">
            <FaGithubSquare />
          </a>
          <a href="https://www.linkedin.com/in/nate-duncan/" target="_blank" width="50" height="50">
            <FaLinkedin />
          </a>
        </div>
        <div className="card-main">
          <div className="card-section is-active" id="about" ref={about}>
            <div className="card-content">
              <h2 className="card-subtitle">Technology Experience</h2>
              <br />
              <div className="icon-wrapper">
                <img
                  className="tech-icon"
                  src="https://daynin.github.io/clojurescript-presentation/img/react-logo.png"
                  alt="tech-icon"
                />
                <img
                  className="tech-icon"
                  src="https://angularjs.org/img/ng-logo.png"
                  alt="tech-icon"
                />
                <img
                  className="tech-icon"
                  src="https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg"
                  alt="tech-icon"
                />
                <img
                  className="tech-icon"
                  src="https://imgs.search.brave.com/NtMHE94kRcAOBDWfA9e5p4GSCgiM8kSUhv_QKwJF7rM/rs:fit:211:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5V/b1RMUkthTWZNcWhj/bGhfRVRNLXJnQUFB/QSZwaWQ9QXBp"
                  alt="tech-icon"
                />
                <img
                  className="tech-icon"
                  src="https://imgs.search.brave.com/TMqzwKOX3gFX0hiO_dfp7tMAfP2Mjm2smTmHleAC9as/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5i/SThLRGpkOC1uRHZ6/VFhfVW9rN0Z3SGFI/YSZwaWQ9QXBp"
                  alt="tech-icon"
                />
                <img
                  className="tech-icon"
                  src="https://code-maven.com/img/node.png"
                  alt="tech-icon"
                />
                <img
                  className="tech-icon"
                  src="https://imgs.search.brave.com/d9gQcdK58bEcEfVYg9I1nnMRHKGqOuF35gnBjB-GWkE/rs:fit:185:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5u/cGJhR1ZPc0JjLUtW/bUFTdUNMSGhBSGFK/UyZwaWQ9QXBp"
                  alt="tech-icon"
                />
                <img
                  className="tech-icon"
                  src="https://imgs.search.brave.com/JLxnDhbs2GAdhNIy4Y1YiauKpBIgy8b7dI7drWfdhGk/rs:fit:300:225:1/g:ce/aHR0cHM6Ly90c2Uy/LmV4cGxpY2l0LmJp/bmcubmV0L3RoP2lk/PU9JUC5JX21vMGlY/RE84UkRTbDYwdFAz/UVNnQUFBQSZwaWQ9/QXBp"
                  alt="tech-icon"
                />
              </div>
            </div>
          </div>
          <div className="card-section" id="contact" ref={contact}>
            <div className="card-content">
              <div className="row">
                <hr/>
                  <h1>BYU-Idaho Support Center</h1>
                  <hr/>
                <div className="column">
              <div className="work-experience">
                <div className="job-title">
                  <h2>Reports & Systems Developer</h2>
                  <h4 className="work-time">Nov 2020 – Apr 2021</h4>
                </div>
                <ul className="work-details">
                  <li>
                    Building and maintaining major data systems for the support
                    center
                  </li>
                  <li>
                    Creation and maintenance of the agent evaluation website
                    used by the Quality Assurance team.
                  </li>
                  <li>
                    Creation and maintenance of forms, reports, and other
                    support center systems.
                  </li>
                </ul>
              </div>
                </div>
                <div className="column">
                <div className="work-experience">
                <div className="job-title">
                  <h2>Reports and Systems Project Manager</h2>
                  <h4 className="work-time">Apr 2021 - Present</h4>
                </div>
                <ul className="work-details">
                  <li>Oversee progress of all team projects</li>
                  <li>
                    Brainstorming/Collaboration on automations for other departments on campus.
                  </li>
                  <li>
                    Recruiting and hiring developers
                  </li>
                  <li>
                    Regularly conducting progress reviews with employees
                  </li>
                </ul>
              </div>
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
                // setTargetSection(about);
                handleButtonClick();
              }}
            >
              TOOLBOX
            </button>
            <button
              data-section="#contact"
              ref={contactRef}
              onClick={() => {
                about.current.classList.remove("is-active");
                contact.current.classList.add("is-active");
                aboutRef.current.classList.remove("is-active");
                contactRef.current.classList.add("is-active");
                // setTargetSection(contact);
                handleButtonClick();
              }}
            >
              EXPERIENCE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

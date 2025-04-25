import React from "react";
import gesturemindsLogo from "../assets/gestureminds.png";
import "./experience.css";

function Experience() {
  return (
    <div className="experience-component">
      <h1>Experience</h1>
      <div className="experience-list">
        <div className="experience-item">
          <div className="experience-logo">
            <img src={gesturemindsLogo} alt="GestureMinds Webservices Logo" />
          </div>
          <div className="experience-details">
            <h1>Fullstack Developer</h1>
            <div className="company-div">GestureMinds Webservices</div>
            <div className="period-div">Apr 2024 - Present</div>
            <br />
            <p>
              - Built scalable web applications using React.js and Node.js. and
              Optimized MongoDB queries, improving performance by 30%.
              <br />
              - Designed RESTful APIs for seamless frontend-backend
              communication.
              <br />
              - Integrated third-party APIs like payment gateways and
              authentication.
              <br />
              - Conducted code reviews and implemented CI/CD pipelines.
              <br />
              - Utilized Docker, Git, and Postman for efficient development
              workflows.
              <br />
            </p>
          </div>
        </div>
        <div className="experience-item">
          <div className="experience-logo">
            <img src={gesturemindsLogo} alt="GestureMinds Webservices Logo" />
          </div>
          <div className="experience-details">
            <h1>Frontend Developer</h1>
            <div className="company-div">GestureMinds Webservices</div>
            <div className="period-div">Jan 2023 - Mar 2024</div>
            <br />
            <p>
              - Designed and implemented responsive and user-friendly web
              interfaces using React.js, ensuring cross-browser compatibility.
              <br />
              - Collaborated with backend developers to integrate RESTful APIs,
              improving data flow and user experience.
              <br />
              - Worked closely with UI/UX designers to translate wireframes and
              prototypes into high-quality code.
              <br />
              - Implemented state management solutions using Redux to streamline
              complex application workflows.
              <br />
              - Utilized tools like Git, Postman, and Jira to manage version
              control, API testing, and project tracking.
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;

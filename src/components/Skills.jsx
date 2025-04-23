import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
} from "react-icons/fa"; // Import icons from Font Awesome
import {
  SiMongodb,
  SiPostman,
  SiGit,
  SiExpress,
  SiGithub,
  SiJest,
  // SiBootstrap,
  SiTailwindcss,
  // SiRedux,
} from "react-icons/si"; // Import additional icons
import "./skills.css"; // Import CSS for styling

function Skills() {
  return (
    <div className="skills-component">
      <h1>Skills</h1>
      <p className="skills-paragraph">
        I am proficient in the following tech stacks:
      </p>
      <div className="skills-icons">
        <div className="skill-item">
          <FaReact className="skill-icon" size={60} color="#61DBFB" />{" "}
          {/* React Icon */}
          <p>React</p>
        </div>
        <div className="skill-item">
          <FaNodeJs className="skill-icon" size={60} color="#68A063" />{" "}
          {/* Node.js Icon */}
          <p>Node.js</p>
        </div>
        <div className="skill-item">
          <FaJsSquare className="skill-icon" size={60} color="#F7DF1E" />{" "}
          {/* JavaScript Icon */}
          <p>JavaScript</p>
        </div>
        <div className="skill-item">
          <SiMongodb className="skill-icon" size={60} color="#4DB33D" />{" "}
          {/* MongoDB Icon */}
          <p>MongoDB</p>
        </div>
        <div className="skill-item">
          <SiExpress className="skill-icon" size={60} color="#000000" />{" "}
          {/* Express Icon */}
          <p>Express</p>
        </div>
        <div className="skill-item">
          <SiJest className="skill-icon" size={60} color="#C21325" />{" "}
          {/* Jest Icon */}
          <p>Jest</p>
        </div>
        <div className="skill-item">
          <SiTailwindcss className="skill-icon" size={60} color="#38B2AC" />
          <p>Tailwind CSS</p>
        </div>
        <div className="skill-item">
          <FaHtml5 className="skill-icon" size={60} color="#E34C26" />{" "}
          {/* HTML5 Icon */}
          <p>HTML5</p>
        </div>
        <div className="skill-item">
          <FaCss3Alt className="skill-icon" size={60} color="#1572B6" />{" "}
          {/* CSS3 Icon */}
          <p>CSS3</p>
        </div>
        <div className="skill-item">
          <SiPostman className="skill-icon" size={60} color="#FF6C37" />{" "}
          {/* Postman Icon */}
          <p>Postman</p>
        </div>
        <div className="skill-item">
          <SiGit className="skill-icon" size={60} color="#F05032" />{" "}
          {/* Git Icon */}
          <p>Git</p>
        </div>
        <div className="skill-item">
          <SiGithub className="skill-icon" size={60} color="#181717" />{" "}
          {/* GitHub Icon */}
          <p>GitHub</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;

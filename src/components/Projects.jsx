import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./projects.css"; // Import your CSS file for styling
import task from "../assets/task.png";
import expense from "../assets/expense.png";
import ecommerce from "../assets/ecommerce.png";
import calculator from "../assets/calculator.png";
import tictac from "../assets/tictac.png";

function Projects() {
  // const projects = [
  //   {
  //     title: "E-commerce Platform",
  //     description:
  //       "A full-stack e-commerce platform with user authentication, product management, and payment integration.",
  //     technologies: ["React.js", "Node.js", "MongoDB", "Stripe"],
  //     github: "https://github.com/Rajnish-Bansal/Ecommerce",
  //     demo: "https://ecommerce-peach-pi.vercel.app/",
  //     image: "path/to/ecommerce-image.jpg",
  //   },
  //   {
  //     title: "Expense Tracker",
  //     description:
  //       "A web application to track daily expenses with category-wise breakdown and monthly reports.",
  //     technologies: ["React.js", "Context API", "CSS"],
  //     github: "https://github.com/Rajnish-Bansal/expense-tracker",
  //     demo: "https://expense-tracker-liart-three.vercel.app/",
  //     image: "path/to/ecommerce-image.jpg",
  //   },
  //   {
  //     title: "Task Manager",
  //     description:
  //       "A task management app to create, update, and delete tasks with a focus on productivity.",
  //     technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
  //     github: "https://github.com/Rajnish-Bansal/task-manager-frontend2",
  //     demo: "task-manager-black-nu.vercel.app",
  //     image: "path/to/ecommerce-image.jpg",
  //   },
  //   {
  //     title: "Tic Tac Toe",
  //     description:
  //       "A simple and interactive Tic Tac Toe game with a clean UI and two-player functionality.",
  //     technologies: ["React.js", "CSS"],
  //     github: "https://github.com/Rajnish-Bansal/Tic-Tac-Toe",
  //     demo: "https://tic-tac-toe-azure-xi-51.vercel.app/",
  //     image: "path/to/ecommerce-image.jpg",
  //   },
  //   {
  //     title: "Calculator",
  //     description:
  //       "A basic calculator application with support for arithmetic operations and a responsive design.",
  //     technologies: ["HTML", "CSS", "JavaScript"],
  //     github: "https://github.com/Rajnish-Bansal/my-calculator",
  //     demo: "my-calculator-tau-jade.vercel.app",
  //     image: "path/to/ecommerce-image.jpg",
  //   },
  // ];

  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce platform with user authentication, product management, and payment integration.",
      technologies: ["React.js", "Node.js", "MongoDB"],
      github: "https://github.com/Rajnish-Bansal/Ecommerce",
      demo: "https://ecommerce-peach-pi.vercel.app/",
      image: ecommerce,
    },
    {
      title: "Expense Tracker",
      description:
        "A web application to track daily expenses with category-wise breakdown and monthly reports.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
      github: "https://github.com/Rajnish-Bansal/expense-tracker",
      demo: "https://expense-tracker-liart-three.vercel.app/",
      image: expense,
    },
    {
      title: "Task Manager",
      description:
        "A task management app to create, update, and delete tasks with a focus on productivity.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
      github: "https://github.com/Rajnish-Bansal/task-manager-frontend2",
      demo: "https://task-manager-black-nu.vercel.app/",
      image: task,
    },
    {
      title: "Tic Tac Toe",
      description:
        "A simple and interactive Tic Tac Toe game with a clean UI and two-player functionality.",
      technologies: ["React.js", "CSS"],
      github: "https://github.com/Rajnish-Bansal/Tic-Tac-Toe",
      demo: "https://tic-tac-toe-azure-xi-51.vercel.app/",
      image: tictac,
    },
    {
      title: "Calculator",
      description:
        "A basic calculator application with support for arithmetic operations and a responsive design.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Rajnish-Bansal/my-calculator",
      demo: "https://my-calculator-tau-jade.vercel.app/",
      image: calculator,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    gap: 50,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 2000, // Delay between auto-scrolls (in ms)
    arrows: true,
  };

  const mobileSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    gap: 50,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 2000, // Delay between auto-scrolls (in ms)
    arrows: true,
  };

  return (
    <div className="projects-component">
      <h1>Projects</h1>
      {/* <img src={ecommerce} /> */}
      <div className="projects-div">
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} />
              </div>
              <h2>{project.title}</h2>
              <p className="project-description">{project.description}</p>
              <p className="project-technologies">
                <strong>Technologies:</strong> {project.technologies.join(", ")}
              </p>
              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="mobile-projects-div">
        <Slider {...mobileSettings}>
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="mobile-project-image">
                <img src={project.image} />
              </div>
              <h2>{project.title}</h2>
              <p className="project-description">{project.description}</p>
              <p className="project-technologies">
                <strong>Technologies:</strong> {project.technologies.join(", ")}
              </p>
              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Projects;

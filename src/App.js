import "./App.css";
import "./components/dark.css";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="app">
      <div className="navbar-container">
        <Navbar />
      </div>
      <div id="home" className="home-container">
        <Home />
      </div>
      <div id="skills" className="skills-container">
        <Skills />
      </div>
      <div id="experience" className="experience-container">
        <Experience />
      </div>
      <div id="projects" className="projects-container">
        <Projects />
      </div>
      <div id="contact" className="contact-container">
        <Contact />
      </div>
    </div>
  );
}

export default App;

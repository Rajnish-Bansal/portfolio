import React from "react";
import "./home.css";
import dp from "../assets/DP.jpg"; // Import your image here

function Home() {
  return (
    <div className="home-component">
      <div className="intro-div">
        <div>
          <span className="dark-p"> Hi </span> 👋,
          <br />I am Rajnish Bansal
        </div>
        {/* <p>I am Rajnish Bansal </p> */}
        <p className="intro-paragraph">
          I build things for web. I am a{" "}
          <span className="dark-p">fullstack developer.</span>
          <br />I am passionate about learning new technologies and building
          projects that solve real-world problems.
        </p>
      </div>
      <div className="image-div">
        <img src={dp} />
      </div>
    </div>
  );
}

export default Home;
<nav></nav>;

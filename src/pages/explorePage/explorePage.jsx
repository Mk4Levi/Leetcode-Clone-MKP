import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../../components/navbar/navbar";
import "./explorePage.css";
const ExplorePage = () => {
  return (
    <div id="explorePage">
      <Navbar />
      <div id="explore-hero">
        <h3>Welcome to</h3>
        <h1>
          <img src="./src/assets/leetcode_logo.svg" className="leet-logo" />
        </h1>
        <h2>A New Way to Learn</h2>
        <span id="home-text">
          LeetCode is the best platform to help you enhance your skills, expand
          your knowledge
          <br />
          and prepare for technical interviews.
        </span>
        <br />
        <Link to={"/signup"}>
          <button id="home-btn">Get Started</button>
        </Link>
      </div>
      <div>
        <img src="./src/assets/MK-White_Logo.png" className="home-img" />
        <img src="./src/assets/mk-robo.gif" className="home-robo" />
      </div>
    </div>
  );
};

export default ExplorePage;

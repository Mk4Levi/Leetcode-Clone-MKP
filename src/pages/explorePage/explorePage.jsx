import React from "react";
import { Link } from "react-router-dom";
import leetLogo from "./assets/leetcode_logo.svg";
import mkImg from "./assets/MK-White_Logo.png";
import roboImg from "./assets/mk-robo.gif";
import Navbar from "../../components/navbar/navbar";
import "./explorePage.css";

const ExplorePage = () => {
  return (
    <div id="explorePage">
      <Navbar />
      <div id="explore-hero">
        <h3>Welcome to</h3>
        <h1>
          <img src={leetLogo} className="leet-logo" />
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
        <img src={mkImg} className="home-img" />
        <img src={roboImg} className="home-robo" />
      </div>
    </div>
  );
};

export default ExplorePage;

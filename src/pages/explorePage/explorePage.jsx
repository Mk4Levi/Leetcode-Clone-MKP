import React from "react";
import { Link } from "react-router-dom";
import leetLogo from "./assets/leetcode_logo.svg";
import mkLogo from "./assets/mkLogo.png";
import mkCoder from "./assets/mkcoder.png";
// import mkImg from "./assets/MK-White_logo.png";
import roboImg from "./assets/mk-robo.gif";
import Navbar from "../../components/navbar/navbar";
import "./explorePage.css";

const ExplorePage = () => {
  return (
    <div id="explorePage">
      <Navbar />
      <div id="explore-hero">
        <h3>
          <b>Welcome to</b>
        </h3>
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
          <button id="home-btn">
            <b>Get Started</b>
          </button>
        </Link>
        <a href="https://manthan-mk-portfolio.vercel.app" target="_blank">
          <button id="home-btn">
            <b>My Website</b>
          </button>
        </a>
      </div>
      <img src={roboImg} className="home-robo" />
      <a href="https://manthan-mk-portfolio.vercel.app" target="_blank">
        <img src={mkLogo} className="home-img" />
      </a>

      <a href="https://mk-codezone.vercel.app" target="_blank">
        <img src={mkCoder} className="home-img2" />
      </a>
    </div>
  );
};

export default ExplorePage;

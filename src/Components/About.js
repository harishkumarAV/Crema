import React from "react";

import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">

      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
        Caffeine cravings? Consider them satisfied!
        </h1>
        <p className="primary-text">
        we believe that everyone deserves a delightful coffee experience, right in the comfort of their own home or office.
        With our dedicated team of baristas and a passion for brewing excellence, we are committed to bringing the rich aroma and taste of freshly brewed coffee to your doorstep.
        </p>
        <p className="primary-text">
        Cheers to creating delightful moments together! 
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
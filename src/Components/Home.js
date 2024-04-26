import React from "react";
import BannerBackground from "../Assets/about-background-image.avif";
import BannerImage from "../Assets/home-banner-image.jpg";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">

        <div className="home-text-section">
          <h1 className="primary-heading">
          Love and lattes in every cup!
          </h1>
          <p className="primary-text">
          Bringing the cafe experience to your doorstep, one cup of freshly brewed joy at a time.
          </p>
          <button className="secondary-button">
            Order Now <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
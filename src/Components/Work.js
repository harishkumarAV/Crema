import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Browse and Select",
      text: " From classic espressos to flavorful lattes and more, we have something to suit every coffee lover's taste.",
    },
    {
      image: ChooseMeals,
      title: "Customize Your Order",
      text: "Choose your preferred milk type, sweetness level, and any additional flavors or toppings to create a truly personalized cup.",
    },
    {
      image: DeliveryMeals,
      title: "Sit Back and Relax",
      text: "Our dedicated team of baristas will craft your coffee with love and precision, preparing it for a delightful journey to your doorstep.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
        Explore our menu, pick your favorite blend, and tailor it to your taste. Place your order, and our skilled baristas will craft your perfect cup. Then, our reliable team will swiftly bring it to your doorstep. Embrace the delight of freshly brewed coffee, hassle-free! 
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
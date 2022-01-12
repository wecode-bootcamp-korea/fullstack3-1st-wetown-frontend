import React from "react";
import ScrollToTop from "../../components/ScrollToTop";
import MainSlider from "../../components/Sliders/MainSlider/MainSlider";
import PetProductBox from "../../components/Main/PetProductBox";


import "./Main.scss";

const Main = () => {
  return (
    <div className="main">
      <ScrollToTop />
      <MainSlider />
      <PetProductBox />
    </div>
  );
};

export default Main;

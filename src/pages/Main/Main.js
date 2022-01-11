import React from "react";
import MainSlider from "../../components/Sliders/MainSlider/MainSlider";
import PetProductBox from "./PetProductBox";
import ScrollToTop from "../../components/ScrollToTop";
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

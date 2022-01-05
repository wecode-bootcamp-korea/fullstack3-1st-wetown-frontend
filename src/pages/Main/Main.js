import React from "react";
import HeaderNav from "../../components/HeaderNav/HeaderNav";
import MainSlider from "../../components/Sliders/MainSlider/MainSlider";
import PetProductBox from "./PetProductBox";

const Main = () => {
  return (
    <div className="main">
      <HeaderNav />
      <MainSlider />
      <PetProductBox />
    </div>
  );
};

export default Main;

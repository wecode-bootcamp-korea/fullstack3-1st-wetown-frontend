import React from "react";
import Footer from "../../components/Footer/Footer";
import HeaderNav from "../../components/HeaderNav/HeaderNav";
import MainSlider from "../../components/Sliders/MainSlider/MainSlider";
import PetProductBox from "./PetProductBox";

const Main = () => {
  return (
    <div className="main">
      <HeaderNav />
      <MainSlider />
      <PetProductBox />
      <Footer />
    </div>
  );
};

export default Main;

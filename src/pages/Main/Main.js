import React from "react";
// import "./Main.scss";
import HeaderNav from "../../components/HeaderNav/HeaderNav";
import MainSlider from "../../components/Sliders/MainSlider/MainSlider";
import sliderData from "../../components/Sliders/MainSlider/sliderData";
import Slider from "../../components/Sliders/MainSlider/Slider";
// import SimpleSlider from "../../components/Sliders/MainSlider/SliderSlick";
const Main = () => {
  return (
    <div className="main">
      <HeaderNav />
      {/* <Slider /> */}
      {/* <SimpleSlider /> */}
      <MainSlider />
      {/* <sliderData /> */}
    </div>
  );
};

export default Main;

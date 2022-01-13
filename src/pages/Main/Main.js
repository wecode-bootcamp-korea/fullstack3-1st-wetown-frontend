import React from "react";
import ScrollToTop from "../../components/ScrollToTop";
import MainSlider from "./MainSlider/MainSlider";
import PetForYou from "./PetForYou/PetForYou";
import "./Main.scss";

const Main = () => {
  return (
    <div className="Main">
      <ScrollToTop />
      <MainSlider />
      <PetForYou />
    </div>
  );
};

export default Main;

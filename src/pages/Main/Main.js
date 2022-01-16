import React from "react";
import MainSlider from "./MainSlider/MainSlider";
import PetForYou from "./PetForYou/PetForYou";
import "./Main.scss";

const Main = () => {
  return (
    <div className="Main">
      <MainSlider />
      <PetForYou />
    </div>
  );
};

export default Main;

import React from "react";
import "./BtnSlider.scss";

export default function BtnSlider({ moveSlide, direction }) {
  return (
    <button
      className={direction === "next" ? "BtnSlider next" : "BtnSlider prev"}
      onClick={moveSlide}
    >
      <img
        src={
          direction === "next"
            ? "icons/main/right_arrow.svg"
            : "icons/main/left_arrow.svg"
        }
      />
    </button>
  );
}
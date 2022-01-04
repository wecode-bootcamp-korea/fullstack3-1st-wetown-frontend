import React, { useState } from "react";
import sliderData from "./sliderData";

export default function practiceSlider() {
  // const [sliderData, setSliderData] = useState([]);
  return (
    <div className="practiceSlider">
      {sliderData.map(e => (
        <div style={{ transform: `translateX${-100}px` }}>
          <img src={e.img} />
        </div>
      ))}
    </div>
  );
}

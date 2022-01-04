import React, { useEffect, useState } from "react";
import "./Slider.scss";
import sliderData from "./sliderData";

export default function Slider() {
  const [imgList, setImgList] = useState([]);
  const [x, setX] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);
  const [moving, setMoving] = useState(false);

  useEffect(() => {
    fetch("/data/imgData.json")
      .then(res => res.json())
      .then(json => {
        const newJson = [...json, ...json];
        setImgList(newJson);
        setX(-Math.floor(newJson.length / 2) * 700);
      });
  }, []);
  const prevClick = () => {
    setX(x + 700);
  };
  const nextClick = () => {
    if (slideIndex !== sliderData.length) {
      setX(x - 700);
    } else {
      setX(x + sliderData.length * 700);
    }
  };

  return (
    <div className="Slider">
      <ul>
        {imgList.map((obj, index) => {
          return (
            <li
              key={obj.id}
              className="sliderList"
              style={{ transform: `translateX(${x}px)` }}
            >
              <img src={obj.img} alt={obj.title} className="image" />
            </li>
          );
        })}
      </ul>
      <button className="prev" type="button" onClick={prevClick}>
        <img src="icons/main/left_arrow.svg" alt="prevButton" />
      </button>
      <button className="next" type="button" onClick={nextClick}>
        <img src="icons/main/right_arrow.svg" alt="nextButton" />
      </button>
    </div>
  );
}

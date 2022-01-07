import React, { useState, useEffect } from "react";
import BtnSlider from "./BtnSlider";
import sliderData from "./sliderData";
import "./MainSlider.scss";
import { useNavigate } from "react-router-dom";

export default function MainSlider() {
  const [slideIndex, setSlideIndex] = useState(1);
  const navigate = useNavigate();
  // 앞으로
  const nextSlide = () => {
    if (slideIndex !== sliderData.length) {
      setSlideIndex(slideIndex + 1);
    } else {
      setSlideIndex(1);
    }
  };
  // 이전으로
  const prevSlide = () => {
    if (slideIndex === 1) {
      setSlideIndex(sliderData.length);
    } else {
      setSlideIndex(slideIndex - 1);
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      if (slideIndex !== sliderData.length) {
        setSlideIndex(slideIndex + 1);
      } else {
        setSlideIndex(1);
      }
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  });

  const changePage = index => {
    switch (index) {
      case 1:
        navigate("/category/dog");
        break;
      case 2:
        navigate("/category/cat");
        break;
      case 3:
        navigate("/category/turtle");
        break;
      case 4:
        navigate("/category/hamster");
        break;
      case 5:
        navigate("/category/bird");
        break;
    }
  };
  const changePageColor = index => {
    switch (index) {
      case 1:
        return "#fccf1d";
      case 2:
        return "#c81a20";
      case 3:
        return "#016ad5";
      case 4:
        return "#cda5e0";
      case 5:
        return "#d8e22d";
    }
  };
  return (
    <div
      style={{
        backgroundColor: changePageColor(slideIndex),
        transition: "0.3s",
      }}
    >
      <div className="MainSlider">
        <ul>
          {sliderData.map((obj, index) => {
            return (
              <li
                key={obj.id}
                className={slideIndex === index + 1 ? "slide-active" : "slide"}
                onClick={() => changePage(slideIndex)}
              >
                <img src={obj.img} className="image" />
              </li>
            );
          })}
        </ul>
        <BtnSlider moveSlide={nextSlide} direction={"next"} />
        <BtnSlider moveSlide={prevSlide} direction={"prev"} />
      </div>
    </div>
  );
}

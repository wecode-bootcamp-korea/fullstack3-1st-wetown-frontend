import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
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

  const changePage = category => {
    switch (category) {
      case "dog":
        navigate("/category/dog");
        break;
      case "cat":
        navigate("/category/cat");
        break;
      case "turtle":
        navigate("/category/turtle");
        break;
      case "hamster":
        navigate("/category/hamster");
        break;
      case "bird":
        navigate("/category/bird");
        break;
      default:
    }
  };

  const changePageColor = index => {
    switch (index) {
      case 1:
        return "#fccf1d";
      case 2:
        return "#c81a20";
      case 3:
        return "#d8e22d";
      case 4:
        return "#fccf1d";
      case 5:
        return "#cda5e0";
      case 6:
        return "#fccf1d";
      case 7:
        return "#016ad5";
      default:
    }
  };

  const moveDot = index => {
    setSlideIndex(index);
  };

  return (
    <div
      className="MainSliderWrapper"
      style={{
        backgroundColor: changePageColor(slideIndex),
        transition: "0.4s ease-in-out",
      }}
    >
      <div className="MainSlider">
        <ul>
          {sliderData.map((obj, index) => {
            return (
              <li
                className={`${obj.category}
                  ${slideIndex === index + 1 ? "slide-active" : "slide"}
                `}
                onClick={() => {
                  changePage(obj.category);
                }}
                key={obj.id}
              >
                <img
                  src={obj.img}
                  className={`image ${obj.category}`}
                  key={obj.id}
                  alt="슬라이더 이미지"
                />
                <div className="mainSliderDetail">{obj.desc}</div>
              </li>
            );
          })}
        </ul>
        <FaChevronLeft
          color="white"
          size={50}
          className="BtnSlider prev"
          onClick={nextSlide}
        />
        <FaChevronRight
          color="white"
          size={50}
          className="BtnSlider next"
          onClick={prevSlide}
        />

        <div className="slider-dots">
          {Array.from({ length: 7 }).map((item, index) => (
            <div
              onClick={() => moveDot(index + 1)}
              className={slideIndex === index + 1 ? "dot active" : "dot"}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

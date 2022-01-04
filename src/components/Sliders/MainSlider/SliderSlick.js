import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderSlick.scss";

export default class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    };
    return (
      <Slider {...settings}>
        <div>
          <img
            src="images/mainSlider/puppy_smile.jpg"
            width={700}
            height={500}
          />
        </div>
        <div>
          <img src="images/mainSlider/cat.jpg" width={700} height={500} />
        </div>
        <div>
          <img src="images/mainSlider/turtle.jpg" width={700} height={500} />
        </div>
        <div>
          <img src="images/mainSlider/hamster.jpg" width={700} height={500} />
        </div>
        <div>
          <img src="images/mainSlider/bird.jpg" width={700} height={500} />
        </div>
      </Slider>
    );
  }
}

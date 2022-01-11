import { React, useEffect, useState } from "react";

function ListSlider() {
  const [x, setX] = useState(0);
  const [imgUrl, setImgUrl] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/data/listSliderImg.json")
      .then(res => res.json())
      .then(data => setImgUrl(data));
  }, []);

  const leftClick = () => {
    setX(prevX => prevX + 100);
  };
  const rightClick = () => {
    setX(prevX => prevX - 100);
  };

  return (
    <section className="carousel-wrapper">
      <section className="arrowSection">
        <img
          className="leftArrow"
          src="http://localhost:3000/images/listSliderImg/chevron-left-solid.svg"
          alt="left-arrow"
          onClick={leftClick}
        />
        <img
          className="rightArrow"
          src="http://localhost:3000/images/listSliderImg/chevron-right-solid.svg"
          alt="right-arrow"
          onClick={rightClick}
        />
      </section>
      <section className="carousel">
        {imgUrl.map(imgUrl => (
          <section
            key={imgUrl.discription}
            className="listSlider"
            style={{ transform: `translateX(${x}%)` }}
          >
            <img
              className="carouselImg"
              key={imgUrl.id}
              src={imgUrl.url}
              alt={imgUrl.description}
            />
          </section>
        ))}
      </section>
    </section>
  );
}

export default ListSlider;

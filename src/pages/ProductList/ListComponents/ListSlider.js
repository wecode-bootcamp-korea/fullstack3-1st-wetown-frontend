import { React, useEffect, useState } from "react";

function ListSlider() {
  const [x, setX] = useState(0);
  const [imgUrl, setImgUrl] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/data/listSliderImg.json")
      .then(res => res.json())
      .then(data => setImgUrl(data));
  }, []);

  const leftClick = () => {};
  const rightClick = () => {
    setX(prevX => prevX - 710);
  };

  return (
    <section className="carousel-wrapper">
      <section className="leftSec">
        <img
          className="leftArrow"
          src="../images/listSliderImg/chevron-left-solid.svg"
          alt="left-arrow"
          onClick={leftClick}
        />
      </section>
      <section className="carousel">
        {imgUrl.map(imgUrl => (
          <section
            className="listSlider"
            style={{ transform: `translateX(${x}px)` }}
          >
            <img
              className="carouselImg"
              key={imgUrl.id}
              src={imgUrl.url}
              alt={imgUrl.id}
            />
          </section>
        ))}
      </section>
      <section className="rightSec">
        <img
          className="rightArrow"
          src="../images/listSliderImg/chevron-right-solid.svg"
          alt="right-arrow"
          onClick={rightClick}
        />
      </section>
    </section>
  );
}

export default ListSlider;

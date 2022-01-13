import { React, useEffect, useState } from "react";

function ListSlider() {
  const [imgList, setImgList] = useState([]);
  const [originalSize, setOriginalSize] = useState(0);
  const [imgIndex, setImgIndex] = useState(0);
  const [x, setX] = useState(0);

  useEffect(() => {
    fetch("/data/listSliderImg.json")
      .then(res => res.json())
      .then(data => {
        setImgList(data);
        setOriginalSize(data.length);
      });
  }, []);

  useEffect(() => {
    const lastIndex = imgList.length - 1;
    if (imgIndex === lastIndex) {
      setImgList(prevList => [
        ...prevList,
        imgList[imgIndex - (originalSize - 1)],
      ]);
    }
  }, [imgIndex]);

  const leftClick = () => {
    setX(prevX => prevX + 100);
    setImgIndex(prevIndex => prevIndex - 1);
  };
  const rightClick = () => {
    setX(prevX => prevX - 100);
    setImgIndex(prevIndex => prevIndex + 1);
  };

  return (
    <section className="carousel-wrapper">
      <section className="arrowSection">
        <img
          className="leftArrow"
          src="/images/listSliderImg/chevron-left-solid.svg"
          alt="left-arrow"
          onClick={leftClick}
        />
        <img
          className="rightArrow"
          src="/images/listSliderImg/chevron-right-solid.svg"
          alt="right-arrow"
          onClick={rightClick}
        />
      </section>
      <section className="carousel">
        {imgList?.map((imgList, index) => (
          <section
            className="listSlider"
            style={{ transform: `translateX(${x}%)` }}
            key={index}
          >
            <img
              className="carouselImg"
              alt={imgList.description}
              src={imgList.url}
            />
          </section>
        ))}
      </section>
    </section>
  );
}

export default ListSlider;

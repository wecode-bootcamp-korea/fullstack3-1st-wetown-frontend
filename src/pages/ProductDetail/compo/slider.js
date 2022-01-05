import React, { useState, useEffect } from "react";

const Slider = ({ imgList, setImgList, originalSize, originalImg }) => {
  const [x, setX] = useState(0);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index === imgList.length - 1) {
      setImgList(prevList => [
        ...prevList,
        imgList[index - (originalSize - 1)],
      ]);

      return;
    }
    if (index === 0) {
      setImgList(prevList => [imgList[3], ...prevList]);
      setIndex(1);
    }
  }, [index]);

  const goLeft = () => {
    setX(x => x + 100);
    setIndex(prevIndex => prevIndex - 1);
  };
  const goRight = () => {
    setX(x => x - 100);
    setIndex(prevIndex => prevIndex + 1);
  };

  const DotSlide = ({ num }) => {
    return (
      <span className={(index - 1) % originalSize === num ? "on" : undefined}>
        ㅇ
      </span>
    );
  };

  return (
    <div className="slideBackground">
      <div className="slideBox">
        {imgList.map((e, i) => {
          return (
            <div
              className="slideList"
              key={i}
              style={{ transform: `translateX(${x}%)` }}
            >
              <img src={e} alt="slideImg" />
            </div>
          );
        })}
      </div>
      <div className="dot">
        {originalImg.map((e, i) => {
          return <DotSlide key={i} num={i} />;
        })}
      </div>
      <button id="goLeft" onClick={goLeft} />
      <button id="goRight" onClick={goRight} />
    </div>
  );
};

export { Slider };

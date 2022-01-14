import React, { useState } from "react";

const Slider = ({ x, setX, imgList, setImgList, originalImg }) => {
  const [moving, setMoving] = useState(false);
  const [count, setCount] = useState(0);

  const goLeft = () => {
    if (moving) return;
    setCount(count + originalImg.length - 1);
    setX(prevX => prevX + 600);
    setMoving(true);
    setTimeout(() => {
      const lastImg = imgList.pop();
      setImgList([lastImg, ...imgList]);
      setX(prevX => prevX - 600);
      setMoving(false);
    }, 500);
  };

  const goRight = () => {
    if (moving) return;
    setCount(count + 1);
    setX(prevX => prevX - 600);
    setMoving(true);
    setTimeout(() => {
      const lastImg = imgList.shift();
      setImgList([...imgList, lastImg]);
      setX(prevX => prevX + 600);
      setMoving(false);
    }, 500);
  };

  const DotSlide = ({ num }) => {
    return (
      <span className="dotList">
        {count % originalImg.length === num ? (
          <button className="on" />
        ) : (
          <button className="off" />
        )}
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
              key={`${e.id}${i}`}
              style={{ transform: `translateX(${x}px)` }}
            >
              <img src={e.image} alt="slideImg" />
            </div>
          );
        })}
      </div>
      <div className="dotBox">
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

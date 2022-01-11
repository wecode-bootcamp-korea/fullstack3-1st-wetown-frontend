// import React, { useState, useEffect } from "react";

// const Slider = ({ imgList, setImgList, originalSize, originalImg }) => {
//   useEffect(() => {}, [imgList]);

//   const goLeft = () => {
//     if (moving) return;
//     setX(prevX => prevX + 600);
//     setMoving(true);
//     setTimeout(() => {
//       const lastImg = imgList.pop();
//       setImgList(lastImg, ...imgList);
//       // setX((<변경>) => <변경>);
//       setMoving(false);
//     }, 500);
//   };

//   const goRight = () => {};

//   // const DotSlide = ({ num }) => {
//   //   return (
//   //     <span className={(index - 1) % originalSize === num ? "on" : undefined}>
//   //       ▫️
//   //     </span>
//   //   );
//   // };

//   return (
//     <div className="slideBackground">
//       <div className="slideBox">
//         {imgList.map((e, i) => {
//           return (
//             <div
//               className="slideList"
//               key={i}
//               style={{ transform: `translateX(${x}px)` }}
//             >
//               <img src={e} alt="slideImg" />
//             </div>
//           );
//         })}
//       </div>
//       {/* <div className="dot">
//         {originalImg.map((e, i) => {
//           return <DotSlide key={i} num={i} />;
//         })}
//       </div> */}
//       <button id="goLeft" onClick={goLeft} />
//       <button id="goRight" onClick={goRight} />
//     </div>
//   );
// };

// export { Slider };

// // // react
// // import react, { useEffect, useState } from "react";
// // import css from "./Carousel.css";

// // function Carousel() {
// //   const [imgList, setImgList] = useState([]);
// //   const [x, setX] = useState(0);
// //   const [moving, setMoving] = useState(false);

// //   useEffect(() => {
// //     fetch("/data/picture.json")
// //       .then((res) => res.json())
// //       .then((json) => {
// //         const newJson = [...json, ...json];
// //         setImgList(newJson);
// //         setX(-(parseInt(newJson.length / 2, 10) * 500));
// //       });
// //   }, []);

// //   const leftButtonClick = () => {
// //     if (moving) return; // 움직이는 중이라면 버튼 액션을 비활성화합니다.
// //     setX((<변경>) => <변경>);
// //     setMoving(true);
// //     setTimeout(() => {
// //       const lastImg = imgList.pop();
// //       setImgList(<변경>);
// //       setX((<변경>) => <변경>);
// //       setMoving(false);
// //     }, 500);
// //   };

// //   const rightButtonClick = () => {
// //     if (moving) return; // 움직이는 중이라면 버튼 액션을 비활성화합니다.
// //     setX((<변경>) => <변경>);
// //     setMoving(true);
// //     setTimeout(() => {
// //       const firstImg = imgList.shift();
// //       setImgList(<변경>);
// //       setX((<변경>) => <변경>);
// //       setMoving(false);
// //     }, 500);
// //   };

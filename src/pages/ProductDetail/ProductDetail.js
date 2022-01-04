import React, { useState, useEffect } from "react";
import { Slider } from "./compo/slider";

import "./ProductDetail.scss";

const ProductDetail = () => {
  useEffect(() => {
    fetch(`http://localhost:8000/product/9`, {
      methrod: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(res => res.json())
      .then(res => {
        setOriginalSize(res.length);
        setData(res[0]);
        setImgList(
          res.map(e => {
            return e.url;
          })
        );
        setOriginalImg(
          res.map(e => {
            return e.url;
          })
        );
      });
  }, []);

  const [data, setData] = useState([]);
  const [imgList, setImgList] = useState([]);
  const [originalImg, setOriginalImg] = useState([]);
  const [originalSize, setOriginalSize] = useState(0);

  return (
    <div className="ProductDetail">
      <div className="detailArea">
        <div className="mainArea">
          {data && data.is_new ? <NewTag /> : null}
          <Slider
            imgList={imgList}
            setImgList={setImgList}
            originalImg={originalImg}
            originalSize={originalSize}
          />
        </div>
        <div className="sidebarArea" />
      </div>
    </div>
  );
};

const NewTag = () => {
  return (
    <div className="newBox">
      <img src="/images/new.png" alt="newtag" />
    </div>
  );
};

export default ProductDetail;

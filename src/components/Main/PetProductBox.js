import React, { useState, useEffect } from "react";
import "./PetProductBox.scss";
import { Link } from "react-router-dom";

export default function PetProductBox() {
  const [numb, setNumb] = useState(0);
  const [color, setColor] = useState("#fccf1d");
  const [categoryArr, setCategoryArr] = useState([]);
  const [pics, setPics] = useState([]);
  const linkAddress = "/category/";
  const changeColor = () => {
    if (numb === 0) {
      setColor("#fccf1d");
      return categoryArr[numb];
    } else if (numb === 1) {
      setColor("#c81a20");
      return categoryArr[numb];
    } else if (numb === 2) {
      setColor("#016ad5");
      return categoryArr[numb];
    } else if (numb === 3) {
      setColor("#cda5e0");
      return categoryArr[numb];
    } else if (numb === 4) {
      setColor("#d8e22d");
      return categoryArr[numb];
    }
  };

  useEffect(() => {
    changeColor();
  });

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}/main/pictures`)
      .then(res => res.json())
      .then(data => setPics(data));

    fetch(`${process.env.REACT_APP_BASE_URL}/category`)
      .then(res => res.json())
      .then(data => setCategoryArr(data));
  }, []);

  return (
    <div className="PetProductBox">
      <div className="petProductBox">
        <h2>Pet for U</h2>
        <section className="productBoxTab">
          <ul className="productBoxTabList">
            {categoryArr &&
              categoryArr.map((category, index) => {
                return (
                  <li onMouseEnter={() => setNumb(index)} key={category.id}>
                    <Link to={linkAddress + category.name}>
                      {category.name.toUpperCase()}
                    </Link>
                  </li>
                );
              })}
          </ul>
        </section>
        <section className="productBox">
          {categoryArr &&
            categoryArr.map((category, index) => {
              return (
                <ul
                  className="productBoxList"
                  style={{
                    display: numb === index ? "flex" : "none",
                  }}
                  key={category.id}
                >
                  <li>
                    <div
                      className="circleBox"
                      style={{ backgroundColor: color }}
                    >
                      <div className="circleBackground">
                        <Link
                          to={linkAddress + category.name}
                          className="circleText"
                        >
                          {category.name.toUpperCase()}
                        </Link>
                      </div>
                    </div>
                  </li>
                  {pics &&
                    pics
                      .slice(0 + 9 * index, 9 + 9 * index)
                      .map((item, indexInner) => {
                        return (
                          <li className="productPic" key={item.id}>
                            <div className="productPic-wrapper">
                              <Link
                                to={
                                  linkAddress +
                                  item.name +
                                  `/product/${index}${indexInner + 1}`
                                }
                              >
                                <img src={item.url} alt={item.eng_name} />
                              </Link>
                            </div>
                          </li>
                        );
                      })}
                </ul>
              );
            })}
        </section>
      </div>
    </div>
  );
}

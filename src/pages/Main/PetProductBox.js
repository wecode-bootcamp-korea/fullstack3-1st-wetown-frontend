import React, { useState, useEffect } from "react";
import "./PetProductBox.scss";
import { Link } from "react-router-dom";

export default function PetProductBox() {
  const [index, setIndex] = useState(1);
  const [color, setColor] = useState("#fccf1d");
  const changeColor = () => {
    if (index === 1) {
      setColor("#fccf1d");
    } else if (index === 2) {
      setColor("#c81a20");
    } else if (index === 3) {
      setColor("#016ad5");
    } else if (index === 4) {
      setColor("#cda5e0");
    } else if (index === 5) {
      setColor("#d8e22d");
    }
  };
  useEffect(() => {
    changeColor();
  });

  const [imgData, setImgData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:8000/category/dog/`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(res => res.json())
      .then(data => setImgData(data));
  }, []);

  return (
    <div className="PetProductBox">
      <div className="petProductBox">
        <h2>Pet for U</h2>
        <section className="productBoxTab">
          <ul className="productBoxTabList">
            <li onMouseEnter={() => setIndex(1)}>
              <Link to="#">DOG</Link>
            </li>
            <li onMouseEnter={() => setIndex(2)}>
              <Link to="#">CAT</Link>
            </li>
            <li onMouseEnter={() => setIndex(3)}>
              <Link to="#">TURTLE</Link>
            </li>
            <li onMouseEnter={() => setIndex(4)}>
              <Link to="#">HAMSTER</Link>
            </li>
            <li onMouseEnter={() => setIndex(5)}>
              <Link to="#">BIRD</Link>
            </li>
          </ul>
        </section>
        <section className="productBox">
          <ul
            className="productBoxList"
            style={{ display: index === 1 ? "flex" : "none" }}
          >
            <li>
              <div className="circleBox" style={{ backgroundColor: color }}>
                <div className="circleBackground">
                  <Link to="#" className="circleText">
                    DOG
                  </Link>
                </div>
              </div>
            </li>
            <li className="productPic">
              <img src="images/mainSlider/puppy_smile.jpg" alt="puppy_smile" />
            </li>
            <li className="productPic">
              <img src="images/mainSlider/cat.jpg" alt="cat" />
            </li>
            <li className="productPic">
              <img src="images/mainSlider/turtle.jpg" alt="turtle" />
            </li>
            <li className="productPic">
              <img src="images/puppy.jpg" alt="puppy" />
            </li>
          </ul>
          <ul
            className="productBoxList"
            style={{ display: index === 2 ? "flex" : "none" }}
          >
            <li>
              <div className="circleBox" style={{ backgroundColor: color }}>
                <div className="circleBackground">
                  <Link to="#" className="circleText">
                    CAT
                  </Link>
                </div>
              </div>
            </li>
            <li className="productPic">
              <img src="images/puppy.jpg" alt="puppy_smile" />
            </li>
            <li className="productPic">
              <img src="images/mainSlider/cat.jpg" alt="cat" />
            </li>
            <li className="productPic">
              <img src="images/mainSlider/hamster.jpg" alt="hamster" />
            </li>
            <li className="productPic">
              <img src="images/puppy.jpg" alt="puppy" />
            </li>
          </ul>
          <ul
            className="productBoxList"
            style={{ display: index === 3 ? "flex" : "none" }}
          >
            <li>
              <div className="circleBox" style={{ backgroundColor: color }}>
                <div className="circleBackground">
                  <Link to="#" className="circleText">
                    TURTLE
                  </Link>
                </div>
              </div>
            </li>
            <li className="productPic">
              <img src="images/puppy.jpg" alt="puppy" />
            </li>
            <li className="productPic">
              <img src="images/mainSlider/cat.jpg" alt="cat" />
            </li>
            <li className="productPic">
              <img src="images/mainSlider/turtle.jpg" alt="turtle" />
            </li>
            <li className="productPic">
              <img src="images/mainSlider/puppy_smile.jpg" alt="puppy_smile" />
            </li>
          </ul>
          <ul
            className="productBoxList"
            style={{ display: index === 4 ? "flex" : "none" }}
          >
            <li>
              <div className="circleBox" style={{ backgroundColor: color }}>
                <div className="circleBackground">
                  <Link to="#" className="circleText">
                    HAMSTER
                  </Link>
                </div>
              </div>
            </li>
            <li className="productPic">
              <img src="images/puppy.jpg" alt="puppy" />
            </li>
            <li className="productPic">
              <img src="images/mainSlider/cat.jpg" alt="cat" />
            </li>
            <li className="productPic">
              <img src="images/mainSlider/hamster.jpg" alt="hamster" />
            </li>
            <li className="productPic">
              <img src="images/mainSlider/puppy_smile.jpg" alt="puppy_smile" />
            </li>
          </ul>
          <ul
            className="productBoxList"
            style={{ display: index === 5 ? "flex" : "none" }}
          >
            <li>
              <div className="circleBox" style={{ backgroundColor: color }}>
                <div className="circleBackground">
                  <Link to="#" className="circleText">
                    BIRD
                  </Link>
                </div>
              </div>
            </li>
            <li className="productPic">
              <img src="images/puppy.jpg" alt="puppy" />
            </li>
            <li className="productPic">
              <img src="images/mainSlider/bird.jpg" alt="bird" />
            </li>
            <li className="productPic">
              <img src="images/mainSlider/hamster.jpg" alt="hamster" />
            </li>
            <li className="productPic">
              <img src="images/mainSlider/puppy_smile.jpg" alt="puppy_smile" />
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

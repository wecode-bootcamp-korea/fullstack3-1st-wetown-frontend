import React, { useState } from "react";
import "./PetProductBox.scss";

export default function PetProductBox() {
  const [index, setIndex] = useState(1);
  return (
    <div className="PetProductBox">
      <div className="petProductBox">
        <h2>Pet for U</h2>
        <section className="productBoxTab">
          <ul className="productBoxTabList">
            <li onMouseEnter={() => setIndex(1)}>
              <a href="#">DOG</a>
            </li>
            <li onMouseEnter={() => setIndex(2)}>
              <a href="#">CAT</a>
            </li>
            <li onMouseEnter={() => setIndex(3)}>
              <a href="#">TURTLE</a>
            </li>
            <li onMouseEnter={() => setIndex(2)}>
              <a href="#">HAMSTER</a>
            </li>
            <li onMouseEnter={() => setIndex(1)}>
              <a href="#">BIRD</a>
            </li>
          </ul>
        </section>
        <section className="productBox">
          <ul
            className="productBoxList"
            style={{ display: index === 1 ? "flex" : "none" }}
          >
            <li>
              <div className="circleBox">
                <div className="circleBackground">
                  <a href="#" className="circleText">
                    DOG
                  </a>
                </div>
              </div>
            </li>
            <li className="productPic">
              <img src="images/mainSlider/puppy_smile.jpg" />
            </li>
            <li className="productPic">
              <img src="images/mainSlider/cat.jpg" />
            </li>
            <li className="productPic">
              <img src="images/mainSlider/turtle.jpg" />
            </li>
            <li className="productPic">
              <img src="images/puppy.jpg" />
            </li>
          </ul>
          <ul
            className="productBoxList"
            style={{ display: index === 2 ? "flex" : "none" }}
          >
            <li>
              <div className="circleBox">
                <div className="circleBackground">
                  <a href="#" className="circleText">
                    CAT
                  </a>
                </div>
              </div>
            </li>
            <li className="productPic">
              <img src="images/puppy.jpg" />
            </li>
            <li className="productPic">
              <img src="images/mainSlider/cat.jpg" />
            </li>
            <li className="productPic">
              <img src="images/mainSlider/hamster.jpg" />
            </li>
            <li className="productPic">
              <img src="images/puppy.jpg" />
            </li>
          </ul>
          <ul
            className="productBoxList"
            style={{ display: index === 3 ? "flex" : "none" }}
          >
            <li>
              <div className="circleBox">
                <div className="circleBackground">
                  <a href="#" className="circleText">
                    TURTLE
                  </a>
                </div>
              </div>
            </li>
            <li className="productPic">
              <img src="images/puppy.jpg" />
            </li>
            <li className="productPic">
              <img src="images/mainSlider/cat.jpg" />
            </li>
            <li className="productPic">
              <img src="images/mainSlider/hamster.jpg" />
            </li>
            <li className="productPic">
              <img src="images/puppy.jpg" />
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

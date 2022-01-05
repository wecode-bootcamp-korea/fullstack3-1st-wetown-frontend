import React from "react";
import "./PetProductBox.scss";

export default function PetProductBox() {
  return (
    <div className="PetProductBox">
      <div className="petProductBox">
        <h2>Pet for U</h2>
        <section className="productBoxTab">
          <ul className="productBoxTabList">
            <li>
              <a href="#">DOG</a>
            </li>
            <li>
              <a href="#">CAT</a>
            </li>
            <li>
              <a href="#">TURTLE</a>
            </li>
            <li>
              <a href="#">HAMSTER</a>
            </li>
            <li>
              <a href="#">BIRD</a>
            </li>
          </ul>
        </section>
        <section className="productBox">
          <ul className="productBoxList">
            <li>
              <div className="circleBox">
                <div className="circleBackground">
                  <a href="#">DOG</a>
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
              <img src="images/mainSlider/hamster.jpg" />
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

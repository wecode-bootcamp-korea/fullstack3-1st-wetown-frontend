import React, { useState, useEffect } from "react";
import "./PetProductBox.scss";
import { Link, useNavigate } from "react-router-dom";

export default function PetProductBox() {
  const [index, setIndex] = useState(1);
  const [color, setColor] = useState("#fccf1d");
  const navigate = useNavigate();
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

  return (
    <div className="PetProductBox">
      <div className="petProductBox">
        <h2>Pet for U</h2>
        <section className="productBoxTab">
          <ul className="productBoxTabList">
            <li onMouseEnter={() => setIndex(1)}>
              <Link to="/category/dog">DOG</Link>
            </li>
            <li onMouseEnter={() => setIndex(2)}>
              <Link to="/category/cat">CAT</Link>
            </li>
            <li onMouseEnter={() => setIndex(3)}>
              <Link to="/category/turtle">TURTLE</Link>
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
                  <Link to="/category/dog" className="circleText">
                    DOG
                  </Link>
                </div>
              </div>
            </li>
            <li className="productPic">
              <Link to="/category/dog/product/1">
                <img
                  src="https://ae01.alicdn.com/kf/H4cda1c2d4acf4fc2b449f6d6298ad4b1g/-.jpg_640x640.jpg"
                  alt="sturdy house"
                />
              </Link>
            </li>
            <li className="productPic">
              <Link to="/category/dog/product/2">
                <img
                  src="https://ae01.alicdn.com/kf/Hf8dfc2a187bb4e27b1f4290c2f8a41137/-.jpg_Q90.jpg_.webp"
                  alt="cozy cushion house"
                />
              </Link>
            </li>
            <li className="productPic">
              <Link to="/category/dog/product/3">
                <img
                  src="https://ae01.alicdn.com/kf/Ha4b44ef2c6364b609b8498531d221c86O/-.jpg_Q90.jpg_.webp"
                  alt="foldable cushion house"
                />
              </Link>
            </li>
            <li className="productPic">
              <Link to="/category/dog/product/4">
                <img
                  src="https://sc04.alicdn.com/kf/H9008081e97ca40f2a157519c0068c8b1S.jpg"
                  alt="High nutrition dog food made in China"
                />
              </Link>
            </li>
          </ul>
          <ul
            className="productBoxList"
            style={{ display: index === 2 ? "flex" : "none" }}
          >
            <li>
              <div className="circleBox" style={{ backgroundColor: color }}>
                <div className="circleBackground">
                  <Link to="/category/cat" className="circleText">
                    CAT
                  </Link>
                </div>
              </div>
            </li>
            <li className="productPic">
              <Link to="/category/cat/product/11">
                <img
                  src="https://s.alicdn.com/@sc04/kf/H1c98d533d1ba4ee68c01aea21612e733O.jpg_300x300.jpg"
                  alt="Cat Puree Salmon and Beef"
                />
              </Link>
            </li>
            <li className="productPic">
              <Link to="/category/cat/product/12">
                <img
                  src="https://s.alicdn.com/@sc04/kf/H54f896657e3a4b0282f00fdf94efe113n.jpg_300x300.jpg"
                  alt="cat snack tuna fish"
                />
              </Link>
            </li>
            <li className="productPic">
              <Link to="/category/cat/product/13">
                <img
                  src="https://s.alicdn.com/@sc04/kf/Hf41f992581ce4243bc36bb0e7f80c75fb.jpg_300x300.jpg"
                  alt="Cat Soup Can"
                />
              </Link>
            </li>
            <li className="productPic">
              <Link to="/category/cat/product/14">
                <img
                  src="https://s.alicdn.com/@sc04/kf/H04e612ed9e8f4b5dbf123d8c5b971368l.jpg_300x300.jpg"
                  alt="Elastic Cat Sticks Feather Plush Ball"
                />
              </Link>
            </li>
          </ul>
          <ul
            className="productBoxList"
            style={{ display: index === 3 ? "flex" : "none" }}
          >
            <li>
              <div className="circleBox" style={{ backgroundColor: color }}>
                <div className="circleBackground">
                  <Link to="/category/turtle" className="circleText">
                    TURTLE
                  </Link>
                </div>
              </div>
            </li>
            <li className="productPic">
              <Link to="/category/turtle/product/21">
                <img
                  src="https://sc04.alicdn.com/kf/Hf61c32af6ba14cfea601963de994473dS.jpg"
                  alt="EDJ T5 Light"
                />
              </Link>
            </li>
            <li className="productPic">
              <Link to="/category/turtle/product/22">
                <img
                  src="https://sc04.alicdn.com/kf/H145d485c87944bdcb1a6eb9a099e7b179.jpg"
                  alt="Tank Filter"
                />
              </Link>
            </li>
            <li className="productPic">
              <Link to="/category/turtle/product/23">
                <img
                  src="https://sc04.alicdn.com/kf/Hd9d113025ceb4037adcb2262a82f0683D.jpg"
                  alt="Reptile Terrarium"
                />
              </Link>
            </li>
            <li className="productPic">
              <Link to="/category/turtle/product/24">
                <img
                  src="https://sc04.alicdn.com/kf/H603a3a44d83e4e7a947214e79bdac378z.jpg"
                  alt="Heating Mat"
                />
              </Link>
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
          {/* practice */}
          {/* {imgData &&
            imgData.map((el, i) => {
              return (
                <ul
                  className="productBoxList"
                  style={{ display: index === i ? "flex" : "none" }}
                  key={i}
                >
                  <li>
                    <div
                      className="circleBox"
                      style={{ backgroundColor: color }}
                    >
                      <div className="circleBackground">
                        <div
                          className="circleText"
                          onClick={navigate(`/category/${el.categories.name}`)}
                        >
                          {el.category_id}
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="productPic">
                    <img src={el.url} alt={el.categories.name} />
                  </li>
                  <li className="productPic">
                    <img src={el.url} alt={el.categories.name} />
                  </li>
                  <li className="productPic">
                    <img src={el.url} alt={el.categories.name} />
                  </li>
                  <li className="productPic">
                    <img src={el.url} alt={el.categories.name} />
                  </li>
                </ul>
              );
            })} */}
          {/* practice */}
        </section>
      </div>
    </div>
  );
}

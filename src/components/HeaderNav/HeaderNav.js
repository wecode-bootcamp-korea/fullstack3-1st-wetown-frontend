import React, { useState } from "react";
import "./HeaderNav.scss";

export default function HeaderNav() {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);
  const colorChange = hovered !== false ? "#fbeff1" : "transparent";

  return (
    <header className="HeaderNav">
      <div className="topBox" style={{ backgroundColor: `${colorChange}` }}>
        <div className="topBoxInner">
          <section>
            <nav className="headerTop">
              <ul>
                <li>Login</li>
                <li>Join</li>
                <li className="globalStore">
                  <a href="/">KOR</a>
                  <ul className="globalStoreList">
                    <li>
                      <a href="/">KOR</a>
                    </li>
                    <li>
                      <a href="/en">ENG</a>
                    </li>
                    <li>
                      <a href="/jp">JPN</a>
                    </li>
                    <li>
                      <a href="/cn">CHN</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </section>
          <section>
            <nav className="headerBottom">
              <div className="headerBottomInner">
                <div
                  className="headerMenu"
                  onMouseEnter={toggleHover}
                  onMouseLeave={toggleHover}
                >
                  <ul>
                    <li className="petMenu">
                      <a href="/list" className="petTitle">
                        PET
                        <span className="circle"></span>
                      </a>
                      <ul className="petsList">
                        <li>
                          <a href="/dog">
                            DOG
                            <span
                              className="smallCircle"
                              // style={{backgroundColor:`${circleColor}`}}
                            ></span>
                          </a>
                        </li>
                        <li>
                          <a href="/cat">
                            CAT
                            <span className="smallCircle"></span>
                          </a>
                        </li>
                        <li>
                          <a href="/turtle">
                            TURTLE
                            <span className="smallCircle"></span>
                          </a>
                        </li>
                        <li>
                          <a href="/hamster">
                            HAMSTER
                            <span className="smallCircle"></span>
                          </a>
                        </li>
                        <li>
                          <a href="/bird">
                            BIRD
                            <span className="smallCircle"></span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="productMenu">
                      <a href="/list" className="productTitle">
                        PRODUCT
                        <span className="circle"></span>
                      </a>
                      <ul className="productsList">
                        <li>
                          <a href="/food">
                            FOOD
                            <span className="smallCircle"></span>
                          </a>
                        </li>
                        <li>
                          <a href="/toy">
                            TOY
                            <span className="smallCircle"></span>
                          </a>
                        </li>
                        <li>
                          <a href="/house">
                            HOUSE
                            <span className="smallCircle"></span>
                          </a>
                        </li>
                        <li>
                          <a href="/health">
                            HEALTH
                            <span className="smallCircle"></span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="/list">P!CK</a>
                    </li>
                    <li>
                      <a href="/list">EVENT</a>
                    </li>
                    <li>
                      <a href="/list">BRAND</a>
                    </li>
                  </ul>
                </div>
                <div className="headerLogo">
                  <a href="/">
                    <img src="icons/main/mainIcon.svg" />
                  </a>
                </div>
                <div className="userMenu">
                  <ul>
                    <li>
                      <img src="icons/main/person.svg" />
                    </li>
                    <li>
                      <img src="icons/main/search.svg" />
                    </li>
                    <li>
                      <img src="icons/main/shopping_cart.svg" />
                    </li>
                    <li>
                      <img src="icons/main/bookmarks.svg" />
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </section>
          <div className="pinkBackGround"></div>
        </div>
      </div>
    </header>
  );
}

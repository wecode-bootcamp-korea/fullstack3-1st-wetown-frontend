import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./HeaderNav.scss";

export default function HeaderNav() {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);
  const colorChange = hovered !== false ? "#fbeff1" : "transparent";

  const [ScrollY, setScrollY] = useState(0);
  const [fix, setFix] = useState(false);

  const scrollWatch = () => {
    setScrollY(window.pageYOffset);
    if (ScrollY > 50) {
      setFix(true);
      setHovered(false);
    } else {
      setFix(false);
    }
  };

  useEffect(() => {
    const watch = () => {
      window.addEventListener("scroll", scrollWatch);
    };
    watch();
    return () => {
      window.removeEventListener("scroll", scrollWatch);
    };
  });

  return (
    <header className="HeaderNav">
      <div className="topBox" style={{ backgroundColor: `${colorChange}` }}>
        <div className="topBoxInner">
          <section>
            <nav className="headerTop">
              <ul>
                <li>
                  <Link to="/signin">Login</Link>
                </li>
                <li>
                  <Link to="/signup">Join</Link>
                </li>
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
          <section
            className={
              fix ? "headerBottomSection fixed" : "headerBottomSection"
            }
          >
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
                        <span className="circle" />
                      </a>
                      <ul className="petsList">
                        <li>
                          <a href="/dog">
                            DOG
                            <span
                              className="smallCircle"
                              style={{ backgroundColor: "red" }}
                            />
                          </a>
                        </li>
                        <li>
                          <a href="/cat">
                            CAT
                            <span
                              className="smallCircle"
                              style={{ backgroundColor: "blue" }}
                            />
                          </a>
                        </li>
                        <li>
                          <a href="/turtle">
                            TURTLE
                            <span
                              className="smallCircle"
                              style={{ backgroundColor: "green" }}
                            />
                          </a>
                        </li>
                        <li>
                          <a href="/hamster">
                            HAMSTER
                            <span
                              className="smallCircle"
                              style={{ backgroundColor: "yellow" }}
                            />
                          </a>
                        </li>
                        <li>
                          <a href="/bird">
                            BIRD
                            <span
                              className="smallCircle"
                              style={{ backgroundColor: "purple" }}
                            />
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="productMenu">
                      <a href="/list" className="productTitle">
                        PRODUCT
                        <span className="circle" />
                      </a>
                      <ul className="productsList">
                        <li>
                          <a href="/food">
                            FOOD
                            <span className="smallCircle" />
                          </a>
                        </li>
                        <li>
                          <a href="/toy">
                            TOY
                            <span className="smallCircle" />
                          </a>
                        </li>
                        <li>
                          <a href="/house">
                            HOUSE
                            <span className="smallCircle" />
                          </a>
                        </li>
                        <li>
                          <a href="/health">
                            HEALTH
                            <span className="smallCircle" />
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
          <div className="pinkBackGround" />
        </div>
      </div>
    </header>
  );
}

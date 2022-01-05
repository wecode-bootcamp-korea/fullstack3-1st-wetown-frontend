import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./HeaderNav.scss";

export default function HeaderNav() {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);
  const colorChange = hovered !== false ? "#fbeff1" : "transparent";

  const [scrollY, setScrollY] = useState(0);
  const [fix, setFix] = useState(false);

  const scrollWatch = () => {
    setScrollY(window.pageYOffset);
    if (scrollY > 50) {
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
                  <Link to="/">KOR</Link>
                  <ul className="globalStoreList">
                    <li>
                      <Link to="/">KOR</Link>
                    </li>
                    <li>
                      <Link to="#">ENG</Link>
                    </li>
                    <li>
                      <Link to="#">JPN</Link>
                    </li>
                    <li>
                      <Link to="#">CHN</Link>
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
                      <Link to="/category" className="petTitle">
                        PET
                        <span className="circle"></span>
                      </Link>
                      <ul className="petsList">
                        <li>
                          <Link
                            to="/category/:category"
                            className="petsListLink"
                          >
                            DOG
                            <span
                              className="smallCircle"
                              style={{ backgroundColor: "#fccf1d" }}
                            ></span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/category/:category"
                            className="petsListLink"
                          >
                            CAT
                            <span
                              className="smallCircle"
                              style={{ backgroundColor: "#c81a20" }}
                            ></span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/category/:category"
                            className="petsListLink"
                          >
                            TURTLE
                            <span
                              className="smallCircle"
                              style={{ backgroundColor: "#016ad5" }}
                            ></span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/category/:category"
                            className="petsListLink"
                          >
                            HAMSTER
                            <span
                              className="smallCircle"
                              style={{ backgroundColor: "#cda5e0" }}
                            ></span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/category/:category"
                            className="petsListLink"
                          >
                            BIRD
                            <span
                              className="smallCircle"
                              style={{ backgroundColor: "#d8e22d" }}
                            ></span>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="productMenu">
                      <Link to="/list" className="productTitle">
                        PRODUCT
                        <span className="circle"></span>
                      </Link>
                      <ul className="productsList">
                        <li>
                          <Link to="/food">
                            FOOD
                            <span className="smallCircle"></span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/toy">
                            TOY
                            <span className="smallCircle"></span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/house">
                            HOUSE
                            <span className="smallCircle"></span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/health">
                            HEALTH
                            <span className="smallCircle"></span>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/list">P!CK</Link>
                    </li>
                    <li>
                      <Link to="/list">EVENT</Link>
                    </li>
                    <li>
                      <Link to="/list">BRAND</Link>
                    </li>
                  </ul>
                </div>
                <div className="headerLogo">
                  <Link to="/">
                    <img src="icons/main/mainIcon.svg" />
                  </Link>
                </div>
                <div className="userMenu">
                  <ul>
                    <li>
                      <Link to="/signin">
                        <img src="icons/main/person.svg" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <img src="icons/main/search.svg" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <img src="icons/main/shopping_cart.svg" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <img src="icons/main/bookmarks.svg" />
                      </Link>
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

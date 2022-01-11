import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { MdPets } from "react-icons/md";
import { BiUser } from "react-icons/bi";
import { FaSistrix } from "react-icons/fa";
import { BsBag } from "react-icons/bs";
import { IoBookmarksOutline } from "react-icons/io5";
import "./HeaderNav.scss";

export default function HeaderNav() {
  const navigate = useNavigate();
  const location = useLocation();
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);
  const colorChange = hovered !== false ? "#fbeff1" : "transparent";
  const heightChange = hovered !== false ? "360px" : "40px";
  const textColorChange = hovered !== false ? "black" : "white";
  const headerStyles = { color: textColorChange, cursor: "pointer" };
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

  const [loginState, setLoginState] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setLoginState(true);
    }
  }, [loginState]);

  const logout = e => {
    e.preventDefault();
    localStorage.removeItem("token");
    setLoginState(false);
  };

  const goToSignInPage = () => {
    if (!loginState && location.pathname === "/signin") {
      alert("회원가입이 하고싶은건가요~?");
      navigate("/signin");
    } else if (!loginState && location.pathname !== "/signin") {
      alert("로그인 하시면 프로필 페이지를 확인 하실수있습니다!");
      navigate("/signin");
    } else if (loginState) {
      alert("프로필 페이지 아직 없지롱~");
    }
  };

  return (
    <header className="HeaderNav" style={headerStyles}>
      <div
        className="topBox"
        style={{
          backgroundColor: colorChange,
          transition: "0.4s",
          height: heightChange,
        }}
      >
        <div className="topBoxInner">
          <section>
            <nav
              className="headerTop"
              style={{ display: fix ? "none" : "block" }}
            >
              <ul>
                <li style={{ display: loginState ? "none" : "block" }}>
                  <Link to="/signin">LOGIN</Link>
                </li>
                <li style={{ display: loginState ? "none" : "block" }}>
                  <Link to="/signup">JOIN</Link>
                </li>
                <li
                  className="logoutButton"
                  onClick={logout}
                  style={{ display: loginState ? "block" : "none" }}
                >
                  logout
                </li>
                <li className="globalStore">
                  <Link to="#">KOR</Link>
                  <ul className="globalStoreList">
                    <li>
                      <Link to="#">KOR</Link>
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
          <section className="headerBottomSection">
            <nav className={fix ? "headerBottom fixed" : "headerBottom"}>
              <div className="headerBottomInner">
                <div
                  className="headerMenu"
                  onMouseEnter={toggleHover}
                  onMouseLeave={toggleHover}
                  style={headerStyles}
                >
                  <ul>
                    <li className="petMenu">
                      <Link to="/category/dog" className="petTitle mainNavMenu">
                        PET
                        <span className="circle" />
                      </Link>
                      <ul className="petsList">
                        <li>
                          <Link to="/category/dog" className="petsListLink">
                            DOG
                            <span
                              className="smallCircle"
                              style={{ backgroundColor: "#fccf1d" }}
                            />
                          </Link>
                        </li>
                        <li>
                          <Link to="/category/cat" className="petsListLink">
                            CAT
                            <span
                              className="smallCircle"
                              style={{ backgroundColor: "#c81a20" }}
                            />
                          </Link>
                        </li>
                        <li>
                          <Link to="/category/turtle" className="petsListLink">
                            TURTLE
                            <span
                              className="smallCircle"
                              style={{ backgroundColor: "#016ad5" }}
                            />
                          </Link>
                        </li>
                        <li>
                          <Link to="/category/hamster" className="petsListLink">
                            HAMSTER
                            <span
                              className="smallCircle"
                              style={{ backgroundColor: "#cda5e0" }}
                            />
                          </Link>
                        </li>
                        <li>
                          <Link to="/category/bird" className="petsListLink">
                            BIRD
                            <span
                              className="smallCircle"
                              style={{ backgroundColor: "#d8e22d" }}
                            />
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="productMenu mainNavMenu">
                      <Link to="#" className="productTitle">
                        PRODUCT
                        <span className="circle" />
                      </Link>
                      <ul className="productsList">
                        <li>
                          <Link to="#">
                            FOOD
                            <span className="smallCircle" />
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            TOY
                            <span className="smallCircle" />
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            HOUSE
                            <span className="smallCircle" />
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            HEALTH
                            <span className="smallCircle" />
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="#" className="mainNavMenu">
                        P!CK
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="mainNavMenu">
                        EVENT
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="mainNavMenu">
                        BRAND
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="headerLogo">
                  <Link to="/">
                    <MdPets
                      size="5rem"
                      className="userMenubuttons"
                      style={headerStyles}
                    />
                  </Link>
                </div>
                <div className="userMenu">
                  <ul>
                    <li>
                      <BiUser
                        className="userButton userMenuButtons"
                        onClick={goToSignInPage}
                        style={headerStyles}
                      />
                    </li>
                    <li>
                      <Link to="#">
                        <FaSistrix
                          className="userMenuButtons"
                          style={headerStyles}
                        />
                      </Link>
                    </li>
                    <li>
                      <Link to="/cart">
                        <BsBag
                          className="userMenuButtons"
                          style={headerStyles}
                        />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <IoBookmarksOutline
                          className="userMenuButtons"
                          style={headerStyles}
                        />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </section>
        </div>
      </div>
    </header>
  );
}

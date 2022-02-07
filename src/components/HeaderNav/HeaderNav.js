import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { StyledHeader } from "../styles/Header.styled";
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
  const [scrollY, setScrollY] = useState(0);
  const [fix, setFix] = useState(false);
  const [categoryList, setCategoryList] = useState([]);
  const colorChange = hovered !== false ? "#fbeff1" : "transparent";
  const heightChange = hovered !== false ? "400px" : "40px";
  const [lightMode, setLightMode] = useState(false);
  const [whitePage, setWhitePage] = useState(false);

  useEffect(() => {
    async function getCategories() {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/category`
      );
      const data = await response.json();
      setCategoryList([...data]);
    }
    getCategories();
  }, []);

  useEffect(() => {
    if (
      location.pathname === "/signin" ||
      location.pathname === "/signup" ||
      location.pathname === "/category/" ||
      location.pathname === "/cart"
    ) {
      setLightMode(true);
      setWhitePage(true);
    } else if (
      location.pathname.includes("category") &&
      location.pathname.includes("product")
    ) {
      setLightMode(true);
      setWhitePage(true);
    } else {
      setLightMode(false);
    }
  }, [location.pathname]);

  const getCategoryColor = category => {
    switch (category) {
      case "dog":
        return { backgroundColor: "#fccf1d" };
      case "cat":
        return { backgroundColor: "#c81a20" };
      case "turtle":
        return { backgroundColor: "#016ad5" };
      case "hamster":
        return { backgroundColor: "#cda5e0" };
      case "bird":
        return { backgroundColor: "#d8e22d" };
      default:
        return { backgroundColor: "#3d435f" };
    }
  };
  const scrollWatch = () => {
    setScrollY(window.pageYOffset);
    if (scrollY > 50) {
      setFix(true);
      setLightMode(true);
      setHovered(false);
    } else {
      if (!whitePage) {
        setLightMode(false);
      }
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
  }, [location.pathname]);
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

  const hoverStyle = {
    height: "400px",
  };

  const darkFont = {
    color: "#000000",
  };

  const lightFont = {
    color: "#ffffff",
  };
  return (
    <ThemeProvider
      theme={
        lightMode
          ? hovered
            ? darkFont
            : darkFont
          : hovered
          ? darkFont
          : lightFont
      }
    >
      <StyledHeader className="HeaderNav" style={hoverStyle}>
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
                    LOGOUT
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
                  >
                    <ul>
                      <li className="petMenu">
                        <Link to="#" className="petTitle mainNavMenu">
                          PET
                          <span className="circle" />
                        </Link>
                        <ul className="petsList">
                          {categoryList &&
                            categoryList.map(pet => (
                              <li key={pet.id}>
                                <Link
                                  to={"/category/" + pet.name}
                                  className="petsListLink"
                                >
                                  {pet.name.toUpperCase()}
                                  <span
                                    className="smallCircle"
                                    style={getCategoryColor(pet.name)}
                                  />
                                </Link>
                              </li>
                            ))}
                        </ul>
                      </li>
                      <li className="productMenu">
                        <Link to="#" className="productTitle mainNavMenu">
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
                          <span className="circle" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="mainNavMenu">
                          EVENT
                          <span className="circle" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="mainNavMenu">
                          BRAND
                          <span className="circle" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <Link to="/" className="headerLogo">
                    <MdPets
                      size={fix ? "3rem" : "4rem"}
                      id="wetownLogo"
                      className="userMenubuttons"
                    />
                  </Link>
                  <div className="userMenu">
                    <ul>
                      <li>
                        <BiUser
                          className="userButton userMenuButtons"
                          onClick={goToSignInPage}
                        />
                      </li>
                      <li>
                        <Link to="#">
                          <FaSistrix className="userMenuButtons" />
                        </Link>
                      </li>
                      <li>
                        <Link to="/cart">
                          <BsBag className="userMenuButtons" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <IoBookmarksOutline className="userMenuButtons" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </section>
          </div>
        </div>
      </StyledHeader>
    </ThemeProvider>
  );
}

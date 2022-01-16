import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { StyledHeader } from "../styles/Header.styled";
import { MdPets } from "react-icons/md";
import { BiChevronDown, BiChevronUp, BiUser } from "react-icons/bi";
import { FaSistrix } from "react-icons/fa";
import { BsBag } from "react-icons/bs";
import { IoBookmarksOutline } from "react-icons/io5";
import HoveredHeader from "./HeaderNavComponents/HoveredHeader";
import "./HeaderNav.scss";

export default function HeaderNav() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isFixed, setIsFixed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [lightMode, setLightMode] = useState(false);

  useEffect(() => {
    if (
      location.pathname === "/signin" ||
      location.pathname === "/signup" ||
      location.pathname === "/category/" ||
      location.pathname === "/cart"
    ) {
      setLightMode(true);
    } else if (
      location.pathname.includes("category") &&
      location.pathname.includes("product")
    ) {
      setLightMode(true);
    } else {
      setLightMode(false);
    }
  }, [location.pathname]);

  const authenticateUser = () => {
    const token = localStorage.getItem("token");
    return !token ? false : true;
  };

  const [loginState, setLoginState] = useState(() => {
    const initialState = authenticateUser();
    return initialState;
  });

  useEffect(() => {
    setLoginState(authenticateUser());
  }, []);

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

  const scrollWatch = () => {
    let scrollY = window.pageYOffset;
    if (scrollY > 50) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
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

  const darkFont = {
    color: "#000000",
  };

  const lightFont =
    isFixed || isHovered
      ? {
          color: "#000000",
        }
      : {
          color: "#ffffff",
        };

  return (
    <ThemeProvider theme={lightMode ? darkFont : lightFont}>
      <StyledHeader className="HeaderNav">
        {isHovered ? (
          <HoveredHeader
            style={{ color: "#000000" }}
            onMouseLeave={() => setIsHovered(false)}
          />
        ) : null}
        <section
          className={
            isFixed ? "headerBottomSection fixed" : "headerBottomSection"
          }
        >
          <div className="headerBottomWrapper">
            <Link to="/" className="headerLogoLink">
              <h1 className="visuallyHidden">WETOWN &STORE</h1>
              <MdPets className="userMenubuttons wetownLogo" />
            </Link>
            <nav className="mainMenuNav">
              <ul
                className="mainNavListWrapper"
                onMouseEnter={() => setIsHovered(true)}
              >
                <li>
                  <Link to="#">PET</Link>
                </li>
                <li>
                  <Link to="#">PRODUCT</Link>
                </li>
                <li>
                  <Link to="#">&P!CK</Link>
                </li>
                <li>
                  <Link to="#">EVENT</Link>
                </li>
                <li>
                  <Link to="#">BRAND</Link>
                </li>
              </ul>
            </nav>
            <nav className="userMenuNav">
              <ul className="userNavListWrapper">
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
            </nav>
          </div>
        </section>
        <section className="headerTopMemberSection">
          <nav
            className="headerTop innerWrapper"
            // style={{ display: fix ? "none" : "block" }}
          >
            <ul className="userService">
              <li style={{ display: loginState ? "none" : "block" }}>
                <Link to="/signin" className="userServiceButtons">
                  LOGIN
                </Link>
              </li>
              <li style={{ display: loginState ? "none" : "block" }}>
                <Link to="/signup" className="userServiceButtons">
                  JOIN
                </Link>
              </li>
              <li
                className="userServiceButtons"
                onClick={logout}
                style={{ display: loginState ? "block" : "none" }}
              >
                LOGOUT
              </li>
              <li className="globalStore">
                KOR <BiChevronDown />
                <ul className="globalStoreList">
                  <li>
                    KOR <BiChevronUp color="black" />
                  </li>
                  <li>ENG</li>
                  <li>JPN</li>
                  <li>CHN</li>
                </ul>
              </li>
            </ul>
          </nav>
        </section>
      </StyledHeader>
    </ThemeProvider>
  );
}

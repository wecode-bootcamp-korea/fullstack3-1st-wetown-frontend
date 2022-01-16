import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { MdPets } from "react-icons/md";
import { BiChevronDown, BiChevronUp, BiUser } from "react-icons/bi";
import { FaSistrix } from "react-icons/fa";
import { BsBag } from "react-icons/bs";
import { IoBookmarksOutline } from "react-icons/io5";
import "./HoveredHeader.scss";

const HoveredHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [categoryList, setCategoryList] = useState([]);
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

  return (
    <div className="HoveredHeader">
      <div className="hoverHeaderContainer">
        <section className="hoveredBottom">
          <Link to="/" className="headerLogoLink">
            <MdPets
              className="userMenubuttons wetownLogo"
              style={{ fill: "black" }}
            />
          </Link>
          <nav className="hoveredMainNav">
            <section className="mainMenuContainer">
              <h2 className="visuallyHidden">MAIN MENU</h2>
              <article className="hoveredMainNavItem petMenu">
                <h3>
                  <Link to="#" className="menuText">
                    PET
                  </Link>
                  <span className="circle" />
                </h3>
                <article className="dropDownMenu opened">
                  <ul className="dropDownList">
                    {categoryList &&
                      categoryList.map(pet => (
                        <li
                          className="petList"
                          key={pet.id}
                          style={{ color: "#000000" }}
                        >
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
                </article>
              </article>
              <article className="hoveredMainNavItem productMenu">
                <h3>
                  <Link to="#" className="menuText">
                    PRODUCTS
                  </Link>
                  <span className="circle" />
                </h3>
                <article className="dropDownMenu opened">
                  <ul className="productsList dropDownList">
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
                </article>
              </article>
              <article className="hoveredMainNavItem">
                <h3>
                  <Link to="#" className="menuText">
                    &P!CK
                  </Link>
                  <span className="circle" />
                </h3>
              </article>
              <article className="hoveredMainNavItem">
                <h3>
                  <Link to="#" className="menuText">
                    EVENT
                  </Link>
                  <span className="circle" />
                </h3>
              </article>
              <article className="hoveredMainNavItem">
                <h3>
                  <Link to="#" className="menuText">
                    BRAND
                  </Link>
                  <span className="circle" />
                </h3>
              </article>
            </section>
          </nav>

          <nav className="hoveredUserNav">
            <ul className="userNavListWrapper">
              <li>
                <BiUser
                  className="userButton hoverUserMenuButtons"
                  onClick={goToSignInPage}
                />
              </li>
              <li>
                <Link to="#">
                  <FaSistrix className="hoverUserMenuButtons" />
                </Link>
              </li>
              <li>
                <Link to="/cart">
                  <BsBag className="hoverUserMenuButtons" />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <IoBookmarksOutline className="hoverUserMenuButtons" />
                </Link>
              </li>
            </ul>
          </nav>
        </section>
        <section className="hoveredTop">
          <nav className="hoveredTopNav innerWrapper">
            <ul className="hoveredUserService">
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
      </div>
      <div className="openCircle" />
    </div>
  );
};

export default HoveredHeader;

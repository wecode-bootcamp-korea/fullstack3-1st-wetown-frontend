import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import CircleButton from "../../components/CircleButton/CircleButton";
import Policy from "./Policy";
import "./SignUp.scss";

const SignUp = () => {
  const navigate = useNavigate();
  const [categoryList, setCategoryList] = useState([]);
  const [isValidSignUp, setValidSignUp] = useState(false);
  const [userInput, setUserInput] = useState({
    nameInput: "",
    nicknameInput: "",
    passwordInput: "",
    pwCheckInput: "",
    emailInput: "",
    policiesInput: {},
    genderInput: "",
    phoneNumInput: "010-1234-5678",
    petCategoryInput: "",
    bdayInput: "",
  });
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

  const selectedStyle = name => {
    return {
      width: "120px",
      height: "120px",
      backgroundColor: changeColor(name),
      color: "#fffff",
      opacity: "1",
    };
  };
  const pickStyle = () => {
    return {
      width: "120px",
      height: "120px",
      backgroundColor: "transparent",
      color: "#000000",
      opacity: "0.3",
    };
  };
  const changeColor = category => {
    switch (category) {
      case "dog":
        return "#fccf1d";
      case "cat":
        return "#c81a20";
      case "turtle":
        return "#016ad5";
      case "hamster":
        return "#cda5e0";
      case "bird":
        return "#d8e22d";
      default:
        return "#3d435f";
    }
  };

  const handleInput = e => {
    e.preventDefault();
    let { name, value } = e.target;
    if (name === "bdayInput") {
      value = Date.parse(value);
    }
    setUserInput({ ...userInput, [name]: value });
  };

  const checkOptionalPolicy = value => {
    setUserInput({ ...userInput, policiesInput: value });
  };

  useEffect(() => {
    const {
      nameInput,
      nicknameInput,
      passwordInput,
      pwCheckInput,
      emailInput,
      policiesInput,
      bdayInput,
    } = userInput;

    const validateName = nameInput;
    const validateNickname = nicknameInput.length > 3;
    const validateEmail = emailInput.includes("@");

    const validatePassword =
      passwordInput.length > 7 && passwordInput === pwCheckInput;

    const fourteenYearsInSec = 14 * 365 * 24 * 60 * 60 * 1000;
    const validateAge = Date.now() - bdayInput > fourteenYearsInSec;

    const validateRequiredPolicies =
      policiesInput?.userAgmt &&
      policiesInput?.privacy &&
      policiesInput?.ageFourteen;

    if (
      validateName &&
      validateNickname &&
      validateEmail &&
      validatePassword &&
      validateAge &&
      validateRequiredPolicies
    ) {
      setValidSignUp(true);
    } else {
      setValidSignUp(false);
    }
  }, [userInput]);

  async function goSignUp(e) {
    e.preventDefault();
    const {
      nameInput,
      nicknameInput,
      emailInput,
      passwordInput,
      policiesInput,
      genderInput,
      phoneNumInput,
    } = userInput;

    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/user/signup`,
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: nameInput,
          nickname: nicknameInput,
          password: passwordInput,
          email: emailInput,
          policies: policiesInput,
          gender: genderInput,
          phone_number: phoneNumInput,
        }),
      }
    );

    const data = await response.json();

    if (response.status === 200) {
      localStorage.setItem("token", data.token);
      alert("회원가입을 축하드립니다.");
      navigate("/");
    }
  }

  return (
    <div className="SignUp">
      <div className="SignUpContainer">
        <h2 className="pageTitle">Join Us</h2>
        <form className="form " action="#">
          <section className="section userFormInput">
            <h3 className="title">기본정보</h3>
            <div className="inputControl">
              <label className="label" htmlFor="verification">
                본인인증
              </label>
              <div className="verificationInputWrapper">
                <div className="inputWrapper">
                  <span className="verificationInput">휴대폰 인증</span>
                  <CircleButton
                    type="radio"
                    name="genderInput"
                    value="인증하기"
                    style={{
                      marginBottom: "15px",
                      width: "100px",
                      height: "25px",
                      borderRadius: "25px",
                      color: "#3d435f",
                    }}
                    onClick={() => {
                      alert("본인이 맞습니까?");
                    }}
                  />
                </div>
                <div>본인 명의의 휴대폰으로 본인인증을 진행합니다.</div>
              </div>
            </div>
            <div className="inputControl requiredField">
              <label className="label" htmlFor="nameInput">
                이름
              </label>
              <input
                type="text"
                id="nameInput"
                name="nameInput"
                required
                onChange={handleInput}
              />
            </div>
            <div className="inputControl requiredField">
              <label className="label" htmlFor="bdayInput">
                생년월일
              </label>
              <input
                type="date"
                id="bdayInput"
                name="bdayInput"
                required
                onChange={handleInput}
              />
            </div>
            <div className="inputControl">
              <label className="label">성별</label>
              <div className="genderOptions">
                <CircleButton
                  type="radio"
                  name="genderInput"
                  value="남자"
                  style={{
                    width: "50px",
                    height: "25px",
                    borderRadius: "25px",
                    backgroundColor:
                      userInput.genderInput === "남자"
                        ? "black"
                        : "transparent",
                    color: userInput.genderInput === "남자" ? "white" : "black",
                    opacity: userInput.genderInput === "여자" ? "1" : "",
                  }}
                  onClick={e => handleInput(e)}
                />
              </div>
              <div className="genderOptions">
                <CircleButton
                  type="radio"
                  name="genderInput"
                  value="여자"
                  style={{
                    width: "50px",
                    height: "25px",
                    borderRadius: "25px",
                    backgroundColor:
                      userInput.genderInput === "여자"
                        ? "black"
                        : "transparent",
                    color: userInput.genderInput === "여자" ? "white" : "black",
                    opacity: userInput.genderInput === "여자" ? "1" : "",
                  }}
                  onClick={e => handleInput(e)}
                />
              </div>
            </div>
            <div className="inputControl requiredField">
              <label className="label" htmlFor="nicknameInput">
                아이디
              </label>
              <input
                type="text"
                id="nicknameInput"
                name="nicknameInput"
                placeholder="영문소문자/숫자, 4~16자"
                required
                autoComplete="username"
                onChange={handleInput}
              />
            </div>
            <div className="inputControl requiredField">
              <label className="label" htmlFor="passwordInput">
                비밀번호
              </label>
              <input
                type="password"
                id="passwordInput"
                name="passwordInput"
                placeholder="영문/숫자/특수문자 중 2가지 이상 조합, 8자~16자"
                required
                autoComplete="new-password"
                onChange={handleInput}
              />
            </div>
            <div className="inputControl requiredField">
              <label className="label" htmlFor="pwCheckInput">
                비밀번호 확인
              </label>
              <input
                type="password"
                id="pwCheckInput"
                name="pwCheckInput"
                required
                autoComplete="new-password"
                onChange={handleInput}
              />
            </div>
            <div className="inputControl">
              <label className="label" htmlFor="addressInput">
                주소
              </label>
              <input
                tabIndex={-1}
                type="text"
                id="addressInput"
                name="addressInput"
                disabled
              />
            </div>
            <div className="inputControl">
              <label className="label" htmlFor="phoneNumInput">
                일반전화
              </label>
              <div className="phoneNumWrapper">
                <select tabIndex={-1} className="areaCodeInput">
                  <option value="02">02</option>
                  <option value="010">010</option>
                  <option value="031">031</option>
                  <option value="032">032</option>
                  <option value="033">033</option>
                  <option value="041">041</option>
                  <option value="042">042</option>
                  <option value="043">043</option>
                  <option value="044">044</option>
                  <option value="051">051</option>
                  <option value="052">052</option>
                </select>
                <input
                  tabIndex={-1}
                  type="tel"
                  className="phoneNumInput"
                  disabled
                />
                <input
                  tabIndex={-1}
                  type="tel"
                  className="phoneNumInput"
                  disabled
                />
              </div>
            </div>
            <div className="inputControl requiredField">
              <label className="label" htmlFor="emailInput">
                이메일
              </label>
              <input
                type="emailInput"
                id="emailInput"
                name="emailInput"
                onChange={handleInput}
              />
            </div>
          </section>
          <section className="section pickCategory">
            <h3 className="title">PET 선택</h3>
            <div>
              <p>좋아하는 PET을 선택해주세요!</p>
              <p>
                WETOWN &STORE에서 좋아하는 PET의 상품과 이벤트를 먼저 만나 볼 수
                있어요.
              </p>
            </div>
            <article>
              {categoryList.map(pet => (
                <CircleButton
                  key={pet.id}
                  type="radio"
                  name="petCategoryInput"
                  value={pet.name.toUpperCase()}
                  onClick={e => handleInput(e)}
                  style={
                    userInput.petCategoryInput === pet.name.toUpperCase()
                      ? selectedStyle(pet.name)
                      : pickStyle()
                  }
                />
              ))}
            </article>
          </section>
          <Policy onCheck={value => checkOptionalPolicy(value)} />
          <section className="section formButtons">
            <button>
              <Link className="buttonText" to="/">
                CANCEL
              </Link>
            </button>
            <button
              onClick={goSignUp}
              disabled={!isValidSignUp}
              className={
                "signupButton " + (isValidSignUp ? "valid" : "invalid")
              }
              style={{
                backgroundColor: userInput.petCategoryInput
                  ? changeColor(userInput.petCategoryInput)
                  : "#3d435f",
              }}
            >
              <span className="buttonText">JOIN</span>
            </button>
          </section>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import CircleButton from "../../components/CircleButton/CircleButton";
import Policy from "./Policy";
import "./SignUp.scss";

const SignUp = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [validSignUp, setValidSignUp] = useState(false);
  const [userInput, setUserInput] = useState({
    //필수항목은 db저장
    nameInput: "", //required
    nicknameInput: "", //required
    passwordInput: "", //required
    pwCheckInput: "", //required
    emailInput: "", //required
    bdayInput: "", // required for age validation
    //선택항목
    phoneNumInput: "010-1234-5678", //optional
    genderInput: "여자", //optional
    petCategoryInput: "", // optional -> type: object
  });

  const {
    nameInput,
    nicknameInput,
    passwordInput,
    pwCheckInput,
    emailInput,
    phoneNumInput,
    genderInput,
    bdayInput,
    petCategoryInput,
  } = userInput;

  const handleInput = e => {
    e.preventDefault();
    let { name, value } = e.target;

    if (name === "petCategoryInput") {
      const [petChoice] = categoryList.filter(pet => pet.category === value);
      value = { ...petChoice };
    }

    if (name === "bdayInput") {
      value = Date.parse(value);
    }

    setUserInput({ ...userInput, [name]: value });
  };

  useEffect(() => {
    const validateEmail = emailInput.includes("@");

    const validatePassword =
      passwordInput.length > 8 && passwordInput === pwCheckInput;

    const fourteenYearsInSec = 14 * 365 * 24 * 60 * 60 * 1000;
    const validateAge = Date.now() - bdayInput > fourteenYearsInSec;

    if (validateEmail && validatePassword && validateAge) {
      setValidSignUp(true);
    } else {
      setValidSignUp(false);
    }
  }, [emailInput, passwordInput, pwCheckInput, bdayInput, validSignUp]);

  function goSignUp(e) {
    e.preventDefault();

    const options = {
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };

    axios
      .post(
        "http://localhost:8000/user/signup",
        {
          name: nameInput,
          nickname: nicknameInput,
          password: passwordInput,
          email: emailInput,
          phone_number: phoneNumInput,
          gender: genderInput,
        },
        options
      )
      .then(response => {
        if (response.status === 200) {
          // 사용자를 로그인 시키고 메인페이지 또는 마지막 페이지로 이동
        }
      });
  }

  useEffect(() => {
    fetch("http://localhost:3000/data/mockCategory.json")
      .then(res => res.json())
      .then(data => setCategoryList(data));
  }, []);

  return (
    <div
      className="SignUp"
      // 개발 과정에서 유효성 검사 작동 확인을 위해 배경화면 스타일 적용
      // 추후 스타일 어트리뷰트는 삭제
      style={{ backgroundColor: validSignUp ? "green" : "orange" }}
    >
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
                  <button
                    className="verificationInput"
                    type="button"
                    id="verification"
                    style={{
                      color: "#3d435f",
                      backgroundColor: "#fff",
                      border: "1px solid #4d435f",
                    }}
                  >
                    인증하기
                  </button>
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
                <input
                  type="radio"
                  id="male"
                  name="genderInput"
                  value="남자"
                  onClick={handleInput}
                />
                <label htmlFor="genderMaleInput">남자</label>
              </div>
              <div className="genderOptions">
                <input
                  type="radio"
                  id="female"
                  name="genderInput"
                  value="여자"
                  onClick={handleInput}
                />
                <label htmlFor="genderFemaleInput">여자</label>
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
                <select className="areaCodeInput">
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
                <input type="tel" className="phoneNumInput" disabled />
                <input type="tel" className="phoneNumInput" disabled />
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
                  value={pet.category}
                  style={{
                    width: "120px",
                    height: "120px",
                    backgroundColor:
                      petCategoryInput.category === pet.category
                        ? petCategoryInput.color
                        : "",
                  }}
                  onClick={e => handleInput(e)}
                />
              ))}
            </article>
          </section>
          <Policy />
          <section className="section formButtons">
            <button>
              <Link className="buttonText" to="/">
                CANCEL
              </Link>
            </button>
            <button onClick={goSignUp} disabled={!validSignUp}>
              <span className="buttonText">JOIN</span>
            </button>
          </section>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

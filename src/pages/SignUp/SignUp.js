import React, { useState, useEffect } from "react";
import CircleButton from "../../components/CircleButton/CircleButton";
import Policy from "./Policy";
import "./SignUp.scss";

const SignUp = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [userInput, setUserInput] = useState({
    nameInput: "", //required
    nicknameInput: "", //required
    passwordInput: "", //required
    emailInput: "", //required
    phoneNumInput: "010-1234-5678", //optional
    genderInput: "여자", //optional
    bdayInput: "2022-01-01", //age validation only
    petCategoryInput: "", // object
  });

  const {
    nameInput,
    nicknameInput,
    passwordInput,
    emailInput,
    phoneNumInput,
    genderInput,
    petCategoryInput,
  } = userInput;

  const handleInput = e => {
    e.preventDefault();
    let { name, value } = e.target;

    if (name === "petCategoryInput") {
      const [petChoice] = categoryList.filter(pet => pet.category === value);
      value = { ...petChoice };
    }

    setUserInput({ ...userInput, [name]: value });
    validateInput();
  };

  const validateInput = e => {
    // [ ] email address
    // [ ] password length and character types
    // [ ] password and password check match
    // [ ] policy agreement mandatory fields checked
    // [ ] age must be 14 years and older to signup
  };

  function goSignUp(e) {
    e.preventDefault();

    fetch("http://localhost:8000/user/signup", {
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
        phone_number: phoneNumInput,
        gender: genderInput,
      }),
    })
      .then(res => res.json())
      .then(data => console.log(data));
  }

  useEffect(() => {
    fetch("http://localhost:3000/data/mockCategory.json")
      .then(res => res.json())
      .then(data => setCategoryList(data));
  }, []);

  return (
    <div className="SignUp">
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
                <span>휴대폰 인증</span>
                <input type="button" id="verification" value="인증하기" />
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
          <div className="inputControl">
            <label className="label" htmlFor="bdayInput">
              생년월일
            </label>
            <input
              type="date"
              id="bdayInput"
              name="birthdayInput"
              onChange={handleInput}
            />
          </div>
          <div className="inputControl requiredField">
            <label className="label">성별</label>
            <div>
              <input
                type="radio"
                id="genderMaleInput"
                name="genderInput"
                value="남자"
                onClick={handleInput}
              />
              <label htmlFor="genderMaleInput">남자</label>
            </div>
            <div>
              <input
                type="radio"
                id="genderFemaleInput"
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
              placeholder="영문/숫자/특수문자 중 2가지 이상 조합, 10자~16자"
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
            <input type="text" id="addressInput" name="addressInput" />
          </div>
          <div className="inputControl">
            <label className="label" htmlFor="phoneNumInput">
              일반전화
            </label>
            <div className="phoneNumWrapper">
              <select id="phoneNumInput" name="areaCode">
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
              <input type="tel" id="phoneNum1" />
              <input type="tel" id="phoneNum2" />
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
          <button>CANCEL</button>
          <button onClick={goSignUp}>JOIN</button>
        </section>
      </form>
    </div>
  );
};

export default SignUp;

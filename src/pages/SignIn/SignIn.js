import { useState } from "react";
import CircleButton from "../../components/CircleButton/CircleButton";
import "./SignIn.scss";

const SignIn = () => {
  const [signInInput, setSignInInput] = useState({
    emailInput: "",
    passwordInput: "",
  });

  const handleInput = e => {
    let { name, value } = e.target;
    setSignInInput({ ...signInInput, [name]: value });
  };

  return (
    <div className="SignIn">
      <h2 className="pageTitle">Login</h2>
      <section className="signInBox">
        <form className="section form " action="#">
          {/* <h3>WETOWN 로그인</h3> */}
          <div className="inputControl">
            <label className="label" htmlFor="emailInput">
              EMAIL
            </label>
            <input
              type="email"
              id="emailInput"
              name="emailInput"
              required
              autoComplete="email"
              onChange={handleInput}
            />
          </div>
          <div className="inputControl">
            <label className="label" htmlFor="passwordInput">
              PASSWORD
            </label>
            <input
              type="password"
              id="passwordInput"
              name="passwordInput"
              required
              autoComplete="current-password"
              onChange={handleInput}
            />
          </div>
        </form>
        <section className="section formButtons">
          <button className="signInButton">LOGIN</button>

          <button className="signInButton">JOIN US</button>
        </section>
        <section className="section userFind">
          <ul>
            <li>아이디 찾기</li>
            <li>비밀번호 찾기</li>
            <li>비회원 주문조회</li>
          </ul>
        </section>
        <section className="section socialSignIn">
          <h3 className="socialHeading">
            간편 로그인
            <span className="test" />
          </h3>
          <div className="socialLinkButtons">
            <a href="https://developers.kakao.com/product/kakaoLogin">
              <CircleButton
                type="button"
                name="kakaoLogin"
                style={{
                  backgroundImage:
                    "url(https://en.smtownandstore.com/morenvyimg/m_login/login_sns_kakao_off.png)",
                }}
              />
            </a>
            <a href="https://developers.line.biz/en/services/line-login/">
              <CircleButton
                type="button"
                name="lineLogin"
                style={{
                  backgroundImage:
                    "url(https://en.smtownandstore.com/morenvyimg/m_login/login_sns_line_off.png)",
                }}
              />
            </a>
            <a href="https://developers.google.com/identity/gsi/web">
              <CircleButton
                type="button"
                name="googleLogin"
                style={{
                  backgroundImage:
                    "url(https://en.smtownandstore.com/morenvyimg/m_login/login_sns_google_off.png)",
                }}
              />
            </a>
            <a href="https://developers.facebook.com/docs/facebook-login/">
              <CircleButton
                type="button"
                name="facebookLogin"
                style={{
                  backgroundImage:
                    "url(https://en.smtownandstore.com/morenvyimg/m_login/login_sns_facebook_off.png)",
                }}
              />
            </a>
            <a href="https://developer.apple.com/documentation/sign_in_with_apple">
              <CircleButton
                type="button"
                name="appleLogin"
                style={{
                  backgroundImage:
                    "url(https://en.smtownandstore.com/web/login/login_sns_facebook_on.png)",
                }}
              />
            </a>
          </div>
        </section>
      </section>
    </div>
  );
};

export default SignIn;

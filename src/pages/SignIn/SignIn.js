import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import HeaderNav from "../../components/HeaderNav/HeaderNav";
import Footer from "../../components/Footer/Footer";
import CircleButton from "../../components/CircleButton/CircleButton";
import "./SignIn.scss";

const SignIn = () => {
  const [errorMsg, setErrorMsg] = useState(false);
  const [validLogin, setValidLogin] = useState(false);
  const [signInInput, setSignInInput] = useState({
    emailInput: "",
    passwordInput: "",
  });

  let { emailInput, passwordInput } = signInInput;

  const handleInput = e => {
    let { name, value } = e.target;
    setSignInInput({ ...signInInput, [name]: value });
    if (errorMsg) {
      setErrorMsg(false);
    }
  };

  useEffect(() => {
    const emailCheck = emailInput.includes("@");
    const passwordCheck = passwordInput.length > 7;

    if (emailCheck && passwordCheck) {
      setValidLogin(true);
    } else setValidLogin(false);
  }, [emailInput, passwordInput]);

  const navigate = useNavigate();

  async function goSignIn(e) {
    e.preventDefault();

    const response = await fetch(`http://localhost:8000/user/signin`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailInput,
        password: passwordInput,
      }),
    });

    const data = await response.json();

    if (response.status === 200) {
      localStorage.setItem("token", data.token);
      navigate("/");
    } else if (response.status === (400 || 500)) {
      setErrorMsg(true);
      setValidLogin(false);
    }
  }

  return (
    <div className="SignIn">
      <HeaderNav />
      <div className="SignInContainer">
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
          <div
            className="errorMsg"
            style={{ visibility: errorMsg ? "visible" : "hidden" }}
          >
            이메일과 비밀번호를 확인해주세요.
          </div>
          <section className="section formButtons">
            <button
              className="signInButton"
              onClick={goSignIn}
              // 개발과정에서 유효성 검사 진행확인 위해 색 표시
              // 추후 style 어트리뷰트는 삭제
              style={{ backgroundColor: validLogin ? "blue" : "red" }}
              disabled={!validLogin}
            >
              LOGIN
            </button>

            <Link
              to="/signup"
              style={{ width: "100%", textDecoration: "none" }}
            >
              <button className="signInButton">JOIN US</button>
            </Link>
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
      <Footer />
    </div>
  );
};

export default SignIn;

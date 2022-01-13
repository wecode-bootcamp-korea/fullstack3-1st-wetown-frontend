import "./Footer.scss";

const Footer = () => {
  const useInfo = () => {
    alert("힝 속았지?");
  };
  return (
    <footer className="footerSection">
      <section className="bodySection">
        <section className="mainBanner">
          <h2>WETOWN &STORE</h2>
        </section>
        <section className="navWrapper">
          <nav className="leftNav">
            <span>제휴문의</span>
            <span>이용약관</span>
            <span>개인정보처리방침</span>
          </nav>
          <nav className="rightNav">
            <span>이용안내</span>
            <span>공지사항</span>
            <span>비회원 문의</span>
            <span>주문조회</span>
            <select>
              <option value="FAMILY-SITE">FAMILY SITE</option>
              <option value="IU">유애나</option>
              <option value="hyoshin">SOULTREE</option>
            </select>
          </nav>
        </section>
        <section className="companyInfo">
          <address className="firstInfoSection">
            <span className="infoKey">회사명</span>
            <span className="infoValue">(주)위타운만든사람들</span>
            <span className="infoKey">대표자명</span>
            <span className="infoValue">공동대표</span>
            <span className="infoKey">주소</span>
            <span className="infoValue">
              12345 사랑시 행복구 우리집으로 82-53 (직방1가) 메트로폴리스 9층
            </span>
            <span className="infoKey">대표번호</span>
            <span className="infoValue">2030-3020</span>
          </address>
          <section className="secondInfoSection">
            <span className="infoKey">사업자등록번호</span>
            <span className="infoValue">322-99-28210</span>
            <span className="infoKey">통신판매업 신고번호</span>
            <span className="infoValue">제 2022-각자집에서-2주동안</span>
            <span className="infoKey">개인정보보호책임자</span>
            <span className="infoValue">이소헌&조재준 wecode@mento.com</span>
          </section>
          <section className="lastInfoSection">
            <span className="infoKey">호스팅서비스 제공자</span>
            <span className="infoValue">wecode</span>
            <span className="infoKey">구매안전서비스</span>
            <span className="infoValue">이용확인</span>

            <img
              onClick={useInfo}
              alt="external-link"
              src="/images/Footer/external-link-alt-solid.svg"
            />
          </section>
          <section className="protectFromRaw">
            <small>
              WETOWN &STORE의 모든 콘텐츠는 저작권의 보호를 못받고 있습니다.
            </small>
          </section>
        </section>
        <section className="iconLinkSection">
          <section className="brandIcon">
            <img
              className="socialIcons"
              alt="facebook"
              src="/images/Footer/facebook.svg"
            />
            <img
              className="socialIcons"
              alt="twitter"
              src="/images/Footer/twitter.svg"
            />
            <img
              className="socialIcons"
              alt="youtube"
              src="/images/Footer/youtube.svg"
            />
            <img
              className="socialIcons"
              alt="instagram"
              src="/images/Footer/instagram.svg"
            />
            <img
              className="socialIcons"
              alt="apple"
              src="/images/Footer/apple.svg"
            />
          </section>
          <section className="contributors">
            <span>Eb Jh Hy Tj</span>
          </section>
        </section>
      </section>
    </footer>
  );
};

export default Footer;

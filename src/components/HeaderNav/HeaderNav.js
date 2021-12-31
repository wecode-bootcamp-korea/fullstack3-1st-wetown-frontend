import React, { useState } from "react";
import "./HeaderNav.scss";

export default function HeaderNav() {
  return (
    <header className="HeaderNav">
      <div className="headerTop">
        <ul>
          <li>Login</li>
          <li>Join</li>
          <li className="globalStore">
            <a href="/">KOR</a>
            <ul className="globalStoreList">
              <li>
                <a href="/en">ENG</a>
              </li>
              <li>
                <a href="/jp">JPN</a>
              </li>
              <li>
                <a href="/cn">CHN</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="headerBottom">
        <div className="headerBottomInner">
          <div className="headerMenu">
            <ul>
              <li className="petsMenu">
                <a href="/list">PET</a>
                {/* <ul className="petsList">
                  <li>DOG</li>
                  <li>CAT</li>
                  <li>TURTLE</li>
                  <li>HAMSTER</li>
                  <li>BIRD</li>
                </ul> */}
              </li>
              <li>PRODUCT</li>
              <li>PICK</li>
              <li>EVENT</li>
              <li>BRAND</li>
            </ul>
          </div>
          <div className="headerLogo">로고 넣는 자리</div>
          <div className="userMenu">
            <ul>
              <li>사람 모양</li>
              <li>돋보기</li>
              <li>장바구니</li>
              <li>즐겨찾기</li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

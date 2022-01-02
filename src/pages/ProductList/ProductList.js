import { React, useState } from "react";
import { useNavigate } from "react-router";
import HeaderNav from "../../components/HeaderNav/HeaderNav";
import ProductCard from "../../components/ProductCard";
import "./ProductList.scss";

function ProductList() {
  const [categoryState, setCategoryState] = userState("");
  return (
    <div className="productList">
      {/* <HeaderNav /> */}
      <header></header>
      <section className="sectionLayout">
        <section className="imgSlide">
          <a href=" ">
            <img
              class="petSlideImg"
              src="http://localhost:3000/images/_.jpg"
              alt="주인공 이름은?"
            />
          </a>
        </section>
        <section className="productSideSection">
          <section className="sideSection">
            <nav className="petSide">
              <section className="petMainSide">PET NAME</section>
              <section className="petSubSide">
                <ul>
                  <li>
                    <a href="/">FOOD</a>
                  </li>
                  <li>
                    <a href="/">TOY</a>
                  </li>
                  <li>
                    <a href="/">HOUSE</a>
                  </li>
                  <li>
                    <a href="/">HEALTH</a>
                  </li>
                </ul>
              </section>
            </nav>
          </section>
          <section className="productSection">
            <section className="filter">
              <select className="selectFilter">
                <option value="latest">최신순</option>
                <option value="productName">상품명</option>
                <option value="lowPrice">낮은가격</option>
                <option value="highPrice">높은가격</option>
              </select>
            </section>
            <section className="productSide">
              <ul>{/* <ProductCard data={notYet} /> */}</ul>
            </section>
            <section className="showMore">더보기 +</section>
          </section>
        </section>
      </section>
    </div>
  );
}

export default ProductList;

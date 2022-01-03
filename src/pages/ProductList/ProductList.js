import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Link, useParams } from "react-router-dom";
import HeaderNav from "../../components/HeaderNav/HeaderNav";
import ProductCard from "../../components/ProductCard";
import "./ProductList.scss";

function ProductList() {
  //url에 담긴 parameter 가져오기
  const params = useParams();
  console.log(params);

  //카테고리 입력된 값 상태 관리
  const [categoryList, setCategoryList] = useState([]);

  //navigate 할당
  const navigate = useNavigate();

  // 카테고리 입력값 받아오기
  //"/product/filter/dog/?subcategory=food&sortMethod=1"
  useEffect(() => {
    fetch(`http://localhost:8000/product/filter/${params.category}`)
      .then(res => res.json())
      .then(data => setCategoryList(data));
  }, []);

  return (
    <section className="productList">
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
              <section className="petMainSide">PRODUCT</section>
              <section className="petSubSide">
                <ul>
                  <li>
                    <Link
                      to={"/product/filter/dog/?subcategory=toy&sortMethod=1"}
                    >
                      FOOD
                    </Link>
                  </li>
                  <li>
                    <Link to="/product/filter/dog/?subcategory=toy&sortMethod=1">
                      TOY
                    </Link>
                  </li>
                  <li>
                    <Link to="/product/filter/dog/?subcategory=house&sortMethod=1">
                      HOUSE
                    </Link>
                  </li>
                  <li>
                    <Link to="/product/filter/dog/?subcategory=health&sortMethod=1">
                      HEALTH
                    </Link>
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
              <ul>
                {categoryList[0] &&
                  categoryList.map(categoryList => (
                    <ProductCard data={categoryList} key={categoryList.id} />
                  ))}
              </ul>
            </section>
            <section className="showMore">더보기 +</section>
          </section>
        </section>
      </section>
    </section>
  );
}
export default ProductList;

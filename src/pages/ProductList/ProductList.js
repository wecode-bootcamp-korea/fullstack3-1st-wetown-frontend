import { React, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ProductCard from "./ListComponents/ProductCard";
import "./ProductList.scss";
import ListSlider from "./ListComponents/ListSlider";
import ScrollToTop from "../../components/ScrollToTop";

function ProductList() {
  //GET PARAMETER FROM URL
  const params = useParams();

  const [cate, setCate] = useState();

  useEffect(() => {
    setCate(params.category);
  });

  //GET QUERY FROM URL
  // const search = useLocation().search;
  // const querySubCategory = new URLSearchParams(search).get("subcategory");
  // const querySortMethod = new URLSearchParams(search).get("sortMethod");

  //카테고리 입력된 값 상태 관리
  const [categoryList, setCategoryList] = useState([]);
  //더보기 예외처리시 필요한 상태 관리
  const [dataLength, setDataLength] = useState(0);
  const [allData, setAllData] = useState([]);
  //sort 입력된 값 상태 관리
  const [sortMethod, setSortMethod] = useState("");

  let URL = `${process.env.REACT_APP_BASE_URL}/product/filter/${params.category}`;
  if (sortMethod) {
    URL = `${process.env.REACT_APP_BASE_URL}/product/filter/${params.category}/?sortMethod=${sortMethod}`;
  }

  //Link to URL
  const LINK_URL = e => {
    return `/category/${params.category}/subcategory/${e}/sortMethod=1`;
  };

  // 카테고리 입력값 받아오기
  useEffect(() => {
    fetch(URL)
      .then(res => res.json())
      .then(data => {
        setDataLength(data.length);
        setAllData(data);
        let arr = [];
        if (data.length > 6) {
          for (let i = 0; i < 6; i++) {
            arr.push(data[i]);
          }
          setCategoryList(arr);
        } else {
          setCategoryList(data);
        }
      });
  }, [sortMethod, cate]);

  const sortMethodValue = num => {
    setSortMethod(num.target.value);
  };

  const moreItems = () => {
    if (categoryList.length < allData.length) {
      setCategoryList(allData);
    }
  };

  return (
    <section className="productList">
      <ScrollToTop />
      <ListSlider />
      <section className="sectionLayout">
        <section className="productSideSection">
          <section className="sideSection">
            <nav className="petSide">
              <section className="petMainSide">PRODUCT</section>
              <section className="petSubSide">
                <ul>
                  {/* <li onClick={() => subCategoryValue("food")}>FOOD</li>
                  <li onClick={() => subCategoryValue("toy")}>TOY</li>
                  <li onClick={() => subCategoryValue("house")}>HOUSE</li>
                  <li onClick={() => subCategoryValue("health")}>HEALTH</li> */}
                  <li>
                    <Link to={LINK_URL("food")}>FOOD</Link>
                  </li>
                  <li>
                    <Link to={LINK_URL("toy")}>TOY</Link>
                  </li>
                  <li>
                    <Link to={LINK_URL("house")}>HOUSE</Link>
                  </li>
                  <li>
                    <Link to={LINK_URL("health")}>HEALTH</Link>
                  </li>
                </ul>
              </section>
            </nav>
          </section>
          <section className="productSection">
            <section className="filter">
              <select
                className="selectFilter"
                onChange={sortMethodValue}
                value={sortMethod}
              >
                <option value="1">최신순</option>
                <option value="2">상품명</option>
                <option value="3">낮은가격</option>
                <option value="4">높은가격</option>
              </select>
            </section>
            <section className="productSide">
              <ul>
                {categoryList?.map(categoryList => (
                  <ProductCard data={categoryList} key={categoryList.id} />
                ))}
              </ul>
            </section>
            {dataLength === categoryList.length ? (
              <section className="showMore" />
            ) : (
              <section className="showMore" onClick={moreItems}>
                더보기 +
              </section>
            )}
          </section>
        </section>
      </section>
    </section>
  );
}
export default ProductList;

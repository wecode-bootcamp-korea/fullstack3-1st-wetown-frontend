import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Slider } from "./DetailComponents/Slider";
import { PolicyBox } from "./DetailComponents/PolicyBox";
import { ViewCart } from "./DetailComponents/ViewCart";
import {
  NewTag,
  PopUp,
  Price,
  TopBottom,
} from "./DetailComponents/MiniComponents";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { RiArrowGoBackFill, RiShareLine } from "react-icons/ri";
import "./ProductDetail.scss";

const ProductDetail = () => {
  const params = useParams();
  const [ad, setAd] = useState(false);
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [imgList, setImgList] = useState([]);
  const [originalImg, setOriginalImg] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [addCart, setAddCart] = useState(false);
  const [noticeNum, setNoticeNum] = useState(1);
  const userId = localStorage.getItem("token");
  const [x, setX] = useState(0);

  useEffect(() => {
    const adTimer = setTimeout(() => {
      setAd(true);
    }, 1000);

    fetch(`${process.env.REACT_APP_BASE_URL}/product/${params.product}`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(res => res.json())
      .then(res => {
        setData(res);
        const newImg = [...res.url, ...res.url];
        setImgList(newImg);
        setX(-(parseInt(newImg.length / 2, 10) * 600));
        setOriginalImg(res.url);
      });

    return () => {
      clearTimeout(adTimer);
    };
  }, [params.product]);

  const priceObject = (isSale, quantity) => {
    if (isSale) {
      return Math.round(data.price * (1 - data.sale_rate / 100) * quantity);
    } else {
      return Math.round(data.price * quantity);
    }
  };

  const toCart = () => {
    fetch(`${process.env.REACT_APP_BASE_URL}/cart`, {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: userId,
        product_id: data.id,
        cart_quantity: quantity,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.result === true) {
          setAddCart(res.result);
        }
      })
      .catch(err => alert("로그인 해주세요."));
  };
  const pickColor = cate => {
    switch (cate) {
      case "dog":
        return { backgroundColor: "#fccf1d" };
      case "cat":
        return { backgroundColor: "#c81a20" };
      case "turtle":
        return { backgroundColor: "#016ad5" };
      case "hamster":
        return { backgroundColor: "#cda5e0" };
      case "bird":
        return { backgroundColor: "#d8e22d" };
      default:
        return { backgroundColor: "black" };
    }
  };

  const toComma = price => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className="ProductDetail">
      <div className="detailArea">
        {addCart ? (
          <ViewCart
            cate={data.cate_name}
            setAddCart={setAddCart}
            navigate={navigate}
          />
        ) : null}
        <section className="mainArea">
          {data.is_new ? <NewTag /> : null}
          <div className="slideContainer">
            <div className="dumy" />
            <Slider
              x={x}
              setX={setX}
              imgList={imgList}
              setImgList={setImgList}
              originalImg={originalImg}
            />
          </div>
          <div className="productDetailArea">
            <div className="detailHeading">
              <ul className="noticeInfo">
                <li>
                  ▪️ WETOWN & STORE는 WE ENTERTAINMENT 공식 온라인 스토어입니다.
                </li>
                <li>
                  ▪️ WETOWN & STORE는 콘텐츠 저작권법에 따라 보호받으며,
                  무단복제 및 도용을 금지합니다
                </li>
                <li>
                  ▪️ WETOWN & STORE는 음반 판매 수량은 🐶차트와 🐱차트에
                  반영됩니다.
                </li>
              </ul>
              <div className="noticeIcon">
                <span>🐶</span> <span>🐱</span>
              </div>
              <div className="noticeImg">
                <div className="ad">
                  <img src="/images/productDetailPage/ad.png" alt="ad" />
                </div>
                <div className="corona">
                  <img
                    src="/images/productDetailPage/corona.png"
                    alt="corona"
                  />
                </div>
              </div>
            </div>
            <div className="detailImg">
              {originalImg.map((e, i) => {
                return (
                  <div className="productImg" key={i}>
                    <img src={e.image} alt="productImg" />
                  </div>
                );
              })}
            </div>
            <PolicyBox noticeNum={noticeNum} setNoticeNum={setNoticeNum} />
          </div>
        </section>
        <section className="sidebarArea">
          <div className="sideHeading">
            <div className="subCateName">
              {data.subcate_name?.toUpperCase()}
            </div>
            <div className="productName">{data.eng_name?.toUpperCase()}</div>
            <div className="productPrice">
              {data.sale_rate ? (
                <Price sale={data.sale_rate} price={data.price} />
              ) : (
                `₩ ` + toComma(priceObject(false, 1))
              )}
              <span className="shareIcon">
                <RiShareLine />
              </span>
            </div>
          </div>
          <div
            className="savedMoney"
            onMouseEnter={() => {
              setIsOpen(true);
            }}
            onMouseLeave={() => {
              setIsOpen(false);
            }}
          >
            <ul className="savedName">
              <li>적립금</li>
              <li className="beforeHover">회원등급별</li>
              <li className="beforeHover">추가적립금</li>
            </ul>
            <ul className="savedValue">
              <li>0.5% ({Math.round(data.price * 0.005) + ` P`})</li>
              <li className="beforeHover">PINK SILVER 기본적립금 +0.2%</li>
              <li className="beforeHover">PINK GOLD 기본적립금 +0.5%</li>
            </ul>
            <span>{!isOpen ? <BsChevronDown /> : <BsChevronUp />}</span>
          </div>
          <div className="sideInfo">
            * 주문 제작으로 만들어지는 상품으로 단순변심에 의한 교환 및 환불이
            불가합니다. 신중한 구매 부탁 드립니다.
          </div>
          <div className="quantityArea">
            <div className="quantityName">{data.eng_name?.toUpperCase()}</div>
            <div className="quantityBox">
              <div className="quantityBtn">
                <button
                  className="minus"
                  onClick={() => {
                    quantity <= 1
                      ? alert("최소 주문수량은 1개 입니다.")
                      : setQuantity(quantity - 1);
                  }}
                >
                  -
                </button>
                {quantity}
                <button
                  className="plus"
                  onClick={() => {
                    quantity >= 10
                      ? alert("최대 주문수량은 10개 입니다.")
                      : setQuantity(quantity + 1);
                  }}
                >
                  +
                </button>
              </div>
              <span>
                {`₩ ` +
                  (data.sale_rate
                    ? toComma(priceObject(true, quantity))
                    : toComma(priceObject(false, quantity)))}
              </span>
            </div>
          </div>
          <div className="totalArea">
            <span>TOTAL</span>
            <div>
              <span className="totalPrice">
                {`₩ ` +
                  (data.sale_rate
                    ? toComma(priceObject(true, quantity))
                    : toComma(priceObject(false, quantity)))}
              </span>
              <span className="totalQuantity">({quantity + `개`})</span>
            </div>
          </div>
          <div className="orderArea">
            <button className="orderBtn" style={pickColor(data.cate_name)}>
              바로 구매하기
            </button>
            <div className="btnBox">
              <button
                className="cartBtn"
                onClick={() => {
                  toCart();
                }}
              >
                장바구니 담기
              </button>
              <button
                className="wishBtn"
                onClick={() => {
                  navigate(`/category/${data.cate_name}`);
                }}
              >
                뒤로가기 <RiArrowGoBackFill />
              </button>
            </div>
          </div>
          <div className="withHappyArea">
            <div className="title">함께하면 좋은 상품!</div>
            <div className="happyArea">
              <div className="happyBox">
                <div className="happyBackground">
                  <span>
                    <img src="/images/productDetailPage/cat12.png" alt="cat" />
                  </span>
                </div>
                <div className="happyName">SUPER PRETTY CAT TOWER</div>
                <div className="happyPrice">₩ 55,000</div>
              </div>
              <div className="happyBox">
                <div className="happyBackground">
                  <span>
                    <img src="/images/productDetailPage/cat13.png" alt="cat" />
                  </span>
                </div>
                <div className="happyName">LUXURIOUS CAT CUSHION</div>
                <div className="happyPrice">₩ 120,000</div>
              </div>
            </div>
          </div>
        </section>
        <TopBottom />
      </div>
      {ad && data.quantity <= 999 ? (
        <PopUp
          setAd={setAd}
          title="Hurry Up!"
          subtitle="수량이 얼마 남지 않았어요."
        />
      ) : null}
    </div>
  );
};

export default ProductDetail;

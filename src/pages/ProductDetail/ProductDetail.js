import React, { useState, useEffect } from "react";
import { Slider } from "./compo/slider";

import "./ProductDetail.scss";

const ProductDetail = () => {
  useEffect(() => {
    fetch(`http://localhost:8000/product/9`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(res => res.json())
      .then(res => {
        setOriginalSize(res.length);
        setData(res);
        setImgList(
          res.map(e => {
            return e.url;
          })
        );
        setOriginalImg(
          res.map(e => {
            return e.url;
          })
        );
      });
  }, []);

  const [data, setData] = useState([]);
  const [imgList, setImgList] = useState([]);
  const [originalImg, setOriginalImg] = useState([]);
  const [originalSize, setOriginalSize] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [addCart, setAddCart] = useState(false);

  const priceObject = (isSale, quantity) => {
    if (isSale) {
      return Math.floor(
        data[0].price * (1 - data[0].sale_rate / 100) * quantity
      )
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } else {
      return Math.floor(data[0].price * quantity)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  };

  const toCart = () => {
    // fetch(`http://localhost:8000/cart`, {
    //   method: "POST",
    //   mode: "cors",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     product_id: data[0].product_id,
    //     cart_quantity: quantity,
    //   })
    //     .then(res => res.json)
    //     .then(res => setAddCart(res.result)),
    // });
    setAddCart(true);
  };

  return (
    <div className="ProductDetail">
      <div className="detailArea">
        {addCart ? (
          <ViewCart cate={data[0].cate_name} setAddCart={setAddCart} />
        ) : null}
        <div className="mainArea">
          {data[0] && data[0].is_new ? <NewTag /> : null}
          <Slider
            imgList={imgList}
            setImgList={setImgList}
            originalImg={originalImg}
            originalSize={originalSize}
          />
        </div>
        <div className="sidebarArea">
          <div className="sideHeading">
            <div className="subCateName">
              {data[0] && data[0].subcate_name.toUpperCase()}
            </div>
            <div className="productName">
              {data[0] && data[0].eng_name.toUpperCase()}
            </div>
            <div className="productPrice">
              {data[0] && data[0].sale_rate ? (
                <Price sale={data[0].sale_rate} price={data[0].price} />
              ) : (
                `₩ ` + (data[0] && priceObject(false, 1))
              )}
              <span className="shareIcon">
                <img src="/images/shareIcon.png" alt="shareIcon" />
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
              <li>
                0.5% ({data[0] && Math.floor(data[0].price * 0.005) + ` P`}
                )&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </li>
              <li className="beforeHover">PINK SILVER 기본적립금 +0.2%</li>
              <li className="beforeHover">PINK GOLD 기본적립금 +0.5%</li>
            </ul>
            <span>
              <img
                src={!isOpen ? "/images/open.png" : "/images/close.png"}
                alt="open"
              />
            </span>
          </div>
          <div className="sideInfo">
            * 주문 제작으로 만들어지는 상품으로 단순변심에 의한 교환 및 환불이
            불가합니다. 신중한 구매 부탁 드립니다.
          </div>
          <div className="quantityArea">
            <div className="quantityName">
              {data[0] && data[0].eng_name.toUpperCase()}
            </div>
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
                  (data[0] && data[0].sale_rate
                    ? priceObject(true, quantity)
                    : data[0] && priceObject(false, quantity))}
              </span>
            </div>
          </div>
          <div className="totalArea">
            <span>TOTAL</span>
            <div>
              <span className="totalPrice">
                {`₩ ` +
                  (data[0] && data[0].sale_rate
                    ? priceObject(true, quantity)
                    : data[0] && priceObject(false, quantity))}
              </span>
              <span className="totalQuantity">({quantity + `개`})</span>
            </div>
          </div>
          <div className="orderArea">
            <button
              className="orderBtn"
              style={data[0] && pickColor(data[0].cate_name)}
            >
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
              <button className="wishBtn">위시리스트 담기</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const NewTag = () => {
  return (
    <div className="newBox">
      <img src="/images/new.png" alt="newtag" />
    </div>
  );
};

const Price = ({ sale, price }) => {
  return (
    <div className="priceBox">
      <span className="afterPrice">
        {`₩ ` +
          Math.floor(price * (1 - sale / 100))
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
      </span>
      <span className="beforePrice">
        {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
      </span>
      <span className="saleRate">{sale}%</span>
    </div>
  );
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

const ViewCart = ({ cate, setAddCart }) => {
  return (
    <div className="cartArea">
      <div className="cartHead" style={pickColor(cate)}>
        <span>장바구니 담기</span>
        <span
          onClick={() => {
            setAddCart(false);
          }}
        >
          X
        </span>
      </div>
      <div className="cartMid">
        <img src="/images/cart.png" alt="cart" />
        <div>장바구니에 상품이 정상적으로 담겼습니다.</div>
      </div>
      <div className="cartBottom">
        <button
          onClick={() => {
            setAddCart(false);
          }}
        >
          쇼핑 계속하기
        </button>
        <button
          onClick={() => {
            setAddCart(false);
          }}
        >
          장바구니 이동
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;

// - ▪️ WETOWN & STORE는 WE ENTERTAINMENT 공식 온라인 스토어입니다.
// - ▪️ WETOWN & STORE는 콘텐츠 저작권법에 따라 보호받으며, 무단복제 및 도용을 금지합니다
// - ▪️ WETOWN & STORE는 음반 판매 수량은 🎼차트와 ⚜️차트에 반영됩니다.

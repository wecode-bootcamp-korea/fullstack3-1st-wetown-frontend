import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Slider } from "./compo/slider";
import { PolicyBox } from "./compo/PolicyBox";
import { ViewCart } from "./compo/ViewCart";
import { NewTag, PopUp, Price, TopBottom } from "./compo/MiniCopo";
import ScrollToTop from "../../components/ScrollToTop";
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
  const [moving, setMoving] = useState(false);

  useEffect(() => {
    const adTimer = setTimeout(() => {
      setAd(true);
    }, 2000); // 왜 3초?

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
        const img = res.map(e => {
          return e.url;
        });
        const newImg = [...img, ...img];
        setImgList(newImg);
        setX(-(parseInt(newImg.length / 2, 10) * 600));
        setOriginalImg(
          res.map(e => {
            return e.url;
          })
        );
      });

    return () => {
      clearTimeout(adTimer);
    };
  }, [params.product]);

  const priceObject = (isSale, quantity) => {
    if (isSale) {
      return Math.round(
        data[0].price * (1 - data[0].sale_rate / 100) * quantity
      );
    } else {
      return Math.round(data[0].price * quantity);
    }
  };

  const toCart = () => {
    fetch(`${process.env.REACT_APP_BASE_URL}/cart`, {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: userId,
        product_id: data[0].id,
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

  const goLeft = () => {
    if (moving) return;
    setX(prevX => prevX + 600);
    setMoving(true);
    setTimeout(() => {
      const lastImg = imgList.pop();
      setImgList([lastImg, ...imgList]);
      setX(prevX => prevX - 600);
      setMoving(false);
    }, 500);
  };

  const goRight = () => {
    if (moving) return;
    setX(prevX => prevX - 600);
    setMoving(true);
    setTimeout(() => {
      const lastImg = imgList.shift();
      setImgList([...imgList, lastImg]);
      setX(prevX => prevX + 600);
      setMoving(false);
    }, 500);
  };

  return (
    <div className="ProductDetail">
      <ScrollToTop />
      <div className="detailArea">
        {addCart ? (
          <ViewCart
            cate={data[0].cate_name}
            setAddCart={setAddCart}
            navigate={navigate}
          />
        ) : null}
        <section className="mainArea">
          {data[0] && data[0].is_new ? <NewTag /> : null}
          <div className="slideContainer">
            <div className="dumy" />
            <div className="slideBackground">
              <div className="slideBox">
                {imgList.map((e, i) => {
                  return (
                    <div
                      className="slideList"
                      key={i}
                      style={{ transform: `translateX(${x}px)` }}
                    >
                      <img src={e} alt="slideImg" />
                    </div>
                  );
                })}
              </div>
              {/* <div className="dot">
        {originalImg.map((e, i) => {
          return <DotSlide key={i} num={i} />;
        })}
      </div> */}
              <button id="goLeft" onClick={goLeft} />
              <button id="goRight" onClick={goRight} />
            </div>

            {/* {imgList && (
              <Slider
                imgList={imgList}
                setImgList={setImgList}
                originalImg={originalImg}
                originalSize={originalSize}
              />
            )} */}
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
                  <img src="/images/ad.png" alt="ad" />
                </div>
                <div className="corona">
                  <img src="/images/corona.png" alt="corona" />
                </div>
              </div>
            </div>
            <div className="detailImg">
              {originalImg.map((e, i) => {
                return (
                  <div className="productImg" key={i}>
                    <img src={e} alt="productImg" />
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
              {data[0] && data[0].subcate_name.toUpperCase()}
            </div>
            <div className="productName">
              {data[0] && data[0].eng_name.toUpperCase()}
            </div>
            <div className="productPrice">
              {data[0] && data[0].sale_rate ? (
                <Price sale={data[0].sale_rate} price={data[0].price} />
              ) : (
                `₩ ` + (data[0] && toComma(priceObject(false, 1)))
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
                0.5% ({data[0] && Math.round(data[0].price * 0.005) + ` P`})
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
                    ? toComma(priceObject(true, quantity))
                    : data[0] && toComma(priceObject(false, quantity)))}
              </span>
            </div>
          </div>
          <div className="totalArea">
            <span>TOTAL</span>
            <div>
              <span className="totalPrice">
                {`₩ ` +
                  (data[0] && data[0].sale_rate
                    ? toComma(priceObject(true, quantity))
                    : data[0] && toComma(priceObject(false, quantity)))}
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
        </section>
        <TopBottom />
        {ad && data[0].quantity <= 10 ? <PopUp setAd={setAd} /> : null}
      </div>
    </div>
  );
};

export default ProductDetail;

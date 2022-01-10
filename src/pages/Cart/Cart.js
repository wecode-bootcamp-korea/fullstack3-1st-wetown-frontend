import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HeaderNav from "../../components/HeaderNav/HeaderNav";
import Footer from "../../components/Footer/Footer";
import "./Cart.scss";

const Cart = () => {
  const [data, setData] = useState([]);
  const [deleteOk, setDeleteOk] = useState(1);
  const userId = localStorage.getItem("token");
  const [productQuantity, setProductQuantity] = useState([]);

  useEffect(() => {
    async function fetchData() {
      await fetch(`http://localhost:8000/cart/list`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: userId,
        }),
      })
        .then(res => res.json())
        .then(res => {
          setData(res.result);
          setProductQuantity(
            res.result.map((e, i) => {
              return e.quantity;
            })
          );
        });
    }
    setTimeout(() => {
      fetchData();
    }, 300);
  }, [deleteOk]);

  const totalPrice = () => {
    let result = 0;
    let total = data.map((e, i) => {
      return Math.round(e.price * productQuantity[i]);
    });
    for (let i = 0; i < total.length; i++) {
      result += total[i];
    }
    return result;
  };

  const salePrice = () => {
    let result = 0;
    let total = data.map((e, i) => {
      return Math.round(e.price * (e.sale_rate / 100) * productQuantity[i]);
    });
    for (let i = 0; i < total.length; i++) {
      result += total[i];
    }
    return result;
  };

  const deleteCart = async product_id => {
    await fetch(`http://localhost:8000/cart`, {
      method: "delete",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: userId,
        product_id: product_id,
      }),
    }).then(() => {
      setDeleteOk(deleteOk + 1);
    });
  };
  return (
    <div className="Cart">
      <HeaderNav />
      <div className="mainArea">
        <div className="title">Cart</div>
        <div className="product">
          <div className="productField">
            <div>상품정보</div>
            <div>수량</div>
            <div>주문금액</div>
            <div>선택</div>
          </div>
          <div className="cartBox">
            {data.map((e, i) => {
              return (
                <CartList
                  key={i}
                  img={data[i].url}
                  name={data[i].eng_name}
                  price={data[i].price}
                  sale={data[i].sale_rate}
                  product_id={data[i].product_id}
                  cate={data[i].cate_name}
                  deleteCart={deleteCart}
                  index={i}
                  productQuantity={productQuantity}
                  setProductQuantity={setProductQuantity}
                />
              );
            })}
          </div>
          <div className="notice">
            장바구니에 담긴 상품은 30일 동안 보관됩니다.
          </div>
          <div className="totalArea">
            <div className="totalValue">
              <div>
                {`₩ ` +
                  totalPrice()
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                <div className="allTotalPrice">총 상품금액</div>
              </div>
              <div>+</div>
              <div>
                {`₩ ` + 0} <div className="deliveryPrice">배송비</div>
              </div>
              <div>-</div>
              <div>
                {`₩ ` +
                  salePrice()
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                <div className="salePrice">할인금액</div>
              </div>
              <div>=</div>
              <div style={{ color: "rgb(233, 52, 52)" }}>
                {`₩ ` +
                  (totalPrice() - salePrice())
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                <div className="expectPrice" style={{ color: "black" }}>
                  결제예정금액
                </div>
              </div>
            </div>
          </div>
          <div className="btnBox">
            <button className="orderBtn">전체상품 주문</button>
            <button>선택상품 주문</button>
            <button>🛍️ 선택상품 선물</button>
          </div>
          <div className="topBottom">
            <span
              className="top"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <img src="/images/totop.png" alt="top" />
            </span>
            <span
              className="bottom"
              onClick={() => {
                window.scrollTo({ top: 10000, behavior: "smooth" });
              }}
            >
              <img src="/images/totop.png" alt="bottom" />
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const CartList = ({
  img,
  name,
  price,
  sale,
  deleteCart,
  product_id,
  cate,
  productQuantity,
  setProductQuantity,
  index,
}) => {
  // const [productQuantity, setProductQuantity] = useState(quantity);

  return (
    <div className="productDetail">
      <div className="dot">◾</div>
      <div className="productImg">
        <Link to={`/category/${cate}/product/${product_id}`}>
          <img src={img} alt="이미지" />
        </Link>
      </div>
      <div className="productName">
        <div className="cateName">{cate.toUpperCase()}</div>
        <div className="name">{name.toUpperCase()}</div>
      </div>

      <div className="productQuantity">
        <button
          className="minus"
          onClick={() => {
            const copy = [...productQuantity];
            copy[index] -= 1;
            productQuantity[index] <= 1
              ? alert("최소 주문수량은 1개 입니다.")
              : setProductQuantity(copy);
          }}
        >
          -
        </button>
        {productQuantity[index]}
        <button
          className="plus"
          onClick={() => {
            const copy = [...productQuantity];
            copy[index] += 1;
            productQuantity[index] >= 10
              ? alert("최대 주문수량은 10개 입니다.")
              : setProductQuantity(copy);
          }}
        >
          +
        </button>
      </div>
      <div className="productPrice" style={{ fontWeight: "bold" }}>
        {sale ? (
          <Price price={price} sale={sale} quantity={productQuantity[index]} />
        ) : (
          `₩ ` +
          Math.round(price * productQuantity[index])
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        )}
      </div>
      <div className="prodictSelect">
        <button
          onClick={() => {
            deleteCart(product_id);
          }}
        >
          삭제
        </button>
      </div>
    </div>
  );
};

const Price = ({ sale, price, quantity }) => {
  return (
    <div className="priceBox">
      <span className="afterPrice">
        {`₩ ` +
          Math.round(price * (1 - sale / 100) * quantity)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
      </span>
      <span className="beforePrice">
        {(price * quantity).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
      </span>
      <span className="saleRate">{sale}%</span>
    </div>
  );
};

export default Cart;

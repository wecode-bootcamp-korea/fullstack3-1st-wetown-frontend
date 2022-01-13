import React, { useState, useEffect } from "react";
import { CartList } from "../ProductDetail/compo/CartList";
import { TopBottom } from "../ProductDetail/compo/MiniCopo";
import { PopUp } from "../ProductDetail/compo/MiniCopo";
import "./Cart.scss";

const Cart = () => {
  const [data, setData] = useState([]);
  const [deleteOk, setDeleteOk] = useState(1);
  const userId = localStorage.getItem("token");
  const [productQuantity, setProductQuantity] = useState([]);
  const [ad, setAd] = useState(false);

  useEffect(() => {
    const adTimer = setTimeout(() => {
      setAd(true);
    }, 1000);
    return () => {
      clearTimeout(adTimer);
    };
  }, []);

  useEffect(() => {
    function fetchData() {
      fetch(`${process.env.REACT_APP_BASE_URL}/cart/list`, {
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
    }, 100);
  }, [deleteOk, userId]);

  const soldCompletion = () => {
    fetch(`${process.env.REACT_APP_BASE_URL}/cart/sale-completion`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: userId,
        product_id: data.map((e, i) => {
          return e.product_id;
        }),
        quantity: productQuantity,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.message === "구매완료") {
          alert(`구매가 완료되었습니다. 좋은하루 보내세요.`);
        }
        setDeleteOk(deleteOk + 1);
      });
  };

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

  const toComma = price => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const deleteCart = product_id => {
    fetch(`${process.env.REACT_APP_BASE_URL}/cart`, {
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
      <div className="mainArea">
        <div className="title">Cart</div>
        <div className="product">
          <section className="productField">
            <div>상품정보</div>
            <div>수량</div>
            <div>주문금액</div>
            <div>선택</div>
          </section>
          <section className="cartBox">
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
          </section>
          <section className="notice">
            장바구니에 담긴 상품은 30일 동안 보관됩니다.
          </section>
          <section className="totalArea">
            <div className="totalValue">
              <div>
                {`₩ ` + toComma(totalPrice())}
                <div className="allTotalPrice">총 상품금액</div>
              </div>
              <div>+</div>
              <div>
                {`₩ ` + 0} <div className="deliveryPrice">배송비</div>
              </div>
              <div>-</div>
              <div>
                {`₩ ` + toComma(salePrice())}
                <div className="salePrice">할인금액</div>
              </div>
              <div>=</div>
              <div style={{ color: "rgb(233, 52, 52)" }}>
                {`₩ ` + toComma(totalPrice() - salePrice())}
                <div className="expectPrice" style={{ color: "black" }}>
                  결제예정금액
                </div>
              </div>
            </div>
          </section>
          <section className="btnBox">
            <button className="orderBtn" onClick={soldCompletion}>
              전체상품 주문
            </button>
            <button>선택상품 주문</button>
            <button>🛍️ 선택상품 선물</button>
          </section>
        </div>
        <TopBottom />
      </div>
      {ad && data[0] ? (
        <PopUp
          setAd={setAd}
          title="Click Button!"
          subtitle="지금 구매하지않으면 다음은 없어요~"
        />
      ) : null}
    </div>
  );
};
export default Cart;

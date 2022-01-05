import React, { useState } from "react";
import "./Cart.scss";

const Cart = () => {
  const dummy = [
    {
      eng_name: "abcde",
      quantity: 4,
      price: 38000,
      url: "/images/shareIcon.png",
      sale_rate: null,
    },
    {
      eng_name: "2eqwr332",
      quantity: 3,
      price: 45000,
      url: "/images/shareIcon.png",
      sale_rate: 20,
    },
    {
      eng_name: "2eqwr332",
      quantity: 6,
      price: 45000,
      url: "/images/shareIcon.png",
      sale_rate: 20,
    },
    {
      eng_name: "2eqwr332",
      quantity: 5,
      price: 45000,
      url: "/images/shareIcon.png",
      sale_rate: 20,
    },
    {
      eng_name: "2eqwr332",
      quantity: 2,
      price: 45000,
      url: "/images/shareIcon.png",
      sale_rate: 20,
    },
  ];

  const total = [];
  const [x, setX] = useState(false);

  return (
    <div className="Cart">
      <div className="title">Cart</div>
      <div className="product">
        <div className="productField">
          <div>상품정보</div>
          <div>수량</div>
          <div>주문금액</div>
          <div>선택</div>
        </div>
        <div className="cartBox">
          {dummy.map((e, i) => {
            return (
              <CartList
                key={i}
                img={dummy[i].url}
                name={dummy[i].eng_name}
                quantity={dummy[i].quantity}
                price={dummy[i].price}
                sale={dummy[i].sale_rate}
                total={total}
                x={x}
                setX={setX}
              />
            );
          })}
        </div>
        {total}
      </div>
    </div>
  );
};

const CartList = ({ img, name, quantity, price, sale = 1, total, x, setX }) => {
  const [productQuantity, setProductQuantity] = useState(quantity);
  total.push(price * quantity * (1 - sale / 100));
  const a = new Set(total);
  return (
    <div className="productDetail">
      <div className="dot">◾</div>
      <div className="productImg">
        <img src={img} alt="이미지" />
      </div>
      <div className="productName">{name}</div>
      <div className="productQuantity">
        <button
          className="minus"
          onClick={() => {
            productQuantity <= 1
              ? alert("최소 주문수량은 1개 입니다.")
              : setProductQuantity(productQuantity - 1);
          }}
        >
          -
        </button>
        {productQuantity}
        <button
          className="plus"
          onClick={() => {
            productQuantity >= 10
              ? alert("최대 주문수량은 10개 입니다.")
              : setProductQuantity(productQuantity + 1);
          }}
        >
          +
        </button>
      </div>
      <div className="productPrice" style={{ fontWeight: "bold" }}>
        {sale ? (
          <Price
            price={price}
            sale={sale}
            quantity={productQuantity}
            total={total}
          />
        ) : (
          `₩ ` +
          Math.round(price * productQuantity)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        )}
      </div>
      <div className="prodictSelect">
        <button>삭제</button>
      </div>
    </div>
  );
};

const Price = ({ sale, price, quantity, total }) => {
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

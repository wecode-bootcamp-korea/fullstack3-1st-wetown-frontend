import { Link } from "react-router-dom";
import { React, useEffect } from "react";

const ProductCard = props => {
  const kor_currency = props.data.price
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const dc_currency =
    props.data.price - props.data.price * (0.01 * props.data.sale_rate);
  const dc_kor_currency = Math.round(dc_currency)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  // const AddToCart = id => {
  //   let getStatus = 0;
  //   useEffect(() => {
  //     fetch("http://localhost:8000/cart", {
  //       method: "POST",
  //       mode: "cors",
  //       headers: {
  //         "content-type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         product_id: id,
  //       }),
  //     })
  //       .then(function (res) {
  //         getStatus = res.status;
  //         return res.json();
  //       })
  //       .then(data => {
  //         if (getStatus === 400) {
  //           alert("로그인 후 이용해주세요.");
  //           console.log(data);
  //         }

  //         if (getStatus === 200) {
  //           alert("장바구니에 담겼습니다.");
  //           console.log(data);
  //         }
  //       });
  //   }, []);
  // };

  return (
    <li className="productCardList">
      <Link to={`/category/${props.data.cate_name}/product/${props.data.id}`}>
        {props.data.is_new ? (
          <section className="isNew">new</section>
        ) : (
          <section></section>
        )}
        <img class="listImg" src={props.data.url} alt={props.data.eng_name} />
      </Link>
      <section className="productDescription">
        <p className="cateName">{props.data.cate_name}</p>
        <section className="engName-cartIcon">
          <p className="engName">{props.data.eng_name}</p>
          <section className="cartIconSection">
            <img
              className="cartIcon"
              src="http://localhost:3000/images/outline_shopping_bag_black_24dp.png"
              alt="cart-icon"
              // onClick={AddToCart(props.data.id)}
            />
          </section>
        </section>
        <section className="priceInfo">
          {props.data.sale_rate ? (
            <span className="discountPrice">
              ₩ {dc_kor_currency}
              <span className="prices">₩ {kor_currency}</span>
              <span className="saleRate">{props.data.sale_rate}</span>
            </span>
          ) : (
            <span className="prices">₩ {kor_currency}</span>
          )}
        </section>
      </section>
    </li>
  );
};

export default ProductCard;

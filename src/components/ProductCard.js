import { Link } from "react-router-dom";
import { React } from "react";

const ProductCard = props => {
  const kor_currency = props.data.price
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const dc_currency =
    props.data.price - props.data.price * (0.01 * props.data.sale_rate);
  const dc_kor_currency = Math.round(dc_currency)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <li className="productCardList">
      <Link to={`/category/${props.data.cate_name}/product/${props.data.id}`}>
        {props.data.is_new ? (
          <section className="isNew">new</section>
        ) : (
          <section />
        )}
        <section className="imgSection">
          <img
            className="listImg"
            src={props.data.url}
            alt={props.data.eng_name}
          />
        </section>
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
            />
          </section>
        </section>
        <section className="priceInfo">
          {props.data.sale_rate ? (
            <section className="discountPrice">
              <section className="dcPrices">
                <span className="afterDiscountPrice">₩ {dc_kor_currency}</span>
                <span className="price">₩ {kor_currency}</span>
              </section>
              <section>
                <span className="saleRate">{props.data.sale_rate}%</span>
              </section>
            </section>
          ) : (
            <span className="price">₩ {kor_currency}</span>
          )}
        </section>
      </section>
    </li>
  );
};

export default ProductCard;

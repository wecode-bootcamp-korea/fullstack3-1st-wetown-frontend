import React from "react";

const ProductCard = props => {
  const korCurrency = props.data.price
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return (
    <li className="productCardList">
      <a href=" ">
        {props.data.is_new ? (
          <section className="isNew">new</section>
        ) : (
          <section></section>
        )}
        <img class="listImg" src={props.data.url} alt={props.data.eng_name} />
      </a>
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
        <p className="prices">₩ {korCurrency}</p>
      </section>
    </li>
  );
};

export default ProductCard;

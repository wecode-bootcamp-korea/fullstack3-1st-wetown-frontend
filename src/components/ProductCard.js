import React from "react";

const ProductCard = props => {
  return (
    <li className="productCardList">
      <a href=" ">
        <img src={props} alt={props} />
      </a>
    </li>
  );
};

export default ProductCard;

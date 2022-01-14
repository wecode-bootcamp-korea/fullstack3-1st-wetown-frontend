import { Price } from "./MiniComponents";
import { Link } from "react-router-dom";

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
      <div className="productSelect">
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

export { CartList };

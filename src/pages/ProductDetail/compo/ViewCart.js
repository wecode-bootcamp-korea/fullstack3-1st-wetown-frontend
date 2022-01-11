const ViewCart = ({ cate, setAddCart, navigate }) => {
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
            navigate(`/cart`);
          }}
        >
          장바구니 이동
        </button>
      </div>
    </div>
  );
};

export { ViewCart };

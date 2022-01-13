const NewTag = () => {
  return (
    <div className="newBox">
      <img src="/images/new.png" alt="newtag" />
    </div>
  );
};

const Price = ({ sale, price, quantity = 1 }) => {
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

const PopUp = ({ setAd, title, subtitle }) => {
  return (
    <div
      className="popUpBox"
      onClick={() => {
        setAd(false);
      }}
    >
      <div className="exit">x</div>
      <div className="background">
        <img src="/images/cat.png" alt="popup" />
      </div>
      <div className="hurryUP">
        <span className="title">{title}</span>
        <span className="subTitle">{subtitle}</span>
      </div>
    </div>
  );
};

const TopBottom = () => {
  return (
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
  );
};

export { NewTag, Price, PopUp, TopBottom };

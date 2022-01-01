import PropTypes from "prop-types";
import "./CircleButton.scss";

const CircleButton = ({ type, name, value, style, onClick }) => {
  return (
    <button
      type={type}
      name={name}
      className="CircleButton"
      value={value}
      style={style}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

CircleButton.defaultProps = {
  style: { width: "73px", height: "73px" },
};

CircleButton.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string,
  value: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func.isRequired,
};

export default CircleButton;

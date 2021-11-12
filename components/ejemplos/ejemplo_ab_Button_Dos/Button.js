import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

const Button = ({ children, buttonType, onClick }) => (
  <button onClick={onClick} className={buttonType}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  buttonType: PropTypes.oneOf(["primary", "secondary"]),
  onClick: PropTypes.func,
};

Button.defaultProps = {
  buttonType: "primary",
  onClick: undefined,
};

export default Button;

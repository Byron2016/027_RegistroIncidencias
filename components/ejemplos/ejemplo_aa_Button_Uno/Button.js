import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

const Button = ({ children }) => <button>{children}</button>;

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  children: "primary",
};

export default Button;

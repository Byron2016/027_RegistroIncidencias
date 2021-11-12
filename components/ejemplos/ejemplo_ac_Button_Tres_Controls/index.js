import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

/**
 * 01 - Componente principal para interacción del usuario
 */
//export const Button
export const Button = ({
  variant,
  primary,
  backgroundColor,
  size,
  label,
  ...props
}) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  return (
    <button
      type="button"
      className={["storybook-button", `storybook-button--${size}`, mode].join(
        " "
      )}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

//export default Button;

Button.propTypes = {
  variant: PropTypes.string,
  /**
   * p01 - ¿Es esta la principal llamada a la acción en la página?
   */
  primary: PropTypes.bool,
  /**
   * p02 - ¿Qué color de fondo usar?
   */
  backgroundColor: PropTypes.string,
  /**
   * p03 - ¿Qué tan grande debe ser el botón?
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * p04 - Contenido del botón
   */
  label: PropTypes.string.isRequired,
  /**
   * p05 - Controlador de clic opcional
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "medium",
  onClick: undefined,
};

// const Button = ({ children }) => <button>{children}</button>;

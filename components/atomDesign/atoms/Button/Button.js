import PropTypes from 'prop-types';
import './Button.css';
import classnames from 'classnames';

export const TYPES = ['primary', 'secondary', 'tertiary'];

const Button = ({ type, children, isBlock}) => (
  <button className={classnames('button', { 
    [`type-${type}`]: type, 
    "is-block": isBlock, 
  })}>
    { children }
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(TYPES),
  isBlock: PropTypes.bool,
};

Button.defaultProps = {
  children: "primary",
  type: TYPES[0],
  isBlock: true,
};

export default Button;

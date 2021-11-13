import PropTypes from 'prop-types';
import './Button.css';
import classnames from 'classnames';

export const TYPES = ['primary', 'secondary', 'tertiary'];

const Button = ({ type, children}) => (
  <button className={classnames('button', { [`type-${type}`]: type })}>{ children }</button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(TYPES),
};

Button.defaultProps = {
  children: "primary",
  type: TYPES[0],
};

export default Button;

import PropTypes from 'prop-types';
import './Button.css';
import classnames from 'classnames';

const Button = ({ type, children}) => (
  <button className={classnames('button', { [`type-${type}`]: type })}>{ children }</button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  children: "primary",
  type: PropTypes.oneOf['primary', 'secondary'],
};

export default Button;

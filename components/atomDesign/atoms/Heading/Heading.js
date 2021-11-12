import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Heading.css';

export const SIZES = ['xs', 'sm', 'md'];

const Heading = ({ children, color, size}) => (
  <h1 className={classnames(
    'heading', { 
      [`color-${color}`]: color,
      [`size-${size}`]: size 
    })}>{children}</h1>
);

Heading.prototypes = {
  children: PropTypes.node.isRequired,
   size: PropTypes.oneOf(['xs', 'sm', 'md']),
   color: PropTypes.oneOf(['primary']),
}

Heading.defaultProps = {
  children: "ContenidoDefault",
  size: SIZES[0],
  color: "default",
};

export default Heading;
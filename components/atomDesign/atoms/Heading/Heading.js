import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Heading.css';

const Heading = ({ children}) => (
  <heading className={classnames('heading')}>{children}</heading>
);

Heading.prototypes = {
  children: PropTypes.node.isRequired,
}

export default Heading;
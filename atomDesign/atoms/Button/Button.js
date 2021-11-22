import React from 'react'
import PropTypes from 'prop-types'
import styles from './Button.module.css'
import classnames from 'classnames'

export const TYPES = ['primary', 'secondary', 'tertiary']

const Button = ({ type, children, isBlock, onClick }) => (
  <button
    className={classnames(styles.button, {
      [styles[`type-${type}`]]: type,
      [styles['is-block']]: isBlock && type !== 'tertiary',
    })}
    onClick={onClick}
  >
    {children}
  </button>
)

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(TYPES),
  onClick: PropTypes.func,
  isBlock: PropTypes.bool,
}

Button.defaultProps = {
  children: 'primary',
  type: TYPES[0],
  isBlock: true,
  onClick: () => {},
}

export default Button

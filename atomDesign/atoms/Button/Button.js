import React from 'react'
import PropTypes from 'prop-types'
import styles from './Button.module.css'
import classnames from 'classnames'

export const TYPES = ['primary', 'secondary', 'tertiary']

const Button = ({ type, children, isBlock }) => (
  <button
    className={classnames(styles.button, {
      [styles[`type-${type}`]]: type,
      [styles['is-block']]: isBlock && type !== 'tertiary',
    })}
  >
    {children}
  </button>
)

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(TYPES),
  isBlock: PropTypes.bool,
}

Button.defaultProps = {
  children: 'primary',
  type: TYPES[0],
  isBlock: true,
}

export default Button

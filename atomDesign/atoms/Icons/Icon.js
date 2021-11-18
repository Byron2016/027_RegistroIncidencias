import React from 'react'
import PropTypes from 'prop-types'
import { mapType, mapSize } from './helpers'
import classNames from 'classnames'
import Picture from '../Picture'
import './Icon.css'

export const TYPES = ['arrowRight', 'angleDown']
export const SIZE = ['sm', 'md', 'lg', 'xl']

const Icon = ({ type, size, hasBackground }) => (
  <div
    className={classNames('icon', {
      'has-background': hasBackground,
    })}
    style={{ width: mapSize(size), height: mapSize(size) }}
  >
    <Picture src={mapType(type)} width={mapSize(size)} />
    {/* <img src={mapType(type)}></img> */}
  </div>
)

Icon.propTypes = {
  type: PropTypes.oneOf(TYPES),
  size: PropTypes.oneOf(SIZE),
  hasBackground: PropTypes.bool,
}

Icon.defaultProps = {
  size: SIZE[1],
  type: TYPES[0],
}

export default Icon

import React from 'react'
import PropTypes from 'prop-types'
import { mapType } from './helpers'

export const TYPES = ['arrowRight', 'angleDown']

const Icon = ({ type }) => (
  <div>
    <img src={mapType(type)}></img>
  </div>
)

Icon.propTypes = {
  type: PropTypes.oneOf(TYPES),
}

Icon.defaultProps = {
  type: TYPES[0],
}

export default Icon

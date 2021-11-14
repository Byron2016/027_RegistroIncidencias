import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'

const Product = ({ productName, productDescription, imageUrl, imageAlt }) => (
  <article className="product">
    <div className="image-container">
      <img src={imageUrl} alt={imageAlt} />
    </div>
    <div className="info-container">
      <h1>{productName}</h1>
      <p>{productDescription}</p>
    </div>
  </article>
)

Product.propTypes = {
  productName: PropTypes.node.isRequired,
  productDescription: PropTypes.string,
  imageUrl: PropTypes.string,
  imageAlt: PropTypes.string,
}

export default Product

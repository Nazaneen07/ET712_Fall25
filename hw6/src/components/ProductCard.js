import React from 'react';
import './ProductCard.css';

function ProductCard(props) {
  // Destructuring props to use them more conveniently
  const { name, image, price, inStock } = props;

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={name} />
      </div>
      <div className="product-details">
        <h2 className="product-name">{name}</h2>
        <p className="product-price">${price.toFixed(2)}</p>
        <p className={`availability ${inStock ? 'in-stock' : 'out-of-stock'}`}>
          {inStock ? 'In Stock' : 'Out of Stock'}
        </p>
      </div>
    </div>
  );
}

export default ProductCard;
// components/ProductListing.js
import React from 'react';
import ProductCard from './ProductCard';
import './ProductListing.css';

// Import Studio Ghibli images
import ghibli1 from '../images/ghibli1.png';
import ghibli2 from '../images/ghibli2.png';
import ghibli3 from '../images/ghibli3.png';
import ghibli4 from '../images/ghibli4.png';
import ghibli5 from '../images/ghibli5.png';
import ghibli6 from '../images/ghibli6.png';
import ghibli7 from '../images/ghibli7.png';
import ghibli8 from '../images/ghibli8.png';
import ghibli9 from '../images/ghibli9.png';
import ghibli10 from '../images/ghibli10.png';

function ProductListing() {
  // Array of 10 Studio Ghibli images with new names and prices
  const products = [
  { id: 1, name: "Totoro Plush", image: ghibli1, price: 25, inStock: true },
  { id: 2, name: "Ponyo lamp", image: ghibli2, price: 15, inStock: true },
  { id: 3, name: "Mei's Hat", image: ghibli3, price: 30, inStock: false },
  { id: 4, name: "Spirited Away Figurine", image: ghibli4, price: 45, inStock: true },
  { id: 5, name: "Ponyo Keychain", image: ghibli5, price: 10, inStock: true },
  { id: 6, name: "Kiki's delivery service Art Print", image: ghibli6, price: 20, inStock: false },
  { id: 7, name: "Ponyo Ramen Bowls", image: ghibli7, price: 35, inStock: true },
  { id: 8, name: "Duck Spirit Plush", image: ghibli8, price: 40, inStock: true },
  { id: 9, name: "Howl's Moving Castle Poster", image: ghibli9, price: 12, inStock: true },
  { id: 10, name: "Chihiro Sticker Pack", image: ghibli10, price: 8, inStock: true },
];


  return (
    <div className="product-listing-container">
      <h1>Studio Ghibli Collection</h1>
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            image={product.image}
            price={product.price}
            inStock={product.inStock}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductListing;
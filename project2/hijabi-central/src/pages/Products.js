import React, { useContext, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { StoreContext } from '../context/StoreContext';

const Products = () => {
  const {
    everydayHijabs,
    fancyHijabs,
    accessories,
    addToCart,
  } = useContext(StoreContext);

  const [category, setCategory] = useState('everyday');

  let productsToShow = [];

  if (category === 'everyday') productsToShow = everydayHijabs;
  if (category === 'fancy') productsToShow = fancyHijabs;
  if (category === 'accessories') productsToShow = accessories;

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>
        Our Products
      </h1>

      {/* Category Dropdown */}
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <label style={{ marginRight: '10px', fontWeight: 'bold' }}>
          Category:
        </label>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{ padding: '8px', borderRadius: '5px' }}
        >
          <option value="everyday">Everyday Hijabs</option>
          <option value="fancy">Fancy Hijabs</option>
          <option value="accessories">Accessories</option>
        </select>
      </div>

      {/* Products Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem',
        }}
      >
        {productsToShow.map((item) => (
          <ProductCard
            key={item.id}
            product={item}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
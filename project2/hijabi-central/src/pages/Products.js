import React, { useContext, useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { StoreContext } from '../context/StoreContext';

const Products = () => {
  const { hijabs, addToCart } = useContext(StoreContext);
  const [sortOption, setSortOption] = useState('default');
  const [paginated, setPaginated] = useState(hijabs);

  useEffect(() => {
    let sorted = [...hijabs];
    if(sortOption === 'price-low') sorted.sort((a,b)=>a.price-b.price);
    if(sortOption === 'price-high') sorted.sort((a,b)=>b.price-a.price);
    if(sortOption === 'name') sorted.sort((a,b)=>a.name.localeCompare(b.name));
    setPaginated(sorted);
  }, [sortOption, hijabs]);

  return (
    <div style={{padding:'2rem', maxWidth:'1200px', margin:'0 auto'}}>
      <h1 style={{textAlign:'center', marginBottom:'2rem'}}>Our Hijabs</h1>
      <div style={{textAlign:'center', marginBottom:'1.5rem'}}>
        <label>Sort by: </label>
        <select value={sortOption} onChange={e=>setSortOption(e.target.value)}>
          <option value="default">Featured</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="name">Name: A to Z</option>
        </select>
      </div>
      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(250px, 1fr))', gap:'1.5rem'}}>
        {paginated.map(item=><ProductCard key={item.id} product={item} addToCart={addToCart} />)}
      </div>
    </div>
  );
};

export default Products;

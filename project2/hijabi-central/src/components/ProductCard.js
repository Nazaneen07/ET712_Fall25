import React, { useState } from 'react';
import ModalWindow from './ModalWindow';

const ProductCard = ({ product, addToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAdd = () => {
    addToCart(product, quantity);
    setQuantity(1);
  };

  return (
    <div style={styles.card}>
      <img src={product.image} alt={product.name} style={styles.image} onClick={()=>setIsModalOpen(true)} />
      <h3>{product.name}</h3>
      <p>{product.shortDescription}</p>
      <p style={{fontWeight:'bold'}}>${product.price.toFixed(2)}</p>
      <div style={styles.actions}>
        <input type="number" min="1" value={quantity} onChange={(e)=>setQuantity(parseInt(e.target.value))} style={styles.input}/>
        <button onClick={handleAdd} style={styles.button}>Add to Cart</button>
      </div>
      {isModalOpen && <ModalWindow product={product} closeModal={()=>setIsModalOpen(false)} />}
    </div>
  );
};

const styles = {
  card: { border:'1px solid #ddd', padding:'1rem', borderRadius:'8px', textAlign:'center', background:'#fff' },
  image: { width:'100%', cursor:'pointer', borderRadius:'5px' },
  actions: { display:'flex', gap:'5px', justifyContent:'center', marginTop:'0.5rem' },
  input: { width:'50px', padding:'5px' },
  button: { background:'#6b8e6b', color:'#fff', border:'none', padding:'5px 10px', borderRadius:'5px', cursor:'pointer' },
};

export default ProductCard;

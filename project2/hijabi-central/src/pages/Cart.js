import React, { useContext } from 'react';
import { StoreContext } from '../context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart, clearCart } = useContext(StoreContext);
  const navigate = useNavigate();

  const subtotal = cartItems.reduce((acc, i)=>acc + i.price*i.quantity,0);
  const taxRate = 0.0816;
  const tax = subtotal*taxRate;
  const total = subtotal+tax;

  const handleCheckout = () => {
    clearCart();
    navigate('/thank-you');
  };

  return (
    <div style={{maxWidth:'1000px', margin:'0 auto', padding:'2rem'}}>
      <h1 style={{marginBottom:'1.5rem'}}>Shopping Cart</h1>
      {cartItems.length === 0 ? <p>Your cart is empty.</p> :
      <>
        <table style={{width:'100%', borderCollapse:'collapse', marginBottom:'1.5rem'}}>
          <thead>
            <tr>
              <th>Product</th><th>Price</th><th>Qty</th><th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map(item=>(
              <tr key={item.id}>
                <td style={{display:'flex',alignItems:'center',gap:'10px'}}>
                  <img src={item.image} alt={item.name} style={{width:'50px'}} />
                  {item.name}
                </td>
                <td>${item.price.toFixed(2)}</td>
                <td>
                  <input type="number" min="1" value={item.quantity} onChange={e=>updateQuantity(item.id,parseInt(e.target.value))}/>
                </td>
                <td>${(item.price*item.quantity).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{textAlign:'right'}}>
          <p>Subtotal: ${subtotal.toFixed(2)}</p>
          <p>Tax (8.16%): ${tax.toFixed(2)}</p>
          <h3>Total: ${total.toFixed(2)}</h3>
          <button onClick={handleCheckout} style={{padding:'0.5rem 1rem', background:'#6b8e6b', color:'#fff', border:'none', borderRadius:'5px', cursor:'pointer'}}>Checkout</button>
        </div>
      </>
      }
    </div>
  );
};

export default Cart;

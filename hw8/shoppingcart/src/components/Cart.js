import React from 'react';
import '../App.css'


const Cart = ({cart, removeFromCart})=>{
  return(
    <section className='cartpage'>
      <h2 className='cartitle'>Your Ghibli Cart</h2>

      {cart.length === 0 && (
        <p className='emptymsg'>Your cart is as empty as the Catbus seats at night 🐾</p>
      )}

      {cart.map((item)=>(
        <div key={item.id} className='itemcart'>
          <img src={item.image} className='cartitemimg'/>
          <p className='cartitemname'>{item.name}</p>
          <p className='cartitemprice'>${item.price}</p>

          <button className='btncartremove' onClick={()=>removeFromCart(item.id)}>
            Remove
          </button>
        </div>
      ))}

      <p className='totalcart'>Total: ${cart.reduce((t, item)=> t + item.price, 0)}</p>
    </section>
  )
}

export default Cart;

import './App.css';
import React, {useState} from 'react';
import ProductList from './components/productlist';
import Cart from './components/cart';

function App() {

  const [cart, setCart] = useState([])

  // add stuff to cart
  const addToCart = (product) => {

    // check if product already in cart
    const exist = cart.find((item)=> item.id === product.id)

    if(exist){
      // increase qty by 1
      setCart(
        cart.map((item)=>{
          if(item.id === product.id){
            return {...item, qty: item.qty + 1}
          } else {
            return item
          }
        })
      )
    } else {
      // new item
      setCart([...cart, {...product, qty: 1}])
    }
  }

  // remove item by id
  const removeFromCart = (id)=>{
    setCart(cart.filter((item)=> item.id !== id))
  }

  return (
    <div className="App">
      <h1 className='apptitle'>Welcome to Nazaneen Baguaei's supermarket</h1>

      <ProductList addToCart={addToCart} />
      <Cart cart={cart} removeFromCart={removeFromCart} />
    </div>
  );
}

export default App;

import './App.css';
import React, {useState} from 'react';
import ProductList from './components/productlist';
import Cart from './components/cart';

function App() {
  const [cart, setCart] = useState([])

  {/** find if the product already existes in the cart */}
  const addToCart = ()=> {
    const exist = cart.find((item)=>item.id===ProductList.id)
    
    {/** if product exists, exist ==True, increase the quantity */}
    if(exist){
      setCart(
        cart.map((item) => {
          if(item.id === ProductList.id){
          return {...item, qty: item.qty + 1}
          }
          else
            return item 
        })
      )
    }
    /** if product does not exist, add new item */
    else{
      setCart([...cart, {...ProductList, qty: 1}])
    }
  }

  {/** remove item from cart */}
  const removeFromCart = (id)=>{
    setCart(cart.filter((item)=>item.id !==id))
  }
  return (
    <div className="App">
      <h1 className='apptitle'>Welcome to Nazaneen Baguaei's supermarket</h1>
      
      <ProductList addToCart = {addToCart} />
      <Cart cart = {cart} removeFromCart = {removeFromCart}/>

    </div>
  );
}

export default App;

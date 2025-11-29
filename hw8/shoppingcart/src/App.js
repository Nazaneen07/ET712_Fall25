import './App.css';
import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductList from './components/ProductList';
import Cart from './components/Cart';


function App(){


const [cart, setCart] = useState([])


// add item to cart (no duplicates)
const addToCart = (product)=>{
const exist = cart.find((item)=> item.id === product.id)


if(!exist){
setCart([...cart, {...product}])
}
}


const removeFromCart = (id)=>{
setCart(cart.filter((item)=> item.id !== id))
}


return(
<Router>
<nav className="navbar">
<Link to="/" className='navtitle'>🌿 Ghibli Market</Link>
<Link to="/cart" className='navcart'>Cart ({cart.length})</Link>
</nav>


<Routes>
<Route path="/" element={<ProductList addToCart={addToCart} />} />
<Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
</Routes>
</Router>
)
}


export default App;
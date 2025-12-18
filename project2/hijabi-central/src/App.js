import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import About from './pages/About';
import Contact from './pages/Contact';
import ThankYou from './pages/ThankYou';
import { StoreContext } from './context/StoreContext';

function App() {
  const {
    cartItemCount,
    cartItems,
    updateQuantity,
    clearCart,
  } = useContext(StoreContext);

  return (
    <Router>
      <Navbar cartCount={cartItemCount} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />

        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              updateQuantity={updateQuantity}
              clearCart={clearCart}
            />
          }
        />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;

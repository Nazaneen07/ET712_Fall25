// src/context/StoreContext.js
import React, { createContext, useState, useEffect } from 'react';

// Import images
import EH1 from '../images/everyday-hijabs/eh1.png';
import EH2 from '../images/everyday-hijabs/eh2.png';
import EH3 from '../images/everyday-hijabs/eh3.png';
import EH4 from '../images/everyday-hijabs/eh4.png';
import EH5 from '../images/everyday-hijabs/eh5.png';
import EH6 from '../images/everyday-hijabs/eh6.png';
import EH7 from '../images/everyday-hijabs/eh7.png';
import EH8 from '../images/everyday-hijabs/eh8.png';
import EH9 from '../images/everyday-hijabs/eh9.png';

import FH1 from '../images/fancy-hijabs/fh1.png';
import FH2 from '../images/fancy-hijabs/fh2.png';
import FH3 from '../images/fancy-hijabs/fh3.png';
import FH4 from '../images/fancy-hijabs/fh4.png';
import FH5 from '../images/fancy-hijabs/fh5.png';
import FH6 from '../images/fancy-hijabs/fh6.png';
import FH7 from '../images/fancy-hijabs/fh7.png';
import FH8 from '../images/fancy-hijabs/fh8.png';
import FH9 from '../images/fancy-hijabs/fh9.png';

import ACC1 from '../images/accessories/acc1.png';
import ACC2 from '../images/accessories/acc2.png';
import ACC3 from '../images/accessories/acc3.png';
import ACC4 from '../images/accessories/acc4.png';
import ACC5 from '../images/accessories/acc5.png';
import ACC6 from '../images/accessories/acc6.png';
import ACC7 from '../images/accessories/acc7.png';
import ACC8 from '../images/accessories/acc8.png';
import ACC9 from '../images/accessories/acc9.png';

// Create context
export const StoreContext = createContext();

// Context Provider
export const StoreProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) setCartItems(JSON.parse(savedCart));
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, quantity = 1) => {
    setCartItems(prev => {
      const index = prev.findIndex(item => item.id === product.id);
      if (index >= 0) {
        const updated = [...prev];
        updated[index].quantity += quantity;
        return updated;
      }
      return [...prev, { ...product, quantity }];
    });
  };

  const updateQuantity = (productId, newQuantity) => {
    setCartItems(prev =>
      prev.map(item => (item.id === productId ? { ...item, quantity: newQuantity } : item))
    );
  };

  const removeFromCart = productId => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  };

  const cartItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // Products data
  const everydayHijabs = [
    { id: 1, name: 'Everyday Hijab 1', price: 15, image: EH1, shortDescription: 'Soft cotton hijab for daily wear.' },
    { id: 2, name: 'Everyday Hijab 2', price: 18, image: EH2, shortDescription: 'Comfortable and breathable.' },
    { id: 3, name: 'Everyday Hijab 3', price: 16, image: EH3, shortDescription: 'Lightweight and stylish.' },
    { id: 4, name: 'Everyday Hijab 4', price: 20, image: EH4, shortDescription: 'Classic neutral tones.' },
    { id: 5, name: 'Everyday Hijab 5', price: 14, image: EH5, shortDescription: 'Soft pastel colors.' },
    { id: 6, name: 'Everyday Hijab 6', price: 17, image: EH6, shortDescription: 'Smooth fabric, easy to style.' },
    { id: 7, name: 'Everyday Hijab 7', price: 19, image: EH7, shortDescription: 'Perfect for casual wear.' },
    { id: 8, name: 'Everyday Hijab 8', price: 15, image: EH8, shortDescription: 'Durable and comfortable.' },
    { id: 9, name: 'Everyday Hijab 9', price: 16, image: EH9, shortDescription: 'Soft cotton blend.' },
  ];

  const fancyHijabs = [
    { id: 101, name: 'Fancy Hijab 1', price: 35, image: FH1, shortDescription: 'Elegant fabric with shimmer.' },
    { id: 102, name: 'Fancy Hijab 2', price: 40, image: FH2, shortDescription: 'Perfect for special occasions.' },
    { id: 103, name: 'Fancy Hijab 3', price: 38, image: FH3, shortDescription: 'Luxury satin finish.' },
    { id: 104, name: 'Fancy Hijab 4', price: 42, image: FH4, shortDescription: 'Embellished with beads.' },
    { id: 105, name: 'Fancy Hijab 5', price: 37, image: FH5, shortDescription: 'Elegant pastel colors.' },
    { id: 106, name: 'Fancy Hijab 6', price: 39, image: FH6, shortDescription: 'Shiny chiffon fabric.' },
    { id: 107, name: 'Fancy Hijab 7', price: 36, image: FH7, shortDescription: 'Perfect for parties.' },
    { id: 108, name: 'Fancy Hijab 8', price: 41, image: FH8, shortDescription: 'High-quality silk touch.' },
    { id: 109, name: 'Fancy Hijab 9', price: 43, image: FH9, shortDescription: 'Delicate embroidery.' },
  ];

  const accessories = [
    { id: 201, name: 'Accessory 1', price: 5, image: ACC1, shortDescription: 'Hijab pin set.' },
    { id: 202, name: 'Accessory 2', price: 7, image: ACC2, shortDescription: 'Undercap for comfort.' },
    { id: 203, name: 'Accessory 3', price: 6, image: ACC3, shortDescription: 'Hijab magnet set.' },
    { id: 204, name: 'Accessory 4', price: 8, image: ACC4, shortDescription: 'Decorative brooch.' },
    { id: 205, name: 'Accessory 5', price: 6, image: ACC5, shortDescription: 'Smooth satin underscarf.' },
    { id: 206, name: 'Accessory 6', price: 9, image: ACC6, shortDescription: 'Hijab clips pack.' },
    { id: 207, name: 'Accessory 7', price: 5, image: ACC7, shortDescription: 'Simple pins for daily use.' },
    { id: 208, name: 'Accessory 8', price: 7, image: ACC8, shortDescription: 'Decorative hair pins.' },
    { id: 209, name: 'Accessory 9', price: 8, image: ACC9, shortDescription: 'Comfortable undercap.' },
  ];

  return (
    <StoreContext.Provider
      value={{
        everydayHijabs,
        fancyHijabs,
        accessories,
        cartItems,
        cartItemCount,
        addToCart,
        updateQuantity,
        removeFromCart,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

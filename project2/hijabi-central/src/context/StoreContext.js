// src/context/StoreContext.js
import React, { createContext, useState, useEffect } from 'react';

// Images
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

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Cart functions
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
      prev.map(item =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeFromCart = productId => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartItemCount = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  // Product data
  const everydayHijabs = [
  { id: 1, name: 'Everyday Hijab (Basic Black)', price: 15, image: EH1, shortDescription: 'Black, soft cotton hijab designed for everyday wear' },
  { id: 2, name: 'Everyday Hijab (Light Blue)', price: 18, image: EH2, shortDescription: 'Light blue, comfortable and breathable fabric' },
  { id: 3, name: 'Everyday Hijab (Sage Green)', price: 16, image: EH3, shortDescription: 'Sage green, lightweight with a modern look' },
  { id: 4, name: 'Everyday Hijab (Classic Orange)', price: 20, image: EH4, shortDescription: 'Classic orange, perfect for summer styling' },
  { id: 5, name: 'Everyday Hijab (Pastel Pink)', price: 14, image: EH5, shortDescription: 'Soft pastel pink for an effortless everyday look' },
  { id: 6, name: 'Everyday Hijab (Pretty Purple)', price: 17, image: EH6, shortDescription: 'Pretty purple, smooth fabric that is easy to style' },
  { id: 7, name: 'Everyday Hijab (Crimson Red)', price: 19, image: EH7, shortDescription: 'Crimson red, ideal for casual and daily wear' },
  { id: 8, name: 'Everyday Hijab (Pastel Yellow)', price: 15, image: EH8, shortDescription: 'Pastel yellow, durable and comfortable for all-day wear' },
  { id: 9, name: 'Everyday Hijab (Soft White)', price: 16, image: EH9, shortDescription: 'Soft white cotton-blend hijab with a clean finish' },
];


  const fancyHijabs = [
    { id: 101, name: '- Gris Souverain -', price: 35, image: FH1, shortDescription: 'Elegant fabric with shimmer.' },
    { id: 102, name: '- Royale Blush -', price: 40, image: FH2, shortDescription: 'Perfect for special occasions.' },
    { id: 103, name: '- Bleu Majesté -', price: 38, image: FH3, shortDescription: 'Luxury satin finish.' },
    { id: 104, name: '- Dusty Desert -', price: 42, image: FH4, shortDescription: 'Embellished with beads.' },
    { id: 105, name: '- Mint Éclat -', price: 37, image: FH5, shortDescription: 'Elegant pastel colors.' },
    { id: 106, name: '- Arabian Nights -', price: 39, image: FH6, shortDescription: 'Shiny chiffon fabric.' },
    { id: 107, name: '- Burjundy Noire -', price: 36, image: FH7, shortDescription: 'Perfect for parties.' },
    { id: 108, name: '- Iridesse -', price: 41, image: FH8, shortDescription: 'High-quality silk touch.' },
    { id: 109, name: '- Royal Safron -', price: 43, image: FH9, shortDescription: 'Delicate embroidery.' },
  ];

  const accessories = [
  { id: 201, name: 'Hijab Magnets', price: 5, image: ACC1, shortDescription: 'Set of 4' },
  { id: 202, name: 'Decorative Hijab Pins', price: 7, image: ACC2, shortDescription: 'Set of 12' },
  { id: 203, name: 'Essential Hijab Pin Set', price: 6, image: ACC3, shortDescription: 'Set of 50' },
  { id: 204, name: 'Hijab Brooch Pins', price: 8, image: ACC4, shortDescription: 'Set of 8' },
  { id: 205, name: 'Floral Hijab Pins', price: 6, image: ACC5, shortDescription: 'Set of 6' },
  { id: 206, name: 'Classic Hijab Pin Set', price: 9, image: ACC6, shortDescription: 'Set of 4' },
  { id: 207, name: 'Decorative Bow Hijab Pins', price: 5, image: ACC7, shortDescription: 'Set of 3' },
  { id: 208, name: 'Floral Hijab Pins', price: 7, image: ACC8, shortDescription: 'Set of 10' },
  { id: 209, name: 'Decorative Hijab Accessory Set', price: 8, image: ACC9, shortDescription: 'Set of 3' },
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
        clearCart,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

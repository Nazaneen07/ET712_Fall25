// src/context/StoreContext.js
import React, { createContext, useState, useEffect } from "react";
import productsData from "./productsData"; // our products file (imports images)

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // load saved cart
  useEffect(() => {
    const saved = localStorage.getItem("hijab_cart");
    if (saved) {
      try {
        setCartItems(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse cart", e);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("hijab_cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, quantity = 1) => {
    setCartItems((prev) => {
      const idx = prev.findIndex((p) => p.id === product.id);
      if (idx >= 0) {
        const updated = [...prev];
        updated[idx].quantity += quantity;
        return updated;
      }
      return [...prev, { ...product, quantity }];
    });
  };

  const updateQuantity = (productId, newQuantity) => {
    setCartItems((prev) =>
      prev.map((it) => (it.id === productId ? { ...it, quantity: newQuantity } : it))
    );
  };

  const removeFromCart = (productId) => {
    setCartItems((prev) => prev.filter((it) => it.id !== productId));
  };

  const clearCart = () => setCartItems([]);

  const cartItemCount = cartItems.reduce((s, it) => s + (it.quantity || 0), 0);

  return (
    <StoreContext.Provider
      value={{
        productsData,
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
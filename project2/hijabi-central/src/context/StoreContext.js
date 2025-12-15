import React, { createContext, useState, useEffect } from 'react';

// Sample hijab products
const hijabsData = [
  {
    id: 1,
    name: "Elegant Chiffon Hijab",
    price: 29.99,
    image: "/images/hijab1.jpg",
    shortDescription: "Soft chiffon in pastel tones",
    description: "This elegant chiffon hijab is lightweight, breathable, and perfect for any occasion.",
    features: ["Lightweight", "Soft texture", "One size fits all", "Available in multiple colors"]
  },
  {
    id: 2,
    name: "Luxury Satin Hijab",
    price: 39.99,
    image: "/images/hijab2.jpg",
    shortDescription: "Smooth satin with a subtle sheen",
    description: "Luxury satin hijab that adds a touch of elegance to your outfit.",
    features: ["Smooth finish", "Elegant shine", "Comfortable draping", "Premium material"]
  },
  {
    id: 3,
    name: "Cotton Everyday Hijab",
    price: 19.99,
    image: "/images/hijab3.jpg",
    shortDescription: "Soft cotton for daily wear",
    description: "Comfortable and breathable cotton hijab suitable for everyday use.",
    features: ["Breathable cotton", "Easy to style", "Durable fabric", "Machine washable"]
  }
];

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) setCartItems(JSON.parse(savedCart));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
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

  const updateQuantity = (productId, quantity) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const removeFromCart = (productId) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  };

  const clearCart = () => setCartItems([]);

  const cartItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <StoreContext.Provider value={{
      hijabs: hijabsData,
      cartItems,
      cartItemCount,
      addToCart,
      updateQuantity,
      removeFromCart,
      clearCart
    }}>
      {children}
    </StoreContext.Provider>
  );
};

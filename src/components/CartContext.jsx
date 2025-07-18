import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartCount, setCartCount] = useState(0);
  const [isCartVisible, setCartVisible] = useState(false);

  const addToCart = () => {
    setCartCount(prev => prev + 1);
    setCartVisible(true);
  };

  const closeCart = () => setCartVisible(false);

  return (
    <CartContext.Provider value={{ cartCount, isCartVisible, addToCart, closeCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
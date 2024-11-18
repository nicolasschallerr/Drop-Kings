import React, { useState } from "react";
import { cartContext } from "./cartContext";

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const productExists = cart.some((product) => product.id === item.id);
    if (!productExists) {
      setCart([...cart, item]);
    }
  };

  const delFromCart = (itemId) => {
    setCart(cart.filter((item) => item.id !== itemId));
  };

  const clearCart = () => setCart([]);

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <cartContext.Provider
      value={{ cart, addToCart, delFromCart, clearCart, getTotalPrice }}
    >
      {children}
    </cartContext.Provider>
  );
}

export default CartProvider;

import React, { useState } from "react";
import CartContext from "./CartContext";

export const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setProducts([...products, { ...item, quantity }]);
    } else {
      setProducts(
        products.map((product) => (product.id === item.id ? { ...product, quantity: product.quantity + quantity } : product))
      );
    }
  };

  const removeItem = (itemId) => setProducts(products.filter((el) => el.id !== itemId));

  const clear = () => setProducts([]);

  const isInCart = (id) => products.some((el) => el.id === id);

  const totalPrice = () => products.reduce((acc, item) => acc + item.quantity * item.price, 0);

  return (
    <CartContext.Provider value={{ products, removeItem, clear, addItem, isInCart, totalPrice }}>{children}</CartContext.Provider>
  );
};

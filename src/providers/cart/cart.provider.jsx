import React, { createContext, useState, useEffect } from "react";
import { addItemToCart, filterItemFromCart, getCartItemsCount, getCartTotal, removeItemFromCart } from "./cart.utils";

export const CartContext = createContext({
  hidden: true,
  toggleHidden: () => {},
  cartItems: [],
  addItem: () => {},
  removeItem: () => {},
  clearItemFromCart: () => {},
  cartItemsCount: 0,
  cartTotal: 0
});

// create cart provider that it´s going to wrap our app inside the index 
const CartProvider = ({ children }) => {
  const [hidden, setHidden] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const addItem = item => setCartItems(addItemToCart(cartItems, item));
  const removeItem = item => setCartItems(removeItemFromCart(cartItems, item));
  const clearItemFromCart = item => setCartItems(filterItemFromCart(cartItems, item));
  const toggleHidden = () => setHidden(!hidden);

  useEffect(() => {
    setCartItemsCount(getCartItemsCount(cartItems))
  }, [cartItems]);

  useEffect(() => {
    setCartTotal(getCartTotal(cartItems))
  }, [cartItems]);

  return (
    <CartContext.Provider
     value={{
       hidden,
       toggleHidden,
       cartItems,
       cartTotal,
       addItem,
       removeItem,
       clearItemFromCart,
       cartItemsCount
     }}>
      {children}
    </CartContext.Provider>
  )
};

export default CartProvider;
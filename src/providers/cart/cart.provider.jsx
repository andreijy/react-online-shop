import React, { createContext, useState, useEffect } from "react";

import {
  addItemToCart,
  removeItemFromCart,
  filterItemFromCart,
  getCartItemsCount,
  getCartPriceTotal,
} from "./cart.utils";

// * This can be inside the "contexts" folder
export const CartContext = createContext({
  hidden: true,
  toggleHidden: () => {},
  cartItems: [],
  addItem: () => {},
  removeItem: () => {},
  clearItemFromCart: () => {},
  cartItemsCount: 0,
  cartPriceTotal: 0,
});

const CartProvider = ({ children }) => {
  const [hidden, setHidden] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [cartPriceTotal, setCartPriceTotal] = useState(0);

  const toggleHidden = () => setHidden(!hidden);
  const addItem = (item) => setCartItems(addItemToCart(cartItems, item));
  const removeItem = (item) =>
    setCartItems(removeItemFromCart(cartItems, item));
  const clearItemFromCart = (item) =>
    setCartItems(filterItemFromCart(cartItems, item));

  useEffect(() => {
    setCartItemsCount(getCartItemsCount(cartItems));
    setCartPriceTotal(getCartPriceTotal(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        hidden,
        toggleHidden,
        cartItems,
        addItem,
        removeItem,
        clearItemFromCart,
        cartItemsCount,
        cartPriceTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  } else {
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
  }
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  if (cartItemToRemove.quantity === 0) {
    return cartItems;
  } else {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }
};

export const filterItemFromCart = (cartItems, item) =>
  cartItems.filter((cartItem) => cartItem.id !== item.id);

export const getCartItemsCount = (cartItems) =>
  cartItems.reduce(
    (accumulator, currentItem) => accumulator + currentItem.quantity,
    0
  );

export const getCartPriceTotal = (cartItems) =>
  cartItems.reduce(
    (accumulator, currentItem) =>
      accumulator + currentItem.quantity * currentItem.price,
    0
  );

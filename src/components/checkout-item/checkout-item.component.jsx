import React, { useContext } from "react";

import { CartContext } from "../../providers/cart/cart.provider";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem }) => {
  const { imageUrl, name, quantity, price } = cartItem;
  const { addItem, removeItem, clearItemFromCart } = useContext(CartContext);
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt={name} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className='price'>{price}</span>
      <div
        className='remove-button'
        onClick={() => clearItemFromCart(cartItem)}
      >
        &#10005;
      </div>
    </div>
  );
};

// const mapDispatchToProps = (dispatch) => ({
//   clearItemFromCart: (cartItem) => dispatch(clearItemFromCart(cartItem)),
// });

export default CheckoutItem;

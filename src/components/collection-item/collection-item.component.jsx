import React, { useContext } from "react";

import CustomButton from "../custom-button/custom-button.component";
import { CartContext } from "../../providers/cart/cart.provider";

import "./collection-item.styles.scss";

const CollectionItem = ({ item }) => {
  const { name, imageUrl, price } = item;
  const { addItem } = useContext(CartContext);

  return (
    <div className='collection-item'>
      <div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} isInverted>
        Add to cart
      </CustomButton>
    </div>
  );
};

// const mapDispatchToProps = (dispatch) => ({
//   addItem: (item) => dispatch(addItem(item)),
// });

export default CollectionItem;

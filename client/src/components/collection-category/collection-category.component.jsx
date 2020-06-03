import React from "react";
import { connect } from "react-redux";

import CollectionItem from "../collection-item/collection-item.component";
import { selectCollection } from "../../redux/shop/shop.selectors";

import "./collection-category.styles.scss";

const CollectionCategory = ({ collection: { title, items } }) => (
  <div className='collection-category'>
    <h2 className='title'>{title}</h2>
    <div className='items'>
      {items.map((item) => (
        <CollectionItem key={item.id} item={item} />
      ))}
    </div>
  </div>
);

// ownProps coming from Route built in passing parameters
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionCategory);

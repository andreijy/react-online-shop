import React from "react";

import CollectionItem from "../collection-item/collection-item.component";
import { selectCollection } from "../../redux/shop/shop.selectors";
import CollectionsContext from "../../contexts/collections/collections.context";

import "./collection-category.styles.scss";

const CollectionCategory = ({ match }) => (
  <CollectionsContext.Consumer>
    {(collections) => {
      const collection = collections[match.params.collectionId];
      const { title, items } = collection;
      return (
        <div className='collection-category'>
          <h2 className='title'>{title}</h2>
          <div className='items'>
            {items.map((item) => (
              <CollectionItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      );
    }}
  </CollectionsContext.Consumer>
);

// ownProps coming from Route built in passing parameters
// const mapStateToProps = (state, ownProps) => ({
//   collection: selectCollection(ownProps.match.params.collectionId)(state),
// });

export default CollectionCategory;

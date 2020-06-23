import React, { useContext } from "react";

import CollectionPreview from "../collection-preview/collection-preview.component";
import CollectionsContext from "../../contexts/collections/collections.context.js";

import "./collection-overview.styles.scss";

const CollectionOverview = () => {
  const collections = useContext(CollectionsContext);
  const collectionIntoArray = Object.keys(collections).map(
    (key) => collections[key]
  );
  return (
    <div className='collection-overview'>
      {collectionIntoArray.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default CollectionOverview;

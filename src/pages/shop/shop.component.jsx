import React from "react";
import { Route } from "react-router-dom";

import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import CollectionCategory from "../../components/collection-category/collection-category.component";

const ShopPage = ({ match }) => (
  <div>
    <Route exact path={`${match.path}`} component={CollectionOverview} />
    <Route
      path={`${match.path}/:collectionId`}
      component={CollectionCategory}
    />
  </div>
);

export default ShopPage;

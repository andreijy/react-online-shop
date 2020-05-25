import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import CollectionOverviewContainer from "../../components/collection-overview/collection-overview.container";
import CollectionCategoryContainer from "../../components/collection-category/collection-category.container";

import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

class ShopPage extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCollectionsStart());
  }

  render() {
    const { match } = this.props;
    return (
      <div>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionCategoryContainer}
        />
      </div>
    );
  }
}

//
// below if we want to explicitly declare mapDispatchToProps for updateCollections action
//
// const mapDispatchToProps = (dispatch) => ({
//   updateCollections: (collectionsMap) =>
//     dispatch(updateCollections(collectionsMap)),
// });

export default connect(null)(ShopPage);

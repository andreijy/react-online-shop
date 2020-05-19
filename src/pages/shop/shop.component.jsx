import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import CollectionCategory from "../../components/collection-category/collection-category.component";

import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";
import {
  selectIsColletionFetching,
  selectIsCollectionsLoaded,
} from "../../redux/shop/shop.selectors";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionCategoryWithSpinner = WithSpinner(CollectionCategory);

class ShopPage extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCollectionsStartAsync());
  }

  render() {
    const { match, isCollectionFetching, isCollectionsLoaded } = this.props;
    return (
      <div>
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverviewWithSpinner
              isLoading={isCollectionFetching}
              {...props}
            />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionCategoryWithSpinner
              isLoading={!isCollectionsLoaded}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsColletionFetching,
  isCollectionsLoaded: selectIsCollectionsLoaded,
});

//
// below if we want to explicitly declare mapDispatchToProps for updateCollections action
//
// const mapDispatchToProps = (dispatch) => ({
//   updateCollections: (collectionsMap) =>
//     dispatch(updateCollections(collectionsMap)),
// });

export default connect(mapStateToProps, null)(ShopPage);

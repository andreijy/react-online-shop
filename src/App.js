import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";

import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import CheckoutPage from "./pages/chekout/checkout.component";

import Header from "./components/header/header.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import CurrentUserContext from "./contexts/current-user/current-user.context";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: { id: snapShot.id, ...snapShot.data() },
          });
        });
      } else {
        // * userAuth is logged out with value as null
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    // TODO: add contact page
    // TODO: add catalogue page based on https://themes.gohugo.io/theme/meghna-hugo/
    return (
      <div>
        <CurrentUserContext.Provider value={this.state.currentUser}>
          <Header />
        </CurrentUserContext.Provider>
        <Switch>
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route
            exact
            path='/signin'
            render={() =>
              this.state.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
          <Route exact path='/' component={Homepage} />
        </Switch>
      </div>
    );
  }
}

export default App;

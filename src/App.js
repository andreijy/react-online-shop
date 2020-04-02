import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import Homepage from "./pages/homepage/homepage.component.jsx";

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route path='/shop/hats' component={HatsPage} />
        <Route path='/' component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;

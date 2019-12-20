import { Router, Scene } from "react-native-router-flux";
import React, { Component } from "react";

import Location from "./pages/Location";
import Jeju from "./pages/Jeju";
import Category from "./pages/Category";
import SignIn from "./pages/SignIn";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="signin" component={SignIn} title="SignIn" />
          <Scene key="location" component={Location} title="Location" />
          <Scene key="category" component={Category} title="Category" />
          <Scene key="jeju" component={Jeju} title="Jeju_Page" />
        </Scene>
      </Router>
    );
  }
}

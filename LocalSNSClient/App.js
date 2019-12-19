import { Router, Scene } from "react-native-router-flux";
import React, { Component } from "react";

import Location from "./pages/Location";
import Jeju from "./pages/Jeju";
import Category from "./pages/Category";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="location" component={Location} title="Location" />
          <Scene key="category" component={Category} title="Category" />
          <Scene key="jeju" component={Jeju} title="Jeju_Page" />
        </Scene>
      </Router>
    );
  }
}

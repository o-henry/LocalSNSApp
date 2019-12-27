import { Router, Scene } from "react-native-router-flux";
import React, { Component } from "react";

import Location from "./pages/Location";
import Jeju from "./pages/Jeju";
import Seoul from "./pages/Seoul";
import Category from "./pages/Category";
import SignIn from "./pages/SignIn";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="signin" component={SignIn} hideNavBar={1} />
          <Scene key="location" component={Location} hideNavBar={1} />
          <Scene key="category" component={Category} />
          <Scene key="jeju" component={Jeju} hideNavBar={1} />
          <Scene key="seoul" component={Seoul} title="Seoul_Page" />
        </Scene>
      </Router>
    );
  }
}

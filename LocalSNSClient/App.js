import { Router, Scene } from "react-native-router-flux";
import React, { Component } from "react";

import Location from "./pages/Location";
import Jeju from "./pages/Jeju";
import Seoul from "./pages/Seoul";
import Category from "./pages/Category";
import SignIn from "./pages/SignIn";
import Trend from "./pages/Trend";
import Navigation from "./pages/Navigation";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="signin" component={SignIn} hideNavBar={1} />
          <Scene key="location" component={Location} hideNavBar={1} />
          <Scene key="category" component={Category} hideNavBar={1} />
          <Scene key="trend" component={Trend} hideNavBar={1} />
          {/* <Scene key="recommend" component={Recommend} hideNavBar={1} /> */}
          <Scene key="navigation" component={Navigation} hideNavBar={1} />
          <Scene key="jeju" component={Jeju} hideNavBar={1} />
          <Scene key="seoul" component={Seoul} />
        </Scene>
      </Router>
    );
  }
}

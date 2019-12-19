import { Router, Scene } from "react-native-router-flux";
import React, { Component } from "react";

import Main from "./components/Main";
import Jeju from "./components/Jeju";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="Main" component={Main} title="Main_Page" />
          <Scene key="jeju" component={Jeju} title="Jeju_Page" />
        </Scene>
      </Router>
    );
  }
}

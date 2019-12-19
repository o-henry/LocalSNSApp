import { StyleSheet, Text, View, Alert } from "react-native";
import { Router, Scene } from "react-native-router-flux";
import React, { Component } from "react";
import axios from "axios";

import Loading from "./components/Loading";
import Main from "./components/Main";
import Jeju from "./components/Jeju";

export default class App extends Component {
  // state = {
  //   isLoading: true,
  //   location: []
  // };

  // getLocationData = async () => {
  //   try {
  //     await axios.get("http://localhost:4500/data/location").then(res => {
  //       console.log("Click res", res.data);
  //       this.setState({ location: res.data, isLoading: false });
  //     });
  //   } catch (err) {
  //     Alert.alert("Can't get any Data");
  //   }
  // };

  // componentDidMount() {
  //   this.getLocationData();
  // }

  render() {
    // const { location, isLoading } = this.state;
    // return isLoading ? (
    //   <Loading />
    // ) : (
    //   // <View style={styles.container}>
    //   //   {location.map((loca, key) => {
    //   //     return (
    //   //       <PrintLoca
    //   //         key={key}
    //   //         name={loca.location}
    //   //         count={loca.locationCount}
    //   //       />
    //   //     );
    //   //   })}
    //   // </View>
    //   <Main />
    // );
    // {
    //   location.map((loca, key) => {
    //     return (
    //       <Jeju key={key} name={loca.location} count={loca.locationCount} />
    //     );
    //   });
    // }
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

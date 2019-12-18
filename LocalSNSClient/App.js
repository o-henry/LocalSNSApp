import { StyleSheet, Text, View, Alert } from "react-native";
import React, { Component } from "react";
import axios from "axios";
import PrintLoca from "./components/PrintLoca";
import Loading from "./components/Loading";
import Main from "./components/Main";

export default class App extends Component {
  state = {
    isLoading: true,
    location: []
  };

  getLocationData = async () => {
    try {
      await axios.get("http://localhost:4500/data/location").then(res => {
        // console.log("res", res.data);
        this.setState({ location: res.data, isLoading: false });
      });
    } catch (err) {
      Alert.alert("Can't get any Data");
    }
  };

  componentDidMount() {
    this.getLocationData();
  }

  render() {
    const { location, isLoading } = this.state;
    return isLoading ? (
      <Loading />
    ) : (
      // <View style={styles.container}>
      //   {location.map((loca, key) => {
      //     return (
      //       <PrintLoca
      //         key={key}
      //         name={loca.location}
      //         count={loca.locationCount}
      //       />
      //     );
      //   })}
      // </View>
      <Main />
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

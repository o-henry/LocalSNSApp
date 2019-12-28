import React, { Component } from "react";
import axios from "axios";
import { StyleSheet, Button, Text, View, Alert } from "react-native";
import { Actions } from "react-native-router-flux";

export default class Category extends Component {
  state = {
    isLoading: true,
    location: []
  };

  getLocationData = async () => {
    try {
      await axios.get("http://localhost:4500/data/location").then(res => {
        this.setState({ location: res.data, isLoading: false });
      });
    } catch (err) {
      Alert.alert("Can't get any Data");
    }
  };

  getData = async () => {
    await this.getLocationData();
    const { location, isLoading } = this.state;
    Actions.jeju({
      location: location
    });
  };

  componenetDidMount() {
    this.getLocationData();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.divider} />
        <Button title="HOT PLACE" onPress={this.getData} />
        <Button title="RESTAURANT" />
        <Button title="CAFE" />
        <Button title="TREND" onPress={Actions.trend} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "white"
  },
  divider: {
    width: 450,
    height: 1,
    opacity: 0.08,
    backgroundColor: "black"
  },
  title: {
    textAlign: "center",
    marginTop: 17,
    color: "black"
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth
  }
});

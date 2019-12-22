import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import LocationBtn from "../components/LocationBtn";

export default class Location extends Component {
  render() {
    return (
      <View style={styles.container}>
        {LocationBtn("JEJU")}
        {LocationBtn("SEOUL")}
        {LocationBtn(" GYEONGGI-DO ")}
        {LocationBtn("GANGWON-DO ")}
        {LocationBtn("BUSAN")}
        {LocationBtn("NAM-HAE")}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingLeft: 10,
    paddingTop: 50,
    paddingRight: 10,
    backgroundColor: "#ffffff"
  },
  backgorund: {
    width: 375,
    height: 812
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

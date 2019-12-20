import React, { Component } from "react";
import axios from "axios";
import { StyleSheet, Button, Text, View, Alert } from "react-native";
import { Actions } from "react-native-router-flux";

export default class Location extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button title="JEJU" onPress={Actions.category} />
        <Button title="SEOUL" />
        <Button title="GYEONGGI-DO" />
        <Button title="GANGWON-DO" />
        <Button title="BUSAN" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
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

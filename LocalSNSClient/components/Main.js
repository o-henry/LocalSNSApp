import React from "react";
import { StyleSheet, Button, Text, View, Alert } from "react-native";
import getLocationData from "../axios/axios";

export default function Main() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello</Text>
      <Button title="JEJU" onPress={() => getLocationData()} />
    </View>
  );
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

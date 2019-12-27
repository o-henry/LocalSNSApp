import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { Actions } from "react-native-router-flux";

export default function LocationBtn(location) {
  return (
    <TouchableOpacity style={styles.rectangle} onPress={Actions.category}>
      <Text>{location}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  rectangle: {
    alignItems: "center",
    justifyContent: "center",
    width: 300.5,
    height: 92.5,
    opacity: 0.7,
    borderRadius: 10,
    marginBottom: 15,
    backgroundColor: "rgba(238, 238, 238, 0.5)",
    // shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 2,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderWidth: 0.5,
    borderColor: "#000000"
  }
});

import React from "react";
import { StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import { Actions } from "react-native-router-flux";

export default function LocationBtn(location, source) {
  return (
    <TouchableOpacity style={styles.rectangle} onPress={Actions.category}>
      <Image style={styles.imageStyle} source={source} />
      <Text style={styles.message}>{location}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  rectangle: {
    alignItems: "center",
    justifyContent: "center",
    width: "92%",
    height: "11%",
    opacity: 0.9,
    borderRadius: 10,
    marginBottom: "4%",
    backgroundColor: "rgba(238, 238, 238, 0.5)",
    borderStyle: "solid",
    borderWidth: 0.2,
    borderColor: "#000000"
  },
  message: {
    paddingTop: "5%",
    color: "white",
    fontWeight: "bold"
  },
  imageStyle: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    width: "100%",
    height: "125%"
  }
});

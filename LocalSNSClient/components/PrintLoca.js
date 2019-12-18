import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function PrintLoca({ name, count }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {name} {count}{" "}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 30,
    paddingVertical: 10,
    color: "black"
    // backgroundColor: "#FDF6AA"
  },
  text: {
    flex: 1,
    color: "black",
    fontSize: 15
  }
});

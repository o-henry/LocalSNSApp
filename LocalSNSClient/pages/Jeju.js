import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Jeju(props) {
  console.log("loca", props.location);

  return (
    <View style={styles.container}>
      <Text sytle={styles.text}>Jeju</Text>
      <View>
        {props.location.map(loca => {
          return loca.location !== "undefined" ? (
            <Text style={styles.text}>
              {loca.location} {loca.locationCount}
            </Text>
          ) : (
            delete loca.location
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#bb0000"
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    color: "white"
  }
});

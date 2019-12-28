import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import LocationBtn from "../components/LocationBtn";

export default class Location extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}> PLACE </Text>
        </View>
        {LocationBtn("JEJU", require("../assets/jeju.jpg"))}
        {LocationBtn("SEOUL", require("../assets/seoul.jpg"))}
        {LocationBtn(" GYEONGGI-DO", require("../assets/seoul2.jpg"))}
        {LocationBtn("GANGWON-DO", require("../assets/gangwon.jpg"))}
        {LocationBtn("BUSAN", require("../assets/busan.jpg"))}
        {LocationBtn("NAM-HAE", require("../assets/seoul3.jpg"))}
        <View style={styles.footer}>
          <View style={styles.bookMark}></View>
        </View>
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
    alignContent: "center",
    alignSelf: "center",
    backgroundColor: "#ffffff"
  },
  title: {
    marginTop: "10%",
    marginBottom: "30%",
    justifyContent: "center",
    fontSize: 17,
    lineHeight: 30,
    letterSpacing: 4,
    color: "#2c4256",
    fontWeight: "bold"
  },
  footer: {
    marginTop: "6%",
    alignSelf: "center",
    width: "13%",
    height: "0.1%",
    opacity: 0.3,
    borderStyle: "solid",
    borderWidth: 0.5,
    borderColor: "#000000",
    width: "100%"
  },
  bookMark: {
    width: "3%",
    height: "3%",
    opacity: 0.7,
    borderRadius: 10,
    borderStyle: "solid",
    borderWidth: 0.2,
    borderColor: "#696969"
  }
});

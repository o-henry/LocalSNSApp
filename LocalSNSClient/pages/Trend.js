import React, { Component } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  ScrollView,
  SafeAreaView
} from "react-native";
import { Actions } from "react-native-router-flux";
import { Ionicons } from "@expo/vector-icons";

export default class Trend extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.nav}>
          <TouchableOpacity onPress={Actions.location}>
            <Ionicons name="ios-arrow-round-back" size={30} color="black" />
          </TouchableOpacity>
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
    backgroundColor: "#ffffff",
    paddingTop: "20%"
  },
  nav: {
    justifyContent: "space-between",
    marginTop: "-5%",
    flexDirection: "row",
    marginRight: "23%"
  },
  title: {
    marginTop: "-4%",
    marginBottom: "10%",
    marginRight: "26%",
    alignContent: "center",
    letterSpacing: 4,
    fontSize: 17,
    color: "#2c4256",
    fontWeight: "bold"
  },

  footer: {
    marginTop: "30%",
    alignSelf: "center",
    width: "13%",
    opacity: 0.3,
    borderStyle: "solid",
    borderWidth: 0.5,
    borderColor: "#000000",
    width: "100%"
  }
});

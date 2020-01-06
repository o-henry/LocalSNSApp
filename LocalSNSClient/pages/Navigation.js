import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text, View, Picker } from "react-native";
import { Actions } from "react-native-router-flux";

import { Ionicons, MaterialIcons } from "@expo/vector-icons";

export default class Trend extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity onPress={Actions.location}>
            <MaterialIcons
              style={styles.body}
              name="bookmark-border"
              size={40}
              color="black"
            >
              BOOKMARKS
            </MaterialIcons>
          </TouchableOpacity>
          <TouchableOpacity onPress={Actions.location}>
            <Ionicons
              style={styles.body}
              name="ios-settings"
              size={40}
              color="black"
            >
              SETTINGS
            </Ionicons>
          </TouchableOpacity>
          <TouchableOpacity onPress={Actions.location}>
            <Ionicons
              style={styles.body}
              name="md-notifications-outline"
              size={40}
              color="black"
            >
              NOTIFICATIONS
            </Ionicons>
          </TouchableOpacity>
          <TouchableOpacity onPress={Actions.location}>
            <MaterialIcons
              style={styles.body}
              name="people-outline"
              size={40}
              color="black"
            >
              PEOPLE
            </MaterialIcons>
          </TouchableOpacity>
          <TouchableOpacity onPress={Actions.location}>
            <MaterialIcons
              style={styles.body}
              name="place"
              size={40}
              color="black"
            >
              PLACES
            </MaterialIcons>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingTop: "30%"
  },
  content: {
    flex: 1,
    margin: "20%",
    paddingTop: "20%",
    marginTop: "5%",
    borderStyle: "solid",
    // borderWidth: 0.5,
    borderColor: "#000000"
  },
  icons: {},
  body: {
    paddingTop: "20%",
    justifyContent: "center",
    marginLeft: "26%",
    letterSpacing: 3,
    opacity: 0.8,
    fontSize: 17,
    color: "black",
    fontWeight: "bold"
  },

  footer: {
    alignSelf: "center",
    width: "13%",
    opacity: 0.3,
    borderStyle: "solid",
    borderWidth: 0.5,
    borderColor: "#000000",
    width: "100%"
  }
});

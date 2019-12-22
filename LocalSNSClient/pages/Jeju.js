import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
import Constants from "expo-constants";

export default class Jeju extends Component {
  constructor(props, locations, locaCount) {
    super(props, locations, locaCount);
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.container}>
            <View style={styles.divider} />
            <View>
              {this.props.location.map((loca, id) => {
                return loca.location !== "undefined" ? (
                  <Text style={styles.name} key={id}>
                    {loca.location}
                  </Text>
                ) : (
                  delete loca.location
                );
              })}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    justifyContent: "center",
    backgroundColor: "white"
  },
  border: {
    width: 375,
    height: 75,
    borderRadius: 5,
    backgroundColor: "#ffffff",
    shadowColor: "rgba(59, 74, 116, 0.14)",
    shadowOffset: {
      width: 0,
      height: 1.5
    },
    shadowRadius: 14.5,
    shadowOpacity: 1
  },
  name: {
    textAlign: "left",
    marginLeft: 100,
    width: 300,
    height: 20.5,
    fontSize: 20.5,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 22.5,
    letterSpacing: 1,
    color: "#140f26"
  },
  divider: {
    width: 450,
    height: 1,
    opacity: 0.08,
    backgroundColor: "black"
  },

  scrollView: {
    backgroundColor: "pink",
    marginHorizontal: 20
  },
  text: {
    fontSize: 20,
    // textAlign: "center",
    color: "black"
  }
});

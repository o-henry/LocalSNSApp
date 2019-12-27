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
            <Text style={styles.title}>HOT PLACE</Text>
            <View style={styles.header}>
              <Text style={styles.rank}>RANK</Text>
            </View>
            <View>
              {this.props.location.map((loca, id) => {
                return loca.location !== "undefined" ? (
                  <View style={styles.line}>
                    <Text style={styles.name} key={id}>
                      {loca.location}
                    </Text>
                  </View>
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
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    // alignContent: "center",
    // alignSelf: "center",
    backgroundColor: "#ffffff"
  },
  scrollView: {
    marginHorizontal: "2%"
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    height: "3%",
    opacity: 0.9,
    borderBottomColor: "#6c7b8a",
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  rank: {},
  title: {
    marginTop: "10%",
    marginBottom: "10%",
    justifyContent: "center",
    fontStyle: "normal",
    lineHeight: 30,
    letterSpacing: 4,
    color: "#2c4256",
    fontWeight: "bold"
  },

  name: {
    width: "100%",
    textAlign: "left",
    marginLeft: "50%",
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 22.5,
    letterSpacing: 1,
    color: "#140f26"
  },

  line: {
    width: "100%",
    height: "3.5%",
    opacity: 0.9,
    borderBottomColor: "#6c7b8a",
    borderBottomWidth: StyleSheet.hairlineWidth
  },

  text: {
    fontSize: 20,
    color: "black"
  }
});

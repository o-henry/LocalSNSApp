import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
import Constants from "expo-constants";

export default class Seooul extends Component {
  constructor(props, locations, locaCount) {
    super(props, locations, locaCount);
    console.log("count", this.props.location.length);
  }

  render() {
    console.log("loca", this.location);
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.container}>
            <View>
              <Text style={styles.text}>{this.location}</Text>
              {this.props.location.map((loca, id) => {
                return loca.location !== "undefined" ? (
                  <Text style={styles.text} key={id}>
                    {loca.location} {loca.locationCount}
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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#bb0000",
    marginTop: Constants.statusBarHeight
  },
  scrollView: {
    backgroundColor: "pink",
    marginHorizontal: 20
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    color: "white"
  }
});

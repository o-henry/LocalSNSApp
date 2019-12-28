import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";

export default class Jeju extends Component {
  constructor(props, locations, locaCount) {
    super(props, locations, locaCount);
  }

  render() {
    return (
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <Text style={styles.title}>HOT PLACE</Text>

          <View style={styles.header}>
            <Text style={styles.rank}>RANK</Text>
            <Text style={styles.rank}>TODAY</Text>
            <Text style={styles.rank}>WEEK</Text>
            <Text style={styles.rank}>MONTH</Text>
          </View>

          {this.props.location.map((loca, id) => {
            return loca.location !== "undefined" ? (
              <View style={styles.line}>
                <Text style={styles.locaCount} key={id}>
                  {loca.locationCount}
                </Text>
                <Text style={styles.location} key={id + 1}>
                  {loca.location}
                </Text>
              </View>
            ) : (
              delete loca.location
            );
          })}
          <View style={styles.footer}>
            <Text> Test</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    backgroundColor: "#ffffff"
  },
  scrollView: {
    // marginHorizontal: "0%"
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    marginTop: "-4%",
    opacity: 0.9,
    borderBottomColor: "#6c7b8a",
    borderBottomWidth: StyleSheet.hairlineWidth
  },

  title: {
    marginTop: "20%",
    marginBottom: "10%",
    justifyContent: "center",
    // lineHeight: 30,
    letterSpacing: 4,
    fontSize: 17,
    color: "#2c4256",
    fontWeight: "bold"
  },
  rank: {
    // alignItems: "flex-start",
    padding: "5%",
    letterSpacing: 4,
    color: "#140f26",
    fontSize: 11,
    fontWeight: "400"
  },

  line: {
    flexDirection: "row",
    flexWrap: "wrap",
    // justifyContent: "center",
    textAlign: "auto",
    width: "100%",
    opacity: 0.9,
    borderBottomColor: "#6c7b8a",
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  locaCount: {
    justifyContent: "center",
    alignSelf: "center",
    flex: 1,
    width: 500,
    marginLeft: "13%",
    marginTop: "3.5%",
    fontWeight: "500",
    fontSize: 18,
    letterSpacing: 1,
    color: "#140f26"
  },
  location: {
    alignSelf: "center",
    flex: 1,
    marginTop: "3.5%",
    marginRight: "50%"
  },
  number: {
    fontSize: 18
  },
  text: {
    fontSize: 20,
    color: "black"
  },
  footer: {
    marginTop: "30%",
    alignSelf: "center",
    width: "13%",
    height: "0.1%",
    opacity: 0.3,
    borderStyle: "solid",
    borderWidth: 0.5,
    borderColor: "#000000",
    width: "100%"
  }
});

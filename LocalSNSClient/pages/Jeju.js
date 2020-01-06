import React, { Component } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Button,
  ScrollView,
  SafeAreaView
} from "react-native";
import { Actions } from "react-native-router-flux";
import { Ionicons } from "@expo/vector-icons";

export default class Jeju extends Component {
  constructor(props, locations, locaCount) {
    super(props, locations, locaCount);
    this.state = {};
  }

  render() {
    return (
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <View style={styles.nav}>
            <TouchableOpacity onPress={Actions.location}>
              <Ionicons name="ios-arrow-round-back" size={30} color="black" />
            </TouchableOpacity>
          </View>
          <Text style={styles.title}>HOT PLACE</Text>

          <View style={styles.header}>
            <TouchableOpacity style={styles.rank}>
              <Text style={styles.headerBeforeChoice}>RANK</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.rank}>
              <Text style={styles.headerChoice}>TODAY</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.rank}>
              <Text style={styles.headerBeforeChoice}>WEEK</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.rank}>
              <Text style={styles.headerBeforeChoice}>MONTH</Text>
            </TouchableOpacity>
          </View>

          {this.props.location.map((loca, id) => {
            // console.log(loca);
            return loca.location !== "undefined" ? (
              <View style={styles.line}>
                <Text style={styles.locaCount} key={id}>
                  {loca.locationCount}
                </Text>
                <Text style={styles.location} key={id + "0"}>
                  {loca.location}
                </Text>
                <Text sytle={styles.time} key={id + "11"}></Text>
              </View>
            ) : (
              delete loca.location
            );
          })}
          <View style={styles.footer} />
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
    backgroundColor: "#ffffff",
    // padding: "10%",
    paddingTop: "20%"
  },
  nav: {
    flex: 1,
    marginRight: "5%",
    justifyContent: "center",
    marginTop: "-5%",
    flexDirection: "row"
  },
  title: {
    flex: 1,
    marginTop: "-4%",
    marginBottom: "10%",
    marginRight: "35%",
    alignContent: "center",
    letterSpacing: 4,
    fontSize: 17,
    color: "#2c4256",
    fontWeight: "bold"
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    marginTop: "-4%",
    opacity: 0.9,
    // fontWeight: "200",
    borderBottomColor: "#6c7b8a",
    borderBottomWidth: StyleSheet.hairlineWidth
  },

  rank: {
    flexDirection: "row",
    padding: "5%"
  },

  headerBeforeChoice: {
    color: "#140f26",
    fontSize: 11,
    letterSpacing: 4,
    fontWeight: "200"
  },

  headerChoice: {
    color: "#140f26",
    fontSize: 11,
    letterSpacing: 4,
    fontWeight: "bold"
  },

  line: {
    flexDirection: "row",
    flexWrap: "wrap",
    textAlign: "auto",
    width: "100%",
    opacity: 0.9,
    borderBottomColor: "#6c7b8a",
    borderBottomWidth: StyleSheet.hairlineWidth
  },

  locaCount: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
    marginLeft: "13%",
    marginTop: "9%",
    fontWeight: "bold",
    fontSize: 20,
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
  loading: {
    width: "50%",
    height: "2.5%",
    opacity: 0.5,
    backgroundColor: "#0a0b0a",
    borderStyle: "solid",
    borderRadius: 40,
    borderWidth: 1,
    borderColor: "#000000"
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

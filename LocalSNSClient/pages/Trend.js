import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text, View, Picker } from "react-native";
import { Actions } from "react-native-router-flux";
import { Ionicons } from "@expo/vector-icons";

export default class Trend extends Component {
  constructor(props) {
    super(props);

    this.state = {
      day: "1 DAY",
      weeks: "1 WEEK",
      month: "1 MONTH",
      year: "1 YEAR"
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.nav}>
          <TouchableOpacity onPress={Actions.location}>
            <Ionicons
              style={styles.arrow}
              name="ios-arrow-round-back"
              size={28}
              color="black"
            />
          </TouchableOpacity>
          <Text style={styles.title}>TRENDS</Text>
          <Picker
            style={styles.picker}
            itemStyle={styles.pickerItem}
            selectedValue={this.state.day}
            onValueChange={element => this.setState({ day: element })}
          >
            <View style={styles.pickerView}>
              <Picker.Item label="1 DAY" value="1 DAY" />
            </View>
          </Picker>
        </View>

        <View style={styles.content}>
          <View style={styles.graph1}></View>
          <View style={styles.graph2}></View>
          <View sytle={styles.graph2}></View>
        </View>

        <View style={styles.footer}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    paddingTop: "20%"
    // padding: "15%"
  },
  arrow: {
    marginLeft: "20%"
  },
  nav: {
    flex: 1,
    marginLeft: "-50%",
    justifyContent: "center",
    marginTop: "-5%",
    flexDirection: "row"
  },
  title: {
    marginLeft: "-8%",
    alignContent: "center",
    letterSpacing: 4,
    fontSize: 15,
    color: "#2c4256",
    fontWeight: "bold"
  },
  // picker: {
  //   width: "4e0%",
  //   backgroundColor: "#FFF0E0",
  //   borderColor: "black",
  //   borderWidth: 1
  // },
  content: {
    flex: 2,
    flexDirection: "column"
  },
  graph1: {
    flex: 3,
    alignSelf: "center",
    width: "13%",
    height: "0.1%",
    opacity: 0.3,
    borderStyle: "solid",
    borderWidth: 0.5,
    borderColor: "#000000",
    width: "100%"
  },
  graph2: {
    flex: 3,
    alignSelf: "center",
    width: "13%",
    height: "0.1%",
    opacity: 0.3,
    borderStyle: "solid",
    borderWidth: 0.5,
    borderColor: "#000000",
    width: "100%"
  },
  graph3: {
    flex: 3,
    alignSelf: "center",
    width: "13%",
    height: "0.1%",
    opacity: 0.3,
    borderStyle: "solid",
    borderWidth: 0.5,
    borderColor: "#000000",
    width: "100%"
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

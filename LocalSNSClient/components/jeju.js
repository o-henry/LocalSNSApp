import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class Jeju extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("prop", this.props);
    console.log("propCount", this.props.count);

    return (
      <View style={styles.container}>
        <Text sytle={styles.text}>Jeju</Text>
      </View>
    );
  }
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
    color: "#ffffff"
  }
});

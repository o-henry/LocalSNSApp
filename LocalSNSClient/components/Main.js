// import React, { Component } from "react";
// import { StyleSheet, Button, Text, View } from "react-native";
// import { Actions } from "react-native-router-flux";

// export default class Main extends Component {
//   getLocationData = async () => {
//     try {
//       await axios.get("http://localhost:4500/data/location").then(res => {
//         console.log("Click res", res.data);
//         this.setState({ location: res.data, isLoading: false });
//       });
//     } catch (err) {
//       Alert.alert("Can't get any Data");
//     }
//   };

//   componenetDidMount() {
//     this.getLocationData();
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.title}>Hello</Text>
//         <Button title="JEJU" onPress={() => Actions.jeju()} />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center"
//   },
//   title: {
//     textAlign: "center",
//     marginTop: 17,
//     color: "black"
//   },
//   fixToText: {
//     flexDirection: "row",
//     justifyContent: "space-between"
//   },
//   separator: {
//     marginVertical: 8,
//     borderBottomColor: "#737373",
//     borderBottomWidth: StyleSheet.hairlineWidth
//   }
// });

import React, { Component } from "react";
import axios from "axios";
import { StyleSheet, Button, Text, View, Alert } from "react-native";
import { Actions } from "react-native-router-flux";

export default class Main extends Component {
  state = {
    isLoading: true,
    location: []
  };

  getLocationData = async () => {
    try {
      await axios.get("http://localhost:4500/data/location").then(res => {
        this.setState({ location: res.data, isLoading: false });
      });
    } catch (err) {
      Alert.alert("Can't get any Data");
    }
  };

  getData = async () => {
    await this.getLocationData();
    const { location, isLoading } = this.state;
    Actions.jeju({
      location: location
    });
  };

  componenetDidMount() {
    this.getLocationData();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Hello</Text>
        <Button title="JEJU" onPress={this.getData} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    textAlign: "center",
    marginTop: 17,
    color: "black"
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth
  }
});

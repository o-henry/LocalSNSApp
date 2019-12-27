import React, { Component } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Text,
  View,
  Alert
} from "react-native";
import { Actions } from "react-native-router-flux";

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usernmae: "",
      password: ""
    };
  }

  onLogin() {
    const { username, password } = this.state;
    Alert.alert("Credentials", `${username} + ${password}`);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>L O C A L</Text>
        </View>

        <View style={styles.content}>
          <TextInput
            value={this.state.username}
            onChangeText={username => this.setState({ username })}
            placeholder={"전화번호, 사용자 이름 또는 이메일"}
            style={styles.input}
          />
          <TextInput
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            placeholder={"비 밀 번 호"}
            secureTextEntry={true}
            style={styles.input}
          />
          <TouchableOpacity
            style={styles.accountLogin}
            onPress={Actions.location}
          >
            <Text style={styles.message}>SIGN IN</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <Text style={styles.create}>CREATE ACCOUNT</Text>
          <Text style={styles.forgotDetails}>FORGOT DETAILS?</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    backgroundColor: "#ffffff"
  },
  header: {
    flex: 2,
    marginTop: "25%",
    justifyContent: "center"
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: -0.3,
    color: "#201f1f"
  },
  content: {
    flex: 2,
    width: "84%",
    height: "50.8%",
    marginTop: "-30%"
  },

  input: {
    borderRadius: 15,
    marginTop: 20,
    paddingLeft: "7.7%",
    // width: "84%",
    height: "9.8%",
    backgroundColor: "rgba(219, 219, 219, 0.4)"
  },

  accountLogin: {
    marginTop: 20,
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    // width: "84%",
    height: "9.8%",
    backgroundColor: "rgba(10, 11, 10, 0.77)"
  },
  message: {
    color: "white",
    letterSpacing: 3
  },
  footer: {
    flex: 0.25,
    alignItems: "flex-end",
    width: "29%",
    height: "1.5%"
    // justifyContent: "flex-end",
    // alignContent: "stretch"
  },
  create: {
    // width: "29%",
    // height: "1.5%",
    opacity: 0.5,
    fontSize: 10,
    fontWeight: "600",
    fontStyle: "normal",
    letterSpacing: 1,
    color: "black"
  },
  forgotDetails: {
    // width: "29%",
    // height: "1.5%",
    opacity: 0.5,
    fontSize: 10,
    fontWeight: "600",
    fontStyle: "normal",
    letterSpacing: 1,
    color: "black"
  }
});

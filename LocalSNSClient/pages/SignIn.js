import React, { Component } from "react";
import { StyleSheet, Button, TextInput, Text, View, Alert } from "react-native";
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
        <Text style={styles.title}>L O C A L</Text>
        <TextInput
          value={this.state.username}
          onChangeText={username => this.setState({ username })}
          placeholder={"전화번호, 사용자 이름 또는 이메일"}
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
          placeholder={"비밀번호"}
          secureTextEntry={true}
          style={styles.input}
        />
        <Button
          style={styles.accountLogin}
          title="로그인"
          onPress={Actions.location}
        />
        <Text style={styles.create}>CREATE ACCOUNT</Text>
        <Text style={styles.forgotDetails}>FORGOT DETAILS?</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff"
  },
  title: {
    width: 294,
    height: 95,
    fontSize: 30,
    fontWeight: "bold",
    fontStyle: "normal",
    textAlign: "center",
    // lineHeight: 20,
    letterSpacing: -0.3
    // color: "#ffffff"
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  accountLogin: {
    width: 630,
    height: 100,
    borderRadius: 100
  },
  input: {
    borderRadius: 20,
    marginTop: 15,
    width: 315,
    height: 55,
    backgroundColor: "rgba(20, 15, 38, 0.65)"
  },

  create: {
    width: 108,
    height: 12.5,
    opacity: 0.5,
    fontSize: 10,
    fontWeight: "600",
    fontStyle: "normal",
    letterSpacing: 1,
    color: "black"
  },
  forgotDetails: {
    width: 107.5,
    height: 12.5,
    opacity: 0.5,
    fontSize: 10,
    fontWeight: "600",
    fontStyle: "normal",
    letterSpacing: 1,
    color: "black"
  }
});

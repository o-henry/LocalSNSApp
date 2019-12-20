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
        <Text style={styles.title}>How About There Now?</Text>
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
        <Button title="로그인" onPress={Actions.location} />
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
  },
  input: {
    width: 350,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    marginTop: 15
  }
});

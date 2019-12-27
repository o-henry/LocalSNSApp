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
            placeholder={"비밀번호"}
            secureTextEntry={true}
            style={styles.input}
          />
          <TouchableOpacity
            style={styles.accountLogin}
            onPress={Actions.location}
          >
            <Text style={styles.message}>SIGN IN</Text>
          </TouchableOpacity>

          <View style={styles.line}>
            <View style={styles.innerLine} />
            <Text style={styles.middleText}>O R</Text>
            <View style={styles.innerLine} />
          </View>

          <TouchableOpacity
            style={styles.googleLogin}
            onPress={Actions.location}
          >
            <Text style={styles.googleMessage}>CONTINUE WITH GOOGLE</Text>
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
    marginTop: "30%",
    justifyContent: "center"
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    fontStyle: "normal",
    marginTop: "7%",
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
    borderRadius: 10,
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
  googleLogin: {
    marginTop: 20,
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    // width: "84%",
    height: "9.8%",
    backgroundColor: "rgba(219, 219, 219, 0.9)"
  },
  googleMessage: {
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 48,
    letterSpacing: 2.78,
    color: "#2c4256"
  },
  line: {
    flexDirection: "row",
    justifyContent: "center"
  },
  innerLine: {
    marginTop: "6%",
    alignSelf: "center",
    width: "13%",
    height: "0.1%",
    opacity: 0.3,
    borderStyle: "solid",
    borderWidth: 0.5,
    borderColor: "#000000"
  },
  middleText: {
    marginTop: "6%",
    alignSelf: "center",
    fontSize: 13,
    paddingHorizontal: "5%"
  },
  message: {
    color: "white",
    letterSpacing: 3
  },
  footer: {
    flex: 0.4,
    marginTop: "-8%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start"
  },
  create: {
    opacity: 0.5,
    fontSize: 10,
    fontWeight: "600",
    fontStyle: "normal",
    letterSpacing: 1,
    color: "black",
    marginRight: "25%"
  },
  forgotDetails: {
    opacity: 0.5,
    fontSize: 10,
    fontWeight: "600",
    fontStyle: "normal",
    letterSpacing: 1,
    color: "black"
  }
});

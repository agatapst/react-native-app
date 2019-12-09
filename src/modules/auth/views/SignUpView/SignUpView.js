import React from "react";
import {
  Text,
  SafeAreaView,
  View,
  TextInput,
  StyleSheet,
  Button
} from "react-native";

const SignUpView = props => {
  const { navigate } = props.navigation;
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <Text style={styles.title}>SIGN UP</Text>
        <TextInput style={styles.input} placeholder="login" />
        <TextInput style={styles.input} placeholder="password" />
        <TextInput style={styles.input} placeholder="repeat password" />
        <Button title="SUBMIT" onPress={() => navigate("Main")} />
        <Text>I have an account: </Text>
        <Button title="SIGN IN" onPress={() => navigate("SignIn")} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#e6e6e6"
  },
  container: {
    padding: 20
  },
  title: {
    textAlign: "center",
    fontSize: 16
  },
  input: {
    height: 60,
    borderColor: "gray",
    borderWidth: 1,
    margin: 10,
    padding: 10
  }
});

SignUpView.defaultProps = {};

SignUpView.propTypes = {};

export default SignUpView;

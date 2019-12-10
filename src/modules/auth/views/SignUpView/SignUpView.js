import React from "react";
import { Text, SafeAreaView, View, StyleSheet, Image } from "react-native";

import { Input } from "../../../../base/components/Input";
import { Button, ButtonLink } from "../../../../base/components/Button";

const SignUpView = props => {
  const { navigate } = props.navigation;
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <Text>Sign up</Text>
        <Input placeholder="username" />
        <Input placeholder="e-mail" />
        <Input placeholder="password" />
        <Button text="submit" onPress={() => navigate("Home")} />
      </View>
      <View style={styles.loginBox}>
        <Text>Do you have an account? </Text>
        <ButtonLink text="Sign in" onPress={() => navigate("SignIn")} />
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
    padding: 20,
    flex: 1,
    justifyContent: "center"
  },
  loginBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }
});

SignUpView.defaultProps = {};

SignUpView.propTypes = {};

export default SignUpView;

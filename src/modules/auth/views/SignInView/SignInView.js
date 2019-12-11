import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, SafeAreaView, View, StyleSheet } from "react-native";

import { authActions } from "../../redux/actions";

import { Input } from "../../../../base/components/Input";
import { Button, ButtonLink } from "../../../../base/components/Button";

class SignInView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  signIn = () => {
    const { dispatch, navigation } = this.props;
    const { email, password } = this.state;

    const payload = {
      email,
      password
    };

    dispatch(authActions.signIn(payload, navigation));
  };
  render() {
    const {
      navigation: { navigate },
      signIn
    } = this.props;
    const { email, password } = this.state;

    return (
      <SafeAreaView style={styles.main}>
        <View style={styles.container}>
          <Text>Sign in</Text>
          <Input
            style={styles.input}
            placeholder="email"
            value={email}
            onChangeText={value => this.setState({ email: value })}
          />
          <Input
            style={styles.input}
            placeholder="password"
            value={password}
            onChangeText={value => this.setState({ password: value })}
          />
          <Button text="sign in" onPress={() => this.signIn()} />
        </View>
        <View style={styles.registerBox}>
          <Text>You don't have an account? </Text>
          <ButtonLink text="Sign up" onPress={() => navigate("SignUp")} />
        </View>
      </SafeAreaView>
    );
  }
}

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
  registerBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }
});

const mapStateToProps = ({ auth }) => {
  return auth;
};

export default connect(mapStateToProps)(SignInView);

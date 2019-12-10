import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Text, SafeAreaView, View, StyleSheet } from "react-native";

import { authActions } from "../../redux/actions";

import { Input } from "../../../../base/components/Input";
import { Button, ButtonLink } from "../../../../base/components/Button";

class SignInView extends PureComponent {
  state = {
    login: "",
    password: ""
  };

  onSubmit = () => {
    const { dispatch } = this.props;
    const { login, password } = this.state;

    dispatch(authActions.signUp({ login, password }, mavigation));
  };

  render() {
    const { navigate } = this.props.navigation;
    // const { navigation: {navigate} } = this.props
    return (
      <SafeAreaView style={styles.main}>
        <View style={styles.container}>
          <Text>Sign in</Text>
          <Input style={styles.input} placeholder="e-mail" />
          <Input style={styles.input} placeholder="password" />
          <Button text="sign in" onPress={() => navigate("Home")} />
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

const mapStateToProps = () => ({});

export default connect(mapStateToProps)(SignInView);

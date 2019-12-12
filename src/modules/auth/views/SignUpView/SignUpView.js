import React, { Component } from "react";
import { View } from "react-native";

import Input from "../../../../base/components/Input";
import ActionButton from "../../../../base/components/ActionButton";
import Header from "../../../../base/components/Header";
import AppText from "../../../../base/components/AppText";
import AuthContainer from "../../../../base/components/AuthContainer";

import Styles from "./Styles";

class SignUpView extends Component {
  state = {
    username: "",
    email: "",
    password: ""
  };

  render() {
    const {
      navigation: { navigate }
    } = this.props;
    const { container, loginBox } = Styles;
    return (
      <AuthContainer>
        <View style={container}>
          <Header>Sign up</Header>
          <Input placeholder="username" />
          <Input placeholder="e-mail" />
          <Input placeholder="password" secureTextEntry={true} />
          <ActionButton text="submit" onPress={() => navigate("Home")} />
        </View>
        <View style={loginBox}>
          <AppText>Do you have an account?</AppText>
          <ActionButton
            isLink
            text="Sign in"
            onPress={() => navigate("SignIn")}
          />
        </View>
      </AuthContainer>
    );
  }
}

SignUpView.defaultProps = {};

SignUpView.propTypes = {};

export default SignUpView;

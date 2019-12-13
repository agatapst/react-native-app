import React, { Component } from "react";
import { connect } from "react-redux";
import { View, KeyboardAvoidingView } from "react-native";

import { authActions } from "../../redux/actions";

import Input from "../../../../base/components/Input";
import ActionButton from "../../../../base/components/ActionButton";
import AuthContainer from "../../../../base/components/AuthContainer";
import HeaderTitle from "../../../../base/components/HeaderTitle";
import AppText from "../../../../base/components/AppText";

import Styles from "./Styles";

class SignInView extends Component {
  state = {
    login: "",
    password: ""
  };

  onSubmit = () => {
    const { dispatch } = this.props;
    const { login, password } = this.state;

    dispatch(authActions.signUp({ login, password }, navigation));
  };

  render() {
    const {
      navigation: { navigate }
    } = this.props;

    const { container, registerBox } = Styles;

    return (
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <AuthContainer>
          <View style={container}>
            <HeaderTitle>Sign in</HeaderTitle>
            <Input placeholder="e-mail" />
            <Input placeholder="password" secureTextEntry={true} />
            <ActionButton text="sign in" onPress={() => navigate("Home")} />
          </View>
          <View style={registerBox}>
            <AppText>You don't have an account? </AppText>
            <ActionButton
              isLink
              text="Sign up"
              onPress={() => navigate("SignUp")}
            />
          </View>
        </AuthContainer>
      </KeyboardAvoidingView>
    );
  }
}

SignInView.propTypes = {};

SignInView.defaultProps = {};

const mapStateToProps = () => ({});

export default connect(mapStateToProps)(SignInView);

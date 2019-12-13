import React, { Component } from 'react';
import { View, KeyboardAvoidingView } from 'react-native';
import PropTypes from 'prop-types';

import Input from '../../../../base/components/Input';
import ActionButton from '../../../../base/components/ActionButton';
import HeaderTitle from '../../../../base/components/HeaderTitle';
import AppText from '../../../../base/components/AppText';
import AuthContainer from '../../../../base/components/AuthContainer';

import Styles from './Styles';

class SignUpView extends Component {
  state = {};

  render() {
    const {
      navigation: { navigate },
    } = this.props;
    const { container, loginBox, keyboardAvoidingView } = Styles;
    return (
      <KeyboardAvoidingView style={keyboardAvoidingView} behavior="padding">
        <AuthContainer>
          <View style={container}>
            <HeaderTitle>Sign up</HeaderTitle>
            <Input placeholder="username" />
            <Input placeholder="e-mail" />
            <Input placeholder="password" secureTextEntry />
            <ActionButton text="submit" onPress={() => navigate('Home')} />
          </View>
          <View style={loginBox}>
            <AppText>Do you have an account?</AppText>
            <ActionButton
              isLink
              text="Sign in"
              onPress={() => navigate('SignIn')}
            />
          </View>
        </AuthContainer>
      </KeyboardAvoidingView>
    );
  }
}

SignUpView.defaultProps = {};

SignUpView.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default SignUpView;

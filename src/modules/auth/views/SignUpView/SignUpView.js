/* eslint-disable react/forbid-prop-types */
/* eslint-disable arrow-parens */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import { Spinner } from 'native-base';
import { authActions } from '../../redux/actions';

import HeaderTitle from '../../../../base/components/HeaderTitle';
import Input from '../../../../base/components/Input';
import ActionButton from '../../../../base/components/ActionButton';
import AuthContainer from '../../../../base/components/AuthContainer';
import AppText from '../../../../base/components/AppText';
import Styles from './Styles';

class SignUpView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      username: '',
      password: '',
    };
  }

  componentDidMount() {
    const { dispatch, currentUser } = this.props;
    if (!currentUser.token) {
      dispatch(authActions.getToken());
    }
  }

  componentDidUpdate(prevProps) {
    const { currentUser, navigation } = this.props;
    if (!prevProps.currentUser.token && currentUser.token) {
      navigation.navigate('Home');
    }
  }

  disabledButton = () => {
    const { email, username, password } = this.state;
    return email === '' || username === '' || password === '';
  };

  submitForm = () => {
    const { dispatch, navigation } = this.props;
    const { email, username, password } = this.state;

    const payload = {
      email,
      username,
      password,
    };

    dispatch(authActions.signUp(payload, navigation));
  };

  render() {
    const {
      navigation: { navigate },
      signUp,
    } = this.props;
    const { email, username, password } = this.state;
    const { container, loginBox, keyboardAvoidingView } = Styles;

    return (
      <KeyboardAvoidingView style={keyboardAvoidingView} behavior="padding">
        <AuthContainer>
          <View style={container}>
            <HeaderTitle>Sign up</HeaderTitle>
            <Input
              placeholder="username"
              value={username}
              onChangeText={value => this.setState({ username: value })}
              autoCapitalize="none"
            />
            <Input
              placeholder="email"
              value={email}
              onChangeText={value => this.setState({ email: value })}
              autoCapitalize="none"
            />
            <Input
              placeholder="password"
              value={password}
              onChangeText={value => this.setState({ password: value })}
              secureTextEntry
            />
            <ActionButton text="SUBMIT" onPress={() => this.submitForm()} />
            {signUp.isFetching && <Spinner />}
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

const mapStateToProps = ({ auth }) => auth;

SignUpView.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
  currentUser: PropTypes.object.isRequired,
  isFetching: PropTypes.bool,
  signUp: PropTypes.object.isRequired,
};

SignUpView.defaultProps = {
  isFetching: false,
};

export default connect(mapStateToProps)(SignUpView);

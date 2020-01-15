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
import PasswordInput from '../../../../base/components/PasswordInput';
import AppText from '../../../../base/components/AppText';
import Styles from './Styles';

class SignUpView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      username: '',
      password: '',
      passwordError: '',
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

  validatePassword = () => {
    const { password } = this.state;
    let passwordError;
    if (password.length === 0) {
      passwordError = 'This field cannot be empty';
    } else if (password.length < 8) {
      passwordError = 'Password must have at least 8 characters';
    }
    this.setState({ passwordError });
  };

  clearValidation = () => {
    this.setState({ passwordError: '' });
  };

  submitForm = () => {
    const { dispatch, navigation } = this.props;
    const { email, username, password, passwordError } = this.state;

    this.validatePassword();

    if (email && username && password && !passwordError) {
      const payload = {
        email,
        username,
        password,
      };

      dispatch(authActions.signUp(payload, navigation));
    }
  };

  render() {
    const {
      navigation: { navigate },
      signUp,
    } = this.props;
    const { email, username, password, passwordError } = this.state;
    const { container, loginBox, keyboardAvoidingView } = Styles;

    return (
      <KeyboardAvoidingView style={keyboardAvoidingView} behavior="padding">
        <AuthContainer>
          <View style={container}>
            <HeaderTitle>Sign up</HeaderTitle>
            <Input
              placeholder="username"
              value={username}
              onChangeText={(value) => this.setState({ username: value })}
              autoCapitalize="none"
            />
            <Input
              placeholder="email"
              value={email}
              onChangeText={(value) => this.setState({ email: value })}
              autoCapitalize="none"
            />
            <PasswordInput
              isPassword
              isError={!!passwordError}
              errorMessage={passwordError}
              placeholder="password"
              value={password}
              onChangeText={(value) => this.setState({ password: value })}
              onEndEditing={() => this.validatePassword()}
              onFocus={() => this.clearValidation()}
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
  currentUser: PropTypes.shape({ token: PropTypes.string }).isRequired,
  signUp: PropTypes.shape({ isFetching: PropTypes.bool }),
};

SignUpView.defaultProps = {
  signUp: false,
};

export default connect(mapStateToProps)(SignUpView);

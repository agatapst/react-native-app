import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import { authActions } from '../../redux/actions';

import Input from '../../../../base/components/Input';
import PasswordInput from '../../../../base/components/PasswordInput';
import ActionButton from '../../../../base/components/ActionButton';
import AuthContainer from '../../../../base/components/AuthContainer';
import HeaderTitle from '../../../../base/components/HeaderTitle';
import AppText from '../../../../base/components/AppText';

import Styles from './Styles';

class SignInView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  signIn = () => {
    const { dispatch, navigation } = this.props;
    const { email, password } = this.state;

    const payload = {
      email,
      password,
    };

    dispatch(authActions.signIn(payload, navigation));
  };

  render() {
    const {
      navigation: { navigate },
    } = this.props;

    const { email, password } = this.state;

    const { container, registerBox } = Styles;

    return (
      <AuthContainer>
        <View style={container}>
          <HeaderTitle>Sign in</HeaderTitle>
          <Input
            placeholder="email"
            value={email}
            onChangeText={(value) => this.setState({ email: value })}
            autoCapitalize="none"
          />
          <PasswordInput
            isError
            isPassword
            errorMessage="This field cannot be empty"
            placeholder="password"
            value={password}
            onChangeText={(value) => this.setState({ password: value })}
          />
          <ActionButton text="SIGN IN" onPress={() => this.signIn()} />
        </View>
        <View style={registerBox}>
          <AppText>You do not have an account? </AppText>
          <ActionButton
            isLink
            text="Sign up"
            onPress={() => navigate('SignUp')}
          />
        </View>
      </AuthContainer>
    );
  }
}

SignInView.defaultProps = {};

SignInView.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = ({ auth }) => auth;

export default connect(mapStateToProps)(SignInView);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import { authActions } from '../../redux/actions';

import Input from '../../../../base/components/Input';
import ActionButton from '../../../../base/components/ActionButton';
import AuthContainer from '../../../../base/components/AuthContainer';
import HeaderTitle from '../../../../base/components/HeaderTitle';
import AppText from '../../../../base/components/AppText';

import Styles from './Styles';

class SignInView extends Component {
  state = {
    login: '',
    password: '',
  };

  onSubmit = () => {
    const { navigation, dispatch } = this.props;
    const { login, password } = this.state;

    dispatch(authActions.signUp({ login, password }, navigation));
  };

  render() {
    const {
      navigation: { navigate },
    } = this.props;

    const { container, registerBox } = Styles;

    return (
      <AuthContainer>
        <View style={container}>
          <HeaderTitle>Sign in</HeaderTitle>
          <Input placeholder="e-mail" />
          <Input placeholder="password" secureTextEntry />
          <ActionButton text="sign in" onPress={() => navigate('Home')} />
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

const mapStateToProps = () => ({});

export default connect(mapStateToProps)(SignInView);

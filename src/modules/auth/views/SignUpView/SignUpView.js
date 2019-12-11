import React, { Component } from "react";
import { Text, SafeAreaView, View, StyleSheet, Image } from "react-native";
import { connect } from 'react-redux';

import { Input } from "../../../../base/components/Input";
import { Button, ButtonLink } from "../../../../base/components/Button";
import { Spinner } from "native-base";
import { authActions } from "../../redux/actions";

class SignUpView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      username: '',
      password: '',
    }
  }

  disabledButton = () => {
    const { email, username, password } = this.state;
    return email === '' || username === '' || password === '';
  }

  submitForm = () => {
    const { dispatch, navigation } = this.props;
    const { email, username, password } = this.state;

    const payload = {
      email,
      username,
      password
    };

    dispatch(authActions.signUp(payload, navigation));
  }

  render() {
    const {
      navigation: { navigate },
      signUp
    } = this.props;
    const { email, username, password } = this.state;

    // TODO - add alert with error

    return (
      <SafeAreaView style={styles.main}>
        <View style={styles.container}>
          <Text>Sign up</Text>
          <Input placeholder="username" value={username} onChangeText={value => this.setState({ username: value })} />
          <Input placeholder="e-mail" value={email} onChangeText={value => this.setState({ email: value })} />
          <Input placeholder="password" value={password} onChangeText={value => this.setState({ password: value })} />
          <Button text="submit" onPress={() => this.submitForm()} disabled={this.disabledButton} />
          {signUp.isFetching && <Spinner />}
        </View>
        <View style={styles.loginBox}>
          <Text>Do you have an account? </Text>
          <ButtonLink text="Sign in" onPress={() => navigate("SignIn")} />
        </View>
      </SafeAreaView>
    );
  }
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

SignUpView.defaultProps = {
  // TODO add defaultProps
};

SignUpView.propTypes = {
  // TODO add propTypes
};


const mapStateToProps = ({ auth }) => {
  return auth
}

export default connect(mapStateToProps)(SignUpView);

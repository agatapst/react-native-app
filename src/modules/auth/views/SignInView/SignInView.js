import React, { PureComponent } from "react";
import { connect } from "react-redux";
import {
  Text,
  SafeAreaView,
  View,
  TextInput,
  StyleSheet,
  Button
} from "react-native";

import { authActions } from "../../redux/actions";

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
    return (
      <SafeAreaView style={styles.main}>
        <View style={styles.container}>
          <Text style={styles.title}>SIGN IN</Text>
          <TextInput style={styles.input} placeholder="login" />
          <TextInput style={styles.input} placeholder="password" />
          <Button title="SIGN IN" onPress={() => navigate("Main")} />
          <Text>I don't have an account: </Text>
          <Button title="SIGN UP" onPress={() => navigate("SignUp")} />
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
    padding: 20
  },
  title: {
    textAlign: "center",
    fontSize: 16
  },
  input: {
    height: 60,
    borderColor: "gray",
    borderWidth: 1,
    margin: 10,
    padding: 10
  }
});

const mapStateToProps = () => ({});

export default connect(mapStateToProps)(SignInView);

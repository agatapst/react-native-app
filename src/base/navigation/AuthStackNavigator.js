import SignUpView from "../../modules/auth/views/SignUpView";
import SignInView from "../../modules/auth/views/SignInView";
import { createStackNavigator } from "react-navigation-stack";

const AuthStackNavigator = createStackNavigator({
  SignUp: {
    screen: SignUpView,
    navigationOptions: () => ({
      header: null
    })
  },
  SignIn: {
    screen: SignInView,
    navigationOptions: () => ({
      header: null
    })
  }
});

export default AuthStackNavigator;

import SignUpView from "../../modules/auth/views/SignUpView";
import SignInView from "../../modules/auth/views/SignInView";
import { createStackNavigator } from "react-navigation-stack";

const AuthStackNavigator = createStackNavigator({
  SignUp: SignUpView,
  SignIn: SignInView
});

export default AuthStackNavigator;

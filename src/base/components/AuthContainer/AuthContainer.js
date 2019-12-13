import React from "react";
import { SafeAreaView } from "react-native";
import Styles from "./Styles";

const { authContainer } = Styles;

export default function AuthContainer({ props, children }) {
  return (
    <SafeAreaView {...props} style={authContainer}>
      {children}
    </SafeAreaView>
  );
}

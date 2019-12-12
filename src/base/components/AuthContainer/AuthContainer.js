import React from "react";
import { SafeAreaView } from "react-native";
import Styles from "./Styles";

const { authContainer } = Styles;

export default function Header(props) {
  return <SafeAreaView {...props} style={authContainer} />;
}

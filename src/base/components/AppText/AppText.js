import React from "react";
import { Text } from "react-native";
import Styles from "./Styles";

const { appText } = Styles;

export default function AppText(props) {
  return <Text {...props} style={appText} />;
}

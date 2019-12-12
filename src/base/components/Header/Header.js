import React from "react";
import { Text } from "react-native";
import Styles from "./Styles";

const { header } = Styles;

export default function Header(props) {
  return <Text {...props} style={header} />;
}

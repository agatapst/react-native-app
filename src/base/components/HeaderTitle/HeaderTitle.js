import React from "react";
import { Text } from "react-native";
import Styles from "./Styles";

const { headerTitle } = Styles;

export default function HeaderTitle(props) {
  return <Text {...props} style={headerTitle} />;
}

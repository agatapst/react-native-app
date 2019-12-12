import React from "react";
import { TextInput } from "react-native";
import Styles from "./Styles";

const { input } = Styles;

export default function Input(props) {
  return <TextInput {...props} style={input} />;
}

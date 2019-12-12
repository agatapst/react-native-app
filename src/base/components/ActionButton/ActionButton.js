import React from "react";
import { TouchableOpacity, Text } from "react-native";
import Styles from "./Styles";

export default function ActionButton(props) {
  const { text, onPress, isLink } = props;
  const { textStyle, buttonStyle, textLinkStyle, buttonLinkStyle } = Styles;

  return (
    <TouchableOpacity
      style={[buttonStyle, isLink && buttonLinkStyle]}
      onPress={() => onPress()}
      isLink={isLink}
    >
      <Text style={[textStyle, isLink && textLinkStyle]}>{text}</Text>
    </TouchableOpacity>
  );
}

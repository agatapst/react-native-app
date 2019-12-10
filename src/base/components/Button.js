import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    color: "#ffffff",
    textAlign: "center"
  },
  buttonStyle: {
    padding: 10,
    backgroundColor: Colors.red,
    borderRadius: 5
  },
  textLinkStyle: {
    fontSize: 14,
    color: Colors.blue,
    textAlign: "center"
  },
  buttonLinkStyle: {
    padding: 0,
    backgroundColor: "transparent"
  }
});

export function Button(props) {
  const { text, onPress } = props;
  return (
    <TouchableOpacity style={styles.buttonStyle} onPress={() => onPress()}>
      <Text style={styles.textStyle}>{text}</Text>
    </TouchableOpacity>
  );
}

export function ButtonLink(props) {
  const { text, onPress } = props;
  return (
    <TouchableOpacity style={styles.buttonLinkStyle} onPress={() => onPress()}>
      <Text style={styles.textLinkStyle}>{text}</Text>
    </TouchableOpacity>
  );
}

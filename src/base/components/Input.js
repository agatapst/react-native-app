import React from "react";
import { TextInput, StyleSheet } from "react-native";

export function Input(props) {
  return <TextInput {...props} style={styles.input} autoCorrect={false} autoCapitalize='none' />;
}

const styles = StyleSheet.create({
  input: {
    height: 60,
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginBottom: 10
  }
});

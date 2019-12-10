import React from "react";
import { StyleSheet, SafeAreaView, Text } from "react-native";

export default function ConversationsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>MY CONVERSATIONS:</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});

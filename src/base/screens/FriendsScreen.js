import React from "react";
import { StyleSheet, SafeAreaView, Text } from "react-native";

export default function FriendsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>MY FRIENDS:</Text>
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

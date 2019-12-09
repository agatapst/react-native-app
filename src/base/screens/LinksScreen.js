import React from "react";
import { ScrollView, StyleSheet, SafeAreaView } from "react-native";
import { ExpoLinksView } from "@expo/samples";

export default function LinksScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ExpoLinksView />
    </SafeAreaView>
  );
}

LinksScreen.navigationOptions = {
  title: "Links"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});

import React from "react";
import { Text, SafeAreaView, View, StyleSheet, Button } from "react-native";

const HomepageView = props => {
  const { navigate } = props.navigation;
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <Text>THIS IS HOMEPAGE</Text>
        <Button title="Log out" onPress={() => navigate("SignIn")}></Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#e6e6e6"
  },
  container: {
    padding: 20
  }
});

export default HomepageView;

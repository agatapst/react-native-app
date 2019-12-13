import React from "react";
import { Image, Text, View, SafeAreaView } from "react-native";
import ActionButton from "../components/ActionButton";

export default HomeScreen = props => {
  const { navigate } = props.navigation;
  return (
    <SafeAreaView>
      <View>
        <ActionButton
          isLink
          text="Log out"
          onPress={() => navigate("SignIn")}
        />
        <Text>GET STARTED</Text>
        <Image source={require("../../assets/images/main.png")} />
      </View>
    </SafeAreaView>
  );
};

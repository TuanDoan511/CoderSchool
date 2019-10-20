import React from "react";
import { View, Text } from "react-native";
import { ExpoConfigView } from "@expo/samples";

export default function ActiveScreen() {
  return (
    <View>
      <Text>Active</Text>
    </View>
  );
}

ActiveScreen.navigationOptions = {
  title: "Active"
};

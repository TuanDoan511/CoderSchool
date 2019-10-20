import * as WebBrowser from "expo-web-browser";
import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

import { MonoText } from "../components/StyledText";

export default function CompleteScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.empty}>*Empty*</Text>
    </View>
  );
}

CompleteScreen.navigationOptions = {
  title: "Completed"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  },

  empty: {
    color: "lightgrey",
  }
});

import React from "react";
import { TouchableOpacity, Text } from "react-native";
const Recoding = ({ navigation: { navigate } }) => (
  <TouchableOpacity
    onPress={() => navigate("Stack", { screen: "Days" })}
    style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
  >
    <Text>Recoding</Text>
  </TouchableOpacity>
);

export default Recoding;

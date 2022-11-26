import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const CurrentSituation = ({ navigation: { navigate } }) => (
  <View style={{ justifyContent: "center", alignContent: "flex-start" }}>
    <TouchableOpacity
      style={{ marginTop: 40, marginLeft: 10 }}
      onPress={() => navigate("Main", { screen: "Home" })}
    >
      <Text style={{ fontSize: 30 }}>🔙</Text>
    </TouchableOpacity>
    <Text>치매의 현황을 소개하는 농담곰!!</Text>
  </View>
);
export default CurrentSituation;

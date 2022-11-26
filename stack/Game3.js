import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const Game3 = ({ navigation: { navigate } }) => (
  <View style={{ justifyContent: "center", alignContent: "flex-start" }}>
    <TouchableOpacity
      style={{ marginTop: 40, marginLeft: 10 }}
      onPress={() => navigate("Stack", { screen: "Game" })}
    >
      <Text style={{ fontSize: 30 }}>🔙</Text>
    </TouchableOpacity>
    <Text>치매 게임 3333</Text>
  </View>
);

export default Game3;

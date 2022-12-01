import React, { useState, useEffect, useRef } from "react";
import { TouchableOpacity, Text, View, Alert } from "react-native";
import styled from "styled-components/native";
import { useIsFocused } from "@react-navigation/native";
import Risk from "../info/Risk";

const Game3 = ({ navigation: { navigate } }) => {
  const isFocused = useIsFocused();
  const getRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);
  const num1 = getRandom(10, 100);
  const num2 = getRandom(10, 100);
  //useEffect(() => {}, [isFocused]);
  return (
    <Body style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View>
        <Txt>
          📝 {num1} - {num2}의 값은 무엇일까요?
        </Txt>
      </View>
      <View
        style={{
          marginTop: 80,
          flexDirection: "row",
          alignItems: "space-between",
        }}
      >
        <Target
          onPress={() => {
            Alert.alert("😢 오답입니다.");
            navigate("Main", { screen: "Home" });
          }}
        >
          <Txt>💡 {getRandom(10, 100)}</Txt>
        </Target>

        <Target
          onPress={() => {
            Alert.alert("😢 오답입니다.");
            navigate("Main", { screen: "Home" });
          }}
        >
          <Txt>💡 {num1 - num2 + 10}</Txt>
        </Target>
        <Target
          onPress={() => {
            Alert.alert("😢 오답입니다.");
            navigate("Main", { screen: "Home" });
          }}
        >
          <Txt>💡 {(num1 * num2) % 100}</Txt>
        </Target>
        <Target
          onPress={() => {
            Alert.alert("🥳 정답입니다!");
            navigate("Main", { screen: "Home" });
          }}
        >
          <Txt>💡 {num1 - num2}</Txt>
        </Target>
      </View>
      <View style={{ flexDirection: "row", alignItems: "space-between" }}>
        <Target
          onPress={() => {
            Alert.alert("😢 오답입니다.");
            navigate("Main", { screen: "Home" });
          }}
        >
          <Txt>💡 {getRandom(10, 100)}</Txt>
        </Target>

        <Target
          onPress={() => {
            Alert.alert("😢 오답입니다.");
            navigate("Main", { screen: "Home" });
          }}
        >
          <Txt>💡 {getRandom(10, 100)}</Txt>
        </Target>
        <Target
          onPress={() => {
            Alert.alert("😢 오답입니다.");
            navigate("Main", { screen: "Home" });
          }}
        >
          <Txt>💡 {getRandom(10, 100)}</Txt>
        </Target>
        <Target
          onPress={() => {
            Alert.alert("🥳 정답입니다!");
            navigate("Main", { screen: "Home" });
          }}
        >
          <Txt>💡 {getRandom(10, 100)}</Txt>
        </Target>
      </View>
    </Body>
  );
};
const Body = styled.View`
  padding: 10px;
  padding-top: 20px;
  background-color: white;
  justify-content: center;
  align-items: center;
`;
const Txt = styled.Text`
  font-size: 15px;
  font-weight: bold;
  padding-left: 0px;
`;
const Target = styled.TouchableOpacity`
  justify-content: center;
  align-items: flex-start;
  background-color: #ffda79;
  border-radius: 10px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 50px;
  padding: 10px;
  box-shadow: 1px 1px 3px rgba(41, 30, 95, 0.9);
  flex: 1;
`;
export default Game3;

import React, { useState, useEffect, useRef } from "react";
import { TouchableOpacity, Text, View, Alert } from "react-native";
import styled from "styled-components/native";

const Game3Second = ({ navigation: { navigate } }) => {
  const getRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);
  const num1 = getRandom(10, 100);
  const num2 = getRandom(10, 20);
  const num3 = getRandom(50, 100);
  const answer = num1 + num2 - num3;
  return (
    <Body style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Character
          source={require("/Users/leesukcheol/memento/assets/images/bbiyakgame2.png")}
        />
        <Title>
          {num1} - {num2} 의 {"\n"}값은 무엇일까요?
        </Title>
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
            navigate("Stack", { screen: "Game3Third" });
          }}
        >
          <Txt>💡 {getRandom(10, 100)}</Txt>
        </Target>

        <Target
          onPress={() => {
            Alert.alert("😢 오답입니다.");
            navigate("Stack", { screen: "Game3Third" });
          }}
        >
          <Txt>💡 {num1 - num2 + 10}</Txt>
        </Target>
        <Target
          onPress={() => {
            Alert.alert("😢 오답입니다.");
            navigate("Stack", { screen: "Game3Third" });
          }}
        >
          <Txt>💡 {(num1 * num2) % 100}</Txt>
        </Target>
        <Target
          onPress={() => {
            Alert.alert("😢 오답입니다.");
            navigate("Stack", { screen: "Game3Third" });
          }}
        >
          <Txt>💡 {num1 - num2}</Txt>
        </Target>
      </View>
      <View style={{ flexDirection: "row", alignItems: "space-between" }}>
        <Target
          onPress={() => {
            Alert.alert("😢 오답입니다.");
            navigate("Stack", { screen: "Game3Third" });
          }}
        >
          <Txt>💡 {getRandom(10, 100)}</Txt>
        </Target>

        <Target
          onPress={() => {
            Alert.alert("😢 오답입니다.");
            navigate("Stack", { screen: "Game3Third" });
          }}
        >
          <Txt>💡 {getRandom(10, 100)}</Txt>
        </Target>
        <Target
          onPress={() => {
            Alert.alert("🥳 정답입니다!");
            navigate("Stack", { screen: "Game3Third" });
          }}
        >
          <Txt>💡 {answer}</Txt>
        </Target>
        <Target
          onPress={() => {
            Alert.alert("😢 오답입니다.");
            navigate("Stack", { screen: "Game3Third" });
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
const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;
const Txt = styled.Text`
  font-size: 13px;
  font-weight: bold;
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
const Character = styled.Image`
  width: 150px;
  height: 180px;
`;
export default Game3Second;

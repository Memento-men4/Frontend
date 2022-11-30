import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

const Body = styled.View`
  flex-direction: column;
  padding-top: 20px;
  background-color: white;
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
`;
const Txt = styled.Text`
  font-size: 20px;
  font-weight: bold;
  padding: 10px;
  padding-left: 0px;
  padding-right: 3px;
`; // 💡 아이콘에 디폴트 패딩이 있어서 오른쪽 패딩 넣어서 보정해줬음

const Game = ({ navigation: { navigate } }) => (
  <Body style={{ flex: 1 }}>
    <View style={{ justifyContent: "center", alignContent: "flex-start" }}>
      <Target onPress={() => navigate("Stack", { screen: "Game1" })}>
        <Txt style={{ marginLeft: 30 }}>💡 집중력</Txt>
      </Target>
      <Target onPress={() => navigate("Stack", { screen: "Game2" })}>
        <Txt style={{ marginLeft: 30 }}>💡 기억력</Txt>
      </Target>
      <Target onPress={() => navigate("Stack", { screen: "Game3" })}>
        <Txt style={{ marginLeft: 30 }}>💡 계산력</Txt>
      </Target>
    </View>
  </Body>
);

export default Game;

import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

const HomeGame = ({ navigation: { navigate } }) => (
  <Body style={{ flex: 1 }}>
    <TouchableOpacity
      style={{ marginVertical: 30, marginLeft: 10 }}
      onPress={() => navigate("Main", { screen: "Home" })}
    >
      <Text style={{ fontSize: 30 }}>🔙</Text>
    </TouchableOpacity>
    <Header>
      <View style={{ flex: 1 }}>
        <Character
          source={require("/Users/leesukcheol/memento/assets/images/bbiyak1.png")}
        />
      </View>
      <View style={{ flex: 2 }}>
        <Title>영츠하이머 예방 게임</Title>
      </View>
    </Header>
    <Footer>
      <Target onPress={() => navigate("Stack", { screen: "Game1" })}>
        <Txt style={{ marginLeft: 30 }}>🎮ㅤ집중력</Txt>
      </Target>
      <Target onPress={() => navigate("Stack", { screen: "Game2" })}>
        <Txt style={{ marginLeft: 30 }}>🎮ㅤ기억력</Txt>
      </Target>
      <LastTarget onPress={() => navigate("Stack", { screen: "Game3First" })}>
        <Txt style={{ marginLeft: 30 }}>🎮ㅤ계산력</Txt>
      </LastTarget>
    </Footer>
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <GameCharacter
        source={require("/Users/leesukcheol/memento/assets/images/bbiyakgame.png")}
      />
    </View>
  </Body>
);
const Body = styled.View`
  flex-direction: column;
  padding-top: 10px;
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
const LastTarget = styled.TouchableOpacity`
  justify-content: center;
  align-items: flex-start;
  background-color: #ffda79;
  border-radius: 10px;
  margin-left: 10px;
  margin-right: 10px;
  padding: 10px;
  box-shadow: 1px 1px 3px rgba(41, 30, 95, 0.9);
`;
const Txt = styled.Text`
  font-size: 20px;
  font-weight: bold;
  padding: 10px;
  padding-left: 0px;
  padding-right: 3px;
`;
const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-top: 3px;
  padding-right: 3px;
  text-align: center;
`;
const Footer = styled.View`
  margin: 10px;
  justify-content: center;
  align-content: center;
`;
const Character = styled.Image`
  width: 120px;
  height: 98px;
`;
const GameCharacter = styled.Image`
  width: 300px;
  height: 170px;
  margin-bottom: 100px;
  margin-left: 100px;
  align-self: flex-end;
`;
const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-horizontal: 20px;
  margin-top: 10px;
  border: 1px solid black;
  background-color: #f2f2f2;
  box-shadow: 1px 1px 3px rgba(41, 30, 95, 0.9);
  border-radius: 10px;
  margin-bottom: 40px;
`;

export default HomeGame;

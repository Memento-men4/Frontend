import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
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
        <Type>
          <Txt style={{ color: "#FE9A2E" }}>TYPE 1</Txt>
          <Txt style={{ marginLeft: 20, color: "white" }}>CONCENTRATE</Txt>
          <MaterialIcons
            style={{ marginLeft: 25 }}
            name="arrow-forward-ios"
            size={24}
            color="#FE9A2E"
          />
        </Type>
      </Target>
      <Target onPress={() => navigate("Stack", { screen: "Game2" })}>
        <Type>
          <Txt style={{ color: "#FE9A2E" }}>TYPE 2</Txt>
          <Txt style={{ marginLeft: 20, color: "white" }}>MEMORIZE</Txt>
          <MaterialIcons
            style={{ marginLeft: 65 }}
            name="arrow-forward-ios"
            size={24}
            color="#FE9A2E"
          />
        </Type>
      </Target>
      <LastTarget onPress={() => navigate("Stack", { screen: "Game3First" })}>
        <Type>
          <Txt style={{ color: "#FE9A2E" }}>TYPE 3</Txt>
          <Txt style={{ marginLeft: 20, color: "white" }}>CALCULATE</Txt>
          <MaterialIcons
            style={{ marginLeft: 55 }}
            name="arrow-forward-ios"
            size={24}
            color="#FE9A2E"
          />
        </Type>
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
const Type = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: 20px;
`;
const Target = styled.TouchableOpacity`
  justify-content: center;
  align-items: flex-start;
  background-color: #ffda79;
  border-radius: 10px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 40px;
  padding-horizontal: 10px;
  padding-vertical: 5px;
  box-shadow: 1px 1px 3px rgba(41, 30, 95, 0.9);
`;
const LastTarget = styled.TouchableOpacity`
  justify-content: center;
  align-items: flex-start;
  background-color: #ffda79;
  border-radius: 10px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 15px;
  padding-horizontal: 10px;
  padding-vertical: 5px
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
  width: 350px;
  height: 170px;
  margin-bottom: 100px;
  margin-left: 20px;
  align-self: flex-end;
`;
const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-horizontal: 20px;
  margin-top: 10px;
  background-color: #f2f2f2;
  box-shadow: 1px 1px 3px rgba(41, 30, 95, 0.9);
  border-radius: 10px;
  margin-bottom: 40px;
`;

export default HomeGame;

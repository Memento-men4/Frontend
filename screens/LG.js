import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 10px;
  margin-top: 20px;
  text-align: center;
`;

const Body = styled.View`
  flex-direction: column;
  padding: 10px;
  padding-top: 20px;
  background-color: "#D8D8D8";
`;

const Target = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: #ffda79;
  border-radius: 10px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 30px;
  padding: 10px;
`;
const Footer = styled.View`
  justify-content: center;
  flex-direction: row;
`;

const LG = ({ navigation: { navigate } }) => (
  <Body style={{ flex: 1 }}>
    <Title>우리 집 LG 가전</Title>
    <Text style={{ marginTop: 10, marginBottom: 10, textAlign: "center" }}>
      첫번째 줄
    </Text>
    <Footer>
      <Target
        style={{ alignItems: "flex-start", flexDirection: "row" }}
        onPress={() => navigate("Stack", { screen: "Next" })}
      >
        <Ionicons name="tv-outline" size={24} color="black" />
        <Text
          style={{
            textAlign: "justify",
            marginTop: 4,
            marginLeft: 15,
            marginRight: 15,
          }}
        >
          스마트 TV
        </Text>
      </Target>
      <Target onPress={() => navigate("Stack", { screen: "Next" })}>
        <Text>설정</Text>
      </Target>
    </Footer>
    <Footer>
      <Target
        style={{ alignItems: "flex-start", flexDirection: "row" }}
        onPress={() => navigate("Stack", { screen: "Next" })}
      >
        <Ionicons name="tv-outline" size={24} color="black" />
        <Text
          style={{
            textAlign: "justify",
            marginTop: 4,
            marginLeft: 15,
            marginRight: 15,
          }}
        >
          스마트 TV
        </Text>
      </Target>
      <Target onPress={() => navigate("Stack", { screen: "Next" })}>
        <Text>설정</Text>
      </Target>
    </Footer>
    <Footer>
      <Target
        style={{ alignItems: "flex-start", flexDirection: "row" }}
        onPress={() => navigate("Stack", { screen: "Next" })}
      >
        <Ionicons name="tv-outline" size={24} color="black" />
        <Text
          style={{
            textAlign: "justify",
            marginTop: 4,
            marginLeft: 15,
            marginRight: 15,
          }}
        >
          스마트 TV
        </Text>
      </Target>
      <Target onPress={() => navigate("Stack", { screen: "Next" })}>
        <Text>설정</Text>
      </Target>
    </Footer>
  </Body>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    backgroundColor: "black",
  },
});
export default LG;

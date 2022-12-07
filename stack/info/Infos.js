import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import HighlightText from "react-native-highlight-underline-text";
import { MaterialIcons } from "@expo/vector-icons";

const Info = "영츠하이머 그게 뭔데?";
const Infos = ({ navigation: { navigate } }) => (
  <Body style={{ flex: 1 }}>
    <View style={{ alignItems: "center", margin: 10 }}>
      <HighlightText
        isFixed
        underlineSize={14}
        underlineColor="#ffda79"
        textStyle={{ fontSize: 28, fontWeight: "bold", color: "black" }}
        text={Info}
      />
    </View>
    <Intro>
      <Character
        source={require("/Users/leesukcheol/memento/assets/images/bbiyakinfo.png")}
      />
    </Intro>
    <View style={{ marginHorizontal: 11 }}>
      <Target onPress={() => navigate("Stack", { screen: "CurrentSituation" })}>
        <Type>
          <Txt style={{ color: "#FE9A2E" }}>INFO 1</Txt>
          <Txt style={{ marginLeft: 20, color: "white" }}>치매 현황</Txt>
          <MaterialIcons
            style={{ marginLeft: 100 }}
            name="arrow-forward-ios"
            size={24}
            color="#FE9A2E"
          />
        </Type>
      </Target>
      <Target onPress={() => navigate("Stack", { screen: "Risk" })}>
        <Type>
          <Txt style={{ color: "#FE9A2E" }}>INFO 2</Txt>
          <Txt style={{ marginLeft: 20, color: "white" }}>치매 위험성</Txt>
          <MaterialIcons
            style={{ marginLeft: 80 }}
            name="arrow-forward-ios"
            size={24}
            color="#FE9A2E"
          />
        </Type>
      </Target>
      <LastTarget onPress={() => navigate("Stack", { screen: "Prevent" })}>
        <Type>
          <Txt style={{ color: "#FE9A2E" }}>INFO 2</Txt>
          <Txt style={{ marginLeft: 20, color: "white" }}>치매 예방 방법</Txt>
          <MaterialIcons
            style={{ marginLeft: 58 }}
            name="arrow-forward-ios"
            size={24}
            color="#FE9A2E"
          />
        </Type>
      </LastTarget>
    </View>
  </Body>
);
const Body = styled.View`
  flex-direction: column;
  padding-top: 20px;
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
  margin-bottom: 195px;
  padding-horizontal: 10px;
  padding-vertical: 5px;
  box-shadow: 1px 1px 3px rgba(41, 30, 95, 0.9);
`;
const Txt = styled.Text`
  font-size: 20px;
  font-weight: bold;
  padding: 10px;
  padding-left: 0px;
  padding-right: 3px;
`; // 💡 아이콘에 디폴트 패딩이 있어서 오른쪽 패딩 넣어서 보정해줬음
const Intro = styled.View`
  margin-bottom: 25px;
`;
const Character = styled.Image`
  width: 350px;
  height: 210px;
  margin-left: 10px;
`;
export default Infos;

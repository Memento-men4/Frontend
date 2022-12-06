import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import HighlightText from "react-native-highlight-underline-text";

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
const Intro = styled.View`
  margin-bottom: 25px;
`;
const Character = styled.Image`
  width: 350px;
  height: 210px;
  margin-left: 10px;
`;

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
    <Target onPress={() => navigate("Stack", { screen: "CurrentSituation" })}>
      <Txt style={{ marginLeft: 30 }}>💡 치매 현황</Txt>
    </Target>
    <Target onPress={() => navigate("Stack", { screen: "Risk" })}>
      <Txt style={{ marginLeft: 30 }}>💡 치매 위험성</Txt>
    </Target>
    <Target onPress={() => navigate("Stack", { screen: "Prevent" })}>
      <Txt style={{ marginLeft: 30 }}>💡 치매 예방 방법</Txt>
    </Target>
  </Body>
);

export default Infos;

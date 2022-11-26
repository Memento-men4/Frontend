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
  box-shadow: 1px 1px 3px rgba(41, 30, 95, 0.9);
`;
const TextArea = styled.ScrollView`
  margin-top: 20px;
  margin-bottom: 50px;
  padding: 10px;
  background-color: #ffda79;
  border-top-left-radius: 30px;
  border-bottom-right-radius: 30px;
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
      <TextArea>
        <Text style={{ padding: 10, marginBottom: 10, textAlign: "justify" }}>
          영츠하이머를 예방하기 위해서, 먼저 치매의 위험성을 알 필요가 있습니다.
          치매란 정상적으로 생활하던 사람이 다양한 원인으로 인해 뇌가 손상되어
          후천적으로 기억력, 언어력, 판단력 등 여러 영역의 인지기능이 떨어져
          일상생활에 지장이 생기는 현상을 의미합니다. 현재까지 치료법이 없는
          치매는 조기 진단과 관리, 유지가 가장 중요하며, 이는 20~30대의 젊은 층
          또한 포함됩니다. 최근 들어 젊은 세대에서 치매의 초기 증상인 과도한
          건망증 현상을 겪는 사람이 급증하고 있고, 이에 따른 신조어인 젊음을
          의미하는 ‘young’과 알츠하이머의 ‘Alzheimer’를 합친
          ‘Youngzheimer(영츠하이머) 또한 생겨났습니다. 영츠하이머의 잠재적
          위험성이 큰 이유는, 규명된지 얼마 되지 않은 영츠하이머를 겪는 젊은
          사람들이 몇십 년 뒤에 어떻게 될지에 대한 통계 자료가 없다는 것입니다.
          그래서 우린 영츠하이머를 예방하기 위해, 치매의 현 주소 및 예방 방법을
          알아야 합니다.
        </Text>
      </TextArea>
    </Intro>
    <Target onPress={() => navigate("Stack", { screen: "Risk" })}>
      <Txt style={{ marginLeft: 30 }}>💡 치매 위험성</Txt>
    </Target>
    <Target onPress={() => navigate("Stack", { screen: "CurrentSituation" })}>
      <Txt style={{ marginLeft: 30 }}>💡 치매 현황</Txt>
    </Target>
    <Target onPress={() => navigate("Stack", { screen: "Prevent" })}>
      <Txt style={{ marginLeft: 30 }}>💡 치매 예방 방법</Txt>
    </Target>
  </Body>
);

export default Infos;

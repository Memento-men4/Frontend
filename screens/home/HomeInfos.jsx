import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import HighlightText from "react-native-highlight-underline-text";
import { MaterialIcons } from "@expo/vector-icons";

const Info = "영츠하이머 그게 뭔데?";
const HomeInfos = ({ navigation: { navigate } }) => (
  <Body style={{ alignContent: "flex-start", justifyContent: "center" }}>
    <TouchableOpacity
      style={{ marginTop: 30, marginLeft: 10 }}
      onPress={() => navigate("Main", { screen: "Home" })}
    >
      <Text style={{ fontSize: 30 }}>🔙</Text>
    </TouchableOpacity>
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
          <Txt style={{ marginLeft: 22, color: "white" }}>치매 현황</Txt>
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
`;
const Intro = styled.View`
  flex-direction: row;
  margin-bottom: 25px;
`;
const Character = styled.Image`
  width: 350px;
  height: 210px;
  margin-left: 10px;
`;
/**영츠하이머를 예방하기 위해서, 먼저 치매의 위험성을 알 필요가 있습니다.
치매란 정상적으로 생활하던 사람이 다양한 원인으로 인해 뇌가 손상되어
후천적으로 기억력, 언어력, 판단력 등 여러 영역의 인지기능이 떨어져
일상생활에 지장이 생기는 현상을 의미합니다. 현재까지 치료법이 없는
치매는 조기 진단과 관리, 유지가 가장 중요하며, 이는 20~30대의 젊은 층
또한 포함됩니다.  
<View style={{ justifyContent: "center", flex: 1 }}>
        <Character
          source={require("/Users/leesukcheol/memento/assets/images/bbiyaklovebig.png")}
        />
      </View>
      <View style={{ flex: 1.9, padding: 20, marginLeft: 20 }}>
        <TextArea>
          <Text style={{ fontSize: 11, padding: 10, fontWeight: "600" }}>
            젊음을 의미하는 ‘young’과 알츠하이머의 ‘Alzheimer’를 합친
            ‘Youngzheimer(영츠하이머)라는 단어를 뜻합니다.{"\n"}
            영츠하이머의 잠재적 위험성이 큰 이유는, 규명된지 얼마 되지 않아서
            영츠하이머를 겪는 젊은 사람들이 몇십 년 뒤에 어떻게 될지에 대한 통계
            자료가 없다는 것입니다.{"\n"}
            그래서 우린 영츠하이머를 예방하기 위해,{"\n"}
            치매의 현 주소와 예방 방법을 알아야 합니다.
          </Text>
        </TextArea>
      </View>
          
          
          
          
          */
export default HomeInfos;

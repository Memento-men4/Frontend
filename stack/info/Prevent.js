import React from "react";
import styled from "styled-components/native";
import { View, Text, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const Prevent = ({ navigation: { navigate } }) => (
  <Container>
    <View style={{ justifyContent: "center", alignContent: "flex-start" }}>
      <TouchableOpacity
        style={{ marginTop: 30 }}
        onPress={() => navigate("Main", { screen: "Home" })}
      >
        <Text style={{ fontSize: 30 }}>🔙</Text>
      </TouchableOpacity>
      <Txt>
        {"\n"}주기적으로 수학 능력, 언어 능력, 추리 능력 등을 테스트할 수 있는
        간단한 퀴즈 등을 진행한다. 쓰고, 읽고, 말하는 시간을 늘린다. 이 중에서도
        말하는 것이 가장 중요하다. 규칙적인 운동을 한다. 이 중에서도 유산소 운동
        위주로 하는 것이 중요하다. 이는 유산소 운동이 뇌세포의 에너지원인
        뇌유래신경영양인자(BDNF)를 활발하게 만들기 떄문이다. 나이가 들면 이
        물질이 점점 부족해지며, 치매 환자일 수록 줄어드는 속도가 빨라지는
        연구결과가 있다. 건강한 식습관을 가지는 것이 중요하다. {"\n"}비타민 C,
        비타민 E(토코페롤) 성분이 함유된 식품을 먹는 것이 좋다. 비타민은
        보조제의 형태보다는 식품의 형태로 섭취하는 것이 좋다. 토코페롤은 식물성
        기름, 현미와 잡곡류, 견과류(아몬드, 호두), 해바라기씨, 등푸른 생선,
        카페, 블루베리, 사과, 멜론, 아보카도 등의 섭취가 중요하다.{"\n"}
        불포화지방의 한 가지인 오메가-3 지방산은 뇌 세포막 인지질의 주요 구성
        성분이며 혈전 형성을 방지하고 항산화 작용 및 항염증 기능이 있다.
        네덜란드와 미국에서의 연구 결과 1주일에 1번이라도 오메가 3가 포함된
        생선류를 먹으면 알츠하이머병의 위험도가 60% 감소한다는 연구 결과가
        있었다. 반대로, 포화지방산이나 트랜스지방산을 많이 섭취할 경우
        알츠하이머 병의 위험도가 2배로 증가할 수 있어 육류 등의 고지방 음식이나,
        튀긴 음식은 피하는 것이 좋다.
        {"\n"}
      </Txt>
      <View style={{ alignSelf: "center" }}>
        <Attached
          source={require("/Users/leesukcheol/memento/assets/images/prevent1.png")}
        />
      </View>
      <Txt>
        {"\n"}치매안심센터를 통해 주기적으로 본인의 상태를 검진받고 상담하는
        것이 좋다. 이 외에도 주기적인 종합 건강 검진을 본인의 상태를 검진받아
        치매 위험도를 낮추는 것이 권장된다. 치매상담콜센터를 통해 정보 상담 등을
        하여 치매에 대한 전반적인 상담을 진행하고 도움을 받을 수 있다.{"\n"}
      </Txt>
      <View style={{ alignSelf: "center" }}>
        <Attached2
          source={require("/Users/leesukcheol/memento/assets/images/prevent2.png")}
        />
      </View>
      <Txt>
        {"\n"}
        {"\n"}
        {"\n"}
      </Txt>
    </View>
  </Container>
);

const Container = styled.ScrollView`
  padding: 10px;
`;
const Attached = styled.Image`
  width: 337px;
  height: 200px;
  border: 1px solid gray;
`;
const Attached2 = styled.Image`
  width: 340px;
  height: 210px;
  border: 1px solid gray;
`;
const Txt = styled.Text`
  text-align: justify;
`;
export default Prevent;

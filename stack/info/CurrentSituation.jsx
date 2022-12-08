import React from "react";
import styled from "styled-components/native";
import { View, Text, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const CurrentSituation = ({ navigation: { navigate } }) => (
  <Container>
    <View style={{ justifyContent: "center", alignContent: "flex-start" }}>
      <TouchableOpacity
        style={{ marginTop: 30 }}
        onPress={() => navigate("Main", { screen: "Home" })}
      >
        <Text style={{ fontSize: 30 }}>🔙</Text>
      </TouchableOpacity>
      <Txt>
        {"\n"}2020년 기준 대한민국 전체 인구는 51,349,259명이며, 이중 15.8%가
        65세 이상 노인으로 8,134,675명이다. 65세 이상 노인 중 치매를 앓고 있는
        사람은 약 83만명으로 10.2%의 비율을 나타낸다. 65세 이상 치매환자 중
        알츠하이머형 치매가 가장 많고(약 75.5%), 기타 유형의 치매는 25%에
        불과하다.{"\n"}
      </Txt>
      <View style={{ alignSelf: "center" }}>
        <Attached
          source={require("/Users/leesukcheol/memento/assets/images/current1.png")}
        />
      </View>
      <Txt>
        {"\n"}중앙치매센터는 전국 65세 이상 추정치매환자수는 2020년 약 84만명,
        2030년 136만명, 2040년 217만명, 2050년에는 300만명을 넘을 것으로
        예상한다.{"\n"}
      </Txt>
      <View style={{ alignSelf: "center" }}>
        <Attached2
          source={require("/Users/leesukcheol/memento/assets/images/current2.png")}
        />
      </View>
      <Txt>
        {"\n"}세계보건기구(WHO)에 따르면 전 세계 치매인구는 약 5,000만명이며
        2050년에는 1억 5,200만명으로 3배 넘게 증가할 것으로 추정된다.
        세계보건기구는 세계 사망 원인 5위가 치매임을 밝혔다. 치매노인실태조사에
        따르면 2010년 치매환자 1인당 연간 관리비용은 1,851만원이며 2020년에는
        2,061만원으로 추정된다. 치매환자 1인당 연간 관리비용은 가구당 월평균
        소득을 이용하여 산출한 연간 가구 소득 6,193만원의 33.2%를 차지해, 경제적
        부담이 매우 크다.{"\n"}
      </Txt>
      <View style={{ alignSelf: "center" }}>
        <Attached3
          source={require("/Users/leesukcheol/memento/assets/images/current3.png")}
        />
      </View>
      <Txt>
        {"\n"}2020년 기준 치매환자 연간 총 국가치매관리비용은 17조 3천억원으로
        GDP의 약 1%를 차지한다. 2020년 추정치매환자에 드는 국가 단위
        치매관리비용은 17.3조원, 2040년에는 약 56.9조원까지 증가할 것으로
        추정된다.{"\n"}
      </Txt>
      <View style={{ alignSelf: "center" }}>
        <Attached4
          source={require("/Users/leesukcheol/memento/assets/images/current4.png")}
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
  width: 300px;
  height: 200px;
  border: 1px solid gray;
`;
const Attached2 = styled.Image`
  width: 300px;
  height: 300px;
  border: 1px solid gray;
`;
const Attached3 = styled.Image`
  width: 314px;
  height: 144px;
  border: 1px solid gray;
`;
const Attached4 = styled.Image`
  width: 325px;
  height: 130px;
  border: 1px solid gray;
`;
const Txt = styled.Text`
  text-align: justify;
`;
export default CurrentSituation;

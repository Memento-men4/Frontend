import React from "react";
import styled from "styled-components/native";
import { View, Text, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const Risk = ({ navigation: { navigate } }) => (
  <Container>
    <View style={{ justifyContent: "center", alignContent: "flex-start" }}>
      <TouchableOpacity
        style={{ marginTop: 30 }}
        onPress={() => navigate("Main", { screen: "Home" })}
      >
        <Text style={{ fontSize: 30 }}>🔙</Text>
      </TouchableOpacity>
      <Txt>
        {"\n"}
        치매는 아직까지 완치가 불가능하며, 조기에 위험요인을 제거하거나 관리하는
        것 외에는 방법이 존재하지 않는다.{"\n"}
        {"\n"}중앙치매센터와 한국갤럽이 진행한 치매인식도 조사에 따르면, 60~69세
        노인들이 가장 두려워하는 질병은 치매(43%)였다.{"\n"}
        {"\n"}대한민국 10대 사망원인은 암, 심장 질환, 폐렴, 뇌혈관 질환, 자살,
        당뇨병, 알츠하이머병, 간 질환, 패혈증, 고혈압성 질환 순으로 나타났다.
        {"\n"}
        {"\n"}치매 환자는 전반적인 인지 능력, 공감인식 감각, 기억력 감퇴, 판단력
        저하 등을 야기한다.
      </Txt>
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

const Txt = styled.Text`
  text-align: justify;
`;
export default Risk;

import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

const Btn = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #ffda79;
  margin: 110px;
  margin-top: 250px;
  margin-bottom: 250px;
  padding: 10px;
  border-radius: 100px;
`;
// 다크모드
// background-color: ${(props) => props.theme.mainBgColor};
const Txt = styled.Text`
  font-size: 20px;
  color: ${(props) => props.theme.textColor};
`;

//color: ${(props) => (props.selected ? "red" : "blue")};
//selected={true}
const Recording = ({ navigation: { navigate } }) => (
  <View style={{ flex: 1, backgroundColor: "white", justifyContent: "center" }}>
    <Btn
    //onPress={() => navigate("Stack", { screen: "Days" })}
    >
      <Ionicons name="mic" size={40} color="red" />
    </Btn>
  </View>
);
//근로 가서 실제 음성 녹음 가져오기
export default Recording;

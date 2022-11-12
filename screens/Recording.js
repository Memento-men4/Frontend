import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import styled from "styled-components/native";

const Btn = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.mainBgColor};
`;

const Txt = styled.Text`
  font-size: 20px;
  color: ${(props) => props.theme.textColor};
`;
//color: ${(props) => (props.selected ? "red" : "blue")};
//selected={true}
const Recording = ({ navigation: { navigate } }) => (
  <Btn
    //onPress={() => navigate("Stack", { screen: "Days" })}
    style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
  >
    <Txt>Recording</Txt>
    <Txt>Recording</Txt>
  </Btn>
);

export default Recording;

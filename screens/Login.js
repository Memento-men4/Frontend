import React from "react";
import { View, TextInput, TouchableOpacity, Alert, Text } from "react-native";
import styled from "styled-components/native";
import HighlightText from "react-native-highlight-underline-text";
import { loginFlag } from "../atom";
import { useRecoilState } from "recoil";

const Login = ({ navigation: { navigate } }) => {
  const [flag, setFlag] = useRecoilState(loginFlag);
  const line = "로그인 페이지";
  return (
    <View style={{ justifyContent: "center", alignSelf: "center" }}>
      <Character
        source={require("/Users/leesukcheol/memento/assets/images/bbiyaklovebig.png")}
      />
      <MEMENTO
        source={require("/Users/leesukcheol/memento/assets/images/memento.png")}
      />
      <View style={{ flexDirection: "row", marginLeft: 15 }}>
        <View>
          <View style={{ flexDirection: "row", marginBottom: 20 }}>
            <Text style={{ fontSize: 20, marginRight: 31 }}>ID: </Text>
            <TextInput
              placeholder="아이디"
              autoCorrect={false}
              keyboardType="email-address"
              style={{ backgroundColor: "white", width: 150 }}
            />
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 20, marginRight: 20 }}>PW: </Text>
            <TextInput
              keyboardType="email-address"
              autoCorrect={false}
              placeholder="비밀번호"
              secureTextEntry={true}
              style={{ backgroundColor: "white", width: 150 }}
            />
          </View>
        </View>
        <LoginView>
          <TouchableOpacity
            onPress={() => {
              setFlag(1);
              navigate("Main", { screen: "Home" });
              Alert.alert("Login");
            }}
            style={{ alignItems: "center", margin: 20 }}
          >
            <Text>로그인</Text>
          </TouchableOpacity>
        </LoginView>
      </View>
    </View>
  );
};

const LoginView = styled.View`
  background-color: #d4d4d4;
  border-radius: 10px;
  align-self: center;
  margin-left: 20px;
`;
const Character = styled.Image`
  width: 150px;
  height: 200px;
  align-self: center;
  margin-right: 25px;
  margin-top: 35px;
`;
const MEMENTO = styled.Image`
  width: 220px;
  height: 31px;
  align-self: center;
  margin-left: 7px;
  margin-top: 25px;
  margin-bottom: 35px;
`;

export default Login;

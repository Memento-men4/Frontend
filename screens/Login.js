import React from "react";
import { View, Text, StyleSheet } from "react-native";
import styled from "styled-components/native";

const Login = () => {
  //{ navigation: { navigate } }
  return (
    <View>
      <Text>로그인 페이지</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    backgroundColor: "black",
  },
});
export default Login;

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import styled from "styled-components/native";
import HighlightText from "react-native-highlight-underline-text";

const Login = () => {
  //{ navigation: { navigate } }
  const line = "로그인 페이지";
  return (
    <View style={{ alignItems: "center", margin: 20 }}>
      <HighlightText
        isFixed
        underlineSize={8}
        underlineColor="#ffda79"
        textStyle={{ fontSize: 24, fontWeight: "bold", color: "black" }}
        text={line}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "white",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    backgroundColor: "black",
  },
});
export default Login;

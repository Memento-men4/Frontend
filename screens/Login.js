import React from "react";
import { View, Text, StyleSheet } from "react-native";
const Login = ({ navigation: { navigate } }) => (
  <View style={styles.container}>
    <Text style={styles.text}>로그인 페이지</Text>
  </View>
);

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

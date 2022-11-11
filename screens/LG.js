import React from "react";
import { View, Text, StyleSheet } from "react-native";
const Info = ({ navigation: { navigate } }) => (
  <View style={styles.container}>
    <Text style={styles.text}>LGLGLGLGLGLGL</Text>
    <Text style={styles.text}>ㅋㅋㅋㅋ</Text>
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
export default Info;

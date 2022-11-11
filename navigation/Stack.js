import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View, TouchableOpacity, Button, StyleSheet } from "react-native";
import styled from "styled-components/native";

const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Body = styled.View`
  flex-direction: column;
  padding: 10px;
  padding-top: 20px;
  background-color: "#D8D8D8";
`;

const Target = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: #ffda79;
  border-radius: 10px;
  margin-bottom: 50px;
`;

const Days = ({ navigation: { navigate } }) => (
  <View
    //onPress={() => navigate("Tabs", { screen: "Home" })}
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Title>타임라인 들어가야하고..</Title>
  </View>
);
const Infos = ({ navigation: { navigate } }) => (
  <Body>
    <Title>The Information</Title>
    <Text style={{ marginTop: 10, marginBottom: 10 }}>
      이하늘은 치매에 걸린 것이 분명하다
    </Text>
    <Text style={{ marginTop: 10, marginBottom: 10 }}>
      이유는 없다 그냥 치매에 걸린 것 같다
    </Text>
    <Text style={{ marginTop: 10, marginBottom: 100 }}>
      그는 영츠하이머 초기 증상을 가지고 있다 나는 아무튼 아니다
    </Text>
    <Target onPress={() => navigate("Stack", { screen: "Next" })}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>
        👉 치매 위험성 👈
      </Text>
    </Target>
    <Target onPress={() => navigate("Stack", { screen: "Next2" })}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>
        👉 치매 2021 현황 👈
      </Text>
    </Target>
    <Target onPress={() => navigate("Stack", { screen: "Next3" })}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>
        👉 치매 예방 방법 👈
      </Text>
    </Target>
  </Body>
);
const Next = ({ navigation: { navigate } }) => (
  <View
    //onPress={() => navigate("Tabs", { screen: "Home" })}
    style={{ flex: 1, justifyContent: "center", alignContent: "flex-start" }}
  >
    <Text>치매의 위험성을 소개하는 농담곰</Text>
  </View>
);
const Next2 = ({ navigation: { navigate } }) => (
  <View
    //onPress={() => navigate("Tabs", { screen: "Home" })}
    style={{ flex: 1, justifyContent: "center", alignContent: "flex-start" }}
  >
    <Text>치매의 현황을 소개하는 농담곰</Text>
  </View>
);
const Next3 = ({ navigation: { navigate } }) => (
  <View
    //onPress={() => navigate("Tabs", { screen: "Home" })}
    style={{ flex: 1, justifyContent: "center", alignContent: "flex-start" }}
  >
    <Text>치매를 예방하는 방법을 소개하는 농담곰</Text>
  </View>
);
const Game = ({ navigation: { navigate } }) => (
  <View
    //onPress={() => navigate("Tabs", { screen: "Home" })}
    style={{ flex: 1, justifyContent: "center", alignContent: "flex-start" }}
  >
    <Text>게임이 여기에 있어야 해요</Text>
  </View>
);
const NativeStack = createNativeStackNavigator();

const Stack = () => (
  <NativeStack.Navigator screenOptions={{ headerBackTitleVisible: false }}>
    <NativeStack.Screen
      name="Days"
      component={Days}
      options={{ headerShown: false }}
    />
    <NativeStack.Screen
      name="Infos"
      component={Infos}
      options={{ headerShown: false }}
    />
    <NativeStack.Screen
      name="Next"
      component={Next}
      options={{ headerShown: false }}
    />
    <NativeStack.Screen
      name="Next2"
      component={Next2}
      options={{ headerShown: false }}
    />
    <NativeStack.Screen
      name="Next3"
      component={Next3}
      options={{ headerShown: false }}
    />
    <NativeStack.Screen
      name="Game"
      component={Game}
      options={{ headerShown: false }}
    />
  </NativeStack.Navigator>
);

export default Stack;

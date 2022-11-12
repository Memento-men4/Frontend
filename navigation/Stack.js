import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View, TouchableOpacity, Button, StyleSheet } from "react-native";
import styled from "styled-components/native";

const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 10px;
  margin-top: 20px;
  text-align: center;
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
  padding: 10px;
`;
const Txt = styled.Text`
  font-size: 20px;
  font-weight: bold;
  padding: 10px;
  padding-left: 0px;
  padding-right: 3px;
`; // 💡 아이콘에 디폴트 패딩이 있어서 오른쪽 패딩 넣어서 보정해줬음

const Days = ({ navigation: { navigate } }) => (
  <Body
    //onPress={() => navigate("Tabs", { screen: "Home" })}
    style={{
      flex: 1,
    }}
  >
    <TouchableOpacity
      style={{ marginTop: 20, marginLeft: 0 }}
      onPress={() => navigate("Main", { screen: "Home" })} // Root에 있는 name=""을 앞에 적어줘야함
    >
      <Text style={{ fontSize: 30 }}>🔙</Text>
    </TouchableOpacity>
    <Title>타임라인 들어가야하고..</Title>
  </Body>
);
const Infos = ({ navigation: { navigate } }) => (
  <Body style={{ flex: 1 }}>
    <TouchableOpacity
      style={{ marginTop: 20, marginLeft: 0 }}
      onPress={() => navigate("Main", { screen: "Home" })} // Root에 있는 name=""을 앞에 적어줘야함
    >
      <Text style={{ fontSize: 30 }}>🔙</Text>
    </TouchableOpacity>
    <Title>The Information</Title>
    <Text style={{ marginTop: 10, marginBottom: 10, textAlign: "center" }}>
      첫번째 줄
    </Text>
    <Text style={{ marginTop: 10, marginBottom: 10, textAlign: "center" }}>
      두번째 줄
    </Text>
    <Text style={{ marginTop: 10, marginBottom: 100, textAlign: "center" }}>
      세번째 줄
    </Text>
    <Target
      //style={{ alignItems: "flex-start" }}
      onPress={() => navigate("Stack", { screen: "Next" })}
    >
      <Txt style={{ backgroundColor: "skyblue" }}>💡 치매 위험성</Txt>
    </Target>
    <Target
      //style={{ alignItems: "flex-start" }}
      onPress={() => navigate("Stack", { screen: "Next2" })}
    >
      <Txt>💡 치매 현황</Txt>
    </Target>
    <Target
      //style={{ alignItems: "flex-start" }}
      onPress={() => navigate("Stack", { screen: "Next3" })}
    >
      <Txt>💡 치매 예방 방법</Txt>
    </Target>
  </Body>
);
const Next = ({ navigation: { navigate } }) => (
  <View
    //onPress={() => navigate("Tabs", { screen: "Home" })}
    style={{ justifyContent: "center", alignContent: "flex-start" }}
  >
    <TouchableOpacity
      style={{ marginTop: 40, marginLeft: 10 }}
      onPress={() => navigate("Stack", { screen: "Infos" })}
    >
      <Text style={{ fontSize: 30 }}>🔙</Text>
    </TouchableOpacity>
    <Text>치매의 위험성을 소개하는 농담곰</Text>
  </View>
);
const Next2 = ({ navigation: { navigate } }) => (
  <View
    //onPress={() => navigate("Tabs", { screen: "Home" })}
    style={{ justifyContent: "center", alignContent: "flex-start" }}
  >
    <TouchableOpacity
      style={{ marginTop: 40, marginLeft: 10 }}
      onPress={() => navigate("Stack", { screen: "Infos" })}
    >
      <Text style={{ fontSize: 30 }}>🔙</Text>
    </TouchableOpacity>
    <Text>치매의 현황을 소개하는 농담곰</Text>
  </View>
);
const Next3 = ({ navigation: { navigate } }) => (
  <View
    //onPress={() => navigate("Tabs", { screen: "Home" })}
    style={{ justifyContent: "center", alignContent: "flex-start" }}
  >
    <TouchableOpacity
      style={{ marginTop: 40, marginLeft: 10 }}
      onPress={() => navigate("Stack", { screen: "Infos" })}
    >
      <Text style={{ fontSize: 30 }}>🔙</Text>
    </TouchableOpacity>
    <Text>치매를 예방하는 방법을 소개하는 농담곰</Text>
  </View>
);
const Game = ({ navigation: { navigate } }) => (
  <View
    //onPress={() => navigate("Tabs", { screen: "Home" })}
    style={{ justifyContent: "center", alignContent: "flex-start" }}
  >
    <TouchableOpacity
      style={{ marginTop: 40, marginLeft: 10 }}
      onPress={() => navigate("Main", { screen: "Home" })}
    >
      <Text style={{ fontSize: 30 }}>🔙</Text>
    </TouchableOpacity>

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

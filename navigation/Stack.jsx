import React, { useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Alert,
} from "react-native";
import styled from "styled-components/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Timeline from "react-native-timeline-flatlist";
import Voice from "react-native-voice";
import Recording from "../screens/Recording";
import Login from "../screens/Login";
import HighlightText from "react-native-highlight-underline-text";
import Game1 from "../stack/Game1";
import Game2 from "../stack/Game2";
import Game3 from "../stack/Game3";
const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  margin-top: 20px;
  text-align: center;
`;
const Body = styled.View`
  flex-direction: column;
  padding-top: 20px;
  background-color: white;
`;
const Target = styled.TouchableOpacity`
  justify-content: center;
  align-items: flex-start;
  background-color: #ffda79;
  border-radius: 10px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 50px;
  padding: 10px;
  box-shadow: 1px 1px 3px rgba(41, 30, 95, 0.9);
`;
const Txt = styled.Text`
  font-size: 20px;
  font-weight: bold;
  padding: 10px;
  padding-left: 0px;
  padding-right: 3px;
`; // 💡 아이콘에 디폴트 패딩이 있어서 오른쪽 패딩 넣어서 보정해줬음
const Back = styled.TouchableOpacity``;
const Intro = styled.View`
  box-shadow: 1px 1px 3px rgba(41, 30, 95, 0.9);
`;
const TextArea = styled.ScrollView`
  margin-top: 20px;
  margin-bottom: 50px;
  padding: 10px;
  background-color: #ffda79;
  border-top-left-radius: 30px;
  border-bottom-right-radius: 30px;
`;

//var tmp = "";
//var tmp2 = "";
const TimeLine = () => {
  const dummy = [
    { time: "09:00", title: "한양대학교", description: `${tmp}` },
    { time: "10:45", title: "세탁기", description: "실행하러 고고" },
    {
      time: "12:00",
      title: "마쿠마라탕",
      description: "마쿠마라탕에서 마라탕을 먹었다",
    },
    { time: "14:00", title: "스타일러", description: "실행하러 고고" },
    { time: "16:30", title: "집", description: `${tmp2}` },
  ];
  const [data, setData] = useState([]);
  const [tmp, setTmp] = useState("");
  const [tmp2, setTmp2] = useState("");
  useEffect(() => {
    AsyncStorage.getItem("Text", (err, result) => {
      if (result != null) {
        //setData(result);
        setData((data) => [...data, result]);
        setTmp(result);
        setTmp2(result);
      }
    });
  }, []);
  //tmp = data[0];
  //tmp2 = data[1];
  return (
    <Timeline
      data={dummy}
      separator={true}
      lineColor="#ffda79"
      innerCircle={"dot"}
      circleColor="#ffda79"
      circleSize={20}
      descriptionStyle={{ color: "gray" }}
      options={{
        style: { padding: 20 },
      }}
      onEventPress={(event) => {
        console.log(event);
        alert(tmp2);
      }}
    />
  );
};

const Days = ({ navigation: { navigate } }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    AsyncStorage.getItem("Text", (err, result) => {
      //array.push(result);
      setData(result);
    });
  }, []);
  // 하늘: 서버로부터 추천 목록이랑 실제 실행 목록 두가지 api가 넘어온다.
  // 실제실행: [세탁기] 전체(=추천): [세탁기, 스타일러]인데
  // 둘 다 띄워주면 세탁기 세탁기 스타일러. 이렇게 뜨면 안되니까
  // 전체에 있는 세탁기가 실제실행 리스트에 있을 경우 전체에서 빼주는 식으로 해야할듯

  return (
    <Body style={{ flex: 1 }}>
      <Back
        style={{ marginTop: 20, marginLeft: 10 }}
        onPress={() => navigate("Main", { screen: "Home" })} // Root에 있는 name=""을 앞에 적어줘야함
      >
        <Text style={{ fontSize: 30 }}>🔙</Text>
      </Back>
      <Title style={{ marginBottom: 30 }}>{data}</Title>
      <ScrollView>
        <TimeLine />
      </ScrollView>
    </Body>
  );
};
const Info = "영츠하이머 그게 뭔데?";
const Infos = ({ navigation: { navigate } }) => (
  <Body style={{ flex: 1 }}>
    <Back
      style={{ marginTop: 20, marginLeft: 10 }}
      onPress={() => navigate("Main", { screen: "Home" })} // Root에 있는 name=""을 앞에 적어줘야함
    >
      <Text style={{ fontSize: 30 }}>🔙</Text>
    </Back>
    <View style={{ alignItems: "center", margin: 20 }}>
      <HighlightText
        isFixed
        underlineSize={14}
        underlineColor="#ffda79"
        textStyle={{ fontSize: 28, fontWeight: "bold", color: "black" }}
        text={Info}
      />
    </View>

    <Intro>
      <TextArea>
        <Text style={{ padding: 10, marginBottom: 10, textAlign: "justify" }}>
          영츠하이머를 예방하기 위해서, 먼저 치매의 위험성을 알 필요가 있습니다.
          치매란 정상적으로 생활하던 사람이 다양한 원인으로 인해 뇌가 손상되어
          후천적으로 기억력, 언어력, 판단력 등 여러 영역의 인지기능이 떨어져
          일상생활에 지장이 생기는 현상을 의미합니다. 현재까지 치료법이 없는
          치매는 조기 진단과 관리, 유지가 가장 중요하며, 이는 20~30대의 젊은 층
          또한 포함됩니다. 최근 들어 젊은 세대에서 치매의 초기 증상인 과도한
          건망증 현상을 겪는 사람이 급증하고 있고, 이에 따른 신조어인 젊음을
          의미하는 ‘young’과 알츠하이머의 ‘Alzheimer’를 합친
          ‘Youngzheimer(영츠하이머) 또한 생겨났습니다. 영츠하이머의 잠재적
          위험성이 큰 이유는, 규명된지 얼마 되지 않은 영츠하이머를 겪는 젊은
          사람들이 몇십 년 뒤에 어떻게 될지에 대한 통계 자료가 없다는 것입니다.
          그래서 우린 영츠하이머를 예방하기 위해, 치매의 현 주소 및 예방 방법을
          알아야 합니다.
        </Text>
      </TextArea>
    </Intro>
    <Target onPress={() => navigate("Stack", { screen: "Next" })}>
      <Txt style={{ marginLeft: 30 }}>💡 치매 위험성</Txt>
    </Target>
    <Target onPress={() => navigate("Stack", { screen: "Next2" })}>
      <Txt style={{ marginLeft: 30 }}>💡 치매 현황</Txt>
    </Target>
    <Target onPress={() => navigate("Stack", { screen: "Next3" })}>
      <Txt style={{ marginLeft: 30 }}>💡 치매 예방 방법</Txt>
    </Target>
  </Body>
);
const Next = ({ navigation: { navigate } }) => (
  <View style={{ justifyContent: "center", alignContent: "flex-start" }}>
    <Back
      style={{ marginTop: 40, marginLeft: 10 }}
      onPress={() => navigate("Stack", { screen: "Infos" })}
    >
      <Text style={{ fontSize: 30 }}>🔙</Text>
    </Back>
    <Title>치매 위험성</Title>
  </View>
);
const Next2 = ({ navigation: { navigate } }) => (
  <View style={{ justifyContent: "center", alignContent: "flex-start" }}>
    <Back
      style={{ marginTop: 40, marginLeft: 10 }}
      onPress={() => navigate("Stack", { screen: "Infos" })}
    >
      <Text style={{ fontSize: 30 }}>🔙</Text>
    </Back>
    <Text>치매의 현황을 소개하는 농담곰</Text>
  </View>
);
const Next3 = ({ navigation: { navigate } }) => (
  <View style={{ justifyContent: "center", alignContent: "flex-start" }}>
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
  <View style={{ justifyContent: "center", alignContent: "flex-start" }}>
    <Back
      style={{ marginTop: 40, marginLeft: 10, marginBottom: 40 }}
      onPress={() => navigate("Main", { screen: "Home" })}
    >
      <Text style={{ fontSize: 30 }}>🔙</Text>
    </Back>
    <Target onPress={() => navigate("Stack", { screen: "Game1" })}>
      <Txt style={{ marginLeft: 30 }}>💡 치매 예방 게임 1</Txt>
    </Target>
    <Target onPress={() => navigate("Stack", { screen: "Game2" })}>
      <Txt style={{ marginLeft: 30 }}>💡 치매 예방 게임 2</Txt>
    </Target>
    <Target onPress={() => navigate("Stack", { screen: "Game3" })}>
      <Txt style={{ marginLeft: 30 }}>💡 치매 예방 게임 3</Txt>
    </Target>
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
    <NativeStack.Screen
      name="Game1"
      component={Game1}
      options={{ headerShown: false }}
    />
    <NativeStack.Screen
      name="Game2"
      component={Game2}
      options={{ headerShown: false }}
    />
    <NativeStack.Screen
      name="Game3"
      component={Game3}
      options={{ headerShown: false }}
    />
  </NativeStack.Navigator>
);

export default Stack;

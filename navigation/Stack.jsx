import React, { useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { AsyncStorage } from "@react-native-async-storage/async-storage";
import Timeline from "react-native-timeline-flatlist";
import styled from "styled-components/native";

import { RecordText1, RecordText2, RecordText3, RecordText4 } from "../atom";
import { useRecoilState, atom } from "recoil";

//import Days from "../stack/calendarDay/Days";
import Infos from "../stack/info/Infos";
import Risk from "../stack/info/Risk";
import CurrentSituation from "../stack/info/CurrentSituation";
import Prevent from "../stack/info/Prevent";
import Game from "../stack/game/Game";
import Game1 from "../stack/game/Game1";
import Game2 from "../stack/game/Game2";
import Game3 from "../stack/game/Game3";
import HomeInfos from "../screens/home/HomeInfos";
import HomeGame from "../screens/home/HomeGame";
import HomeDiagnosis from "../screens/home/HomeDiagnosis";
import Write from "../screens/Write";

const Body = styled.View`
  flex-direction: column;
  padding-top: 20px;
  background-color: white;
`;
const Back = styled.TouchableOpacity``;
const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  margin-top: 20px;
  text-align: center;
`;
//var tmp = "";
//var tmp2 = "";
const TimeLine = () => {
  const [text, setText] = useRecoilState(RecordText1);
  const [text2, setText2] = useRecoilState(RecordText2);
  const [text3, setText3] = useRecoilState(RecordText3);
  const [text4, setText4] = useRecoilState(RecordText4);
  const dummy = [
    { time: "09:00", title: "한양대학교", description: `${text}` },
    { time: "10:45", title: "세탁기", description: `${text2}` },
    {
      time: "12:00",
      title: "마쿠마라탕",
      description: "마쿠마라탕에서 마라탕을 먹었다",
    },
    { time: "14:00", title: "스타일러", description: `${text3}` },
    { time: "16:30", title: "집", description: `${text4}` },
  ];

  /*useEffect(() => {
    AsyncStorage.getItem("Text", (err, result) => {
      if (result != null) {
        //setData(여기당);
        setData((data) => [...data, result]);
        setTmp(result);
        setTmp2(result);
      }
    });
  }, []);
  */

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
        alert();
      }}
    />
  );
};

const Days = ({ navigation: { navigate } }) => {
  /*const [data, setData] = useState([]);
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
*/
  return (
    <Body style={{ flex: 1 }}>
      <Back
        style={{ marginTop: 20, marginLeft: 10 }}
        onPress={() => navigate("Main", { screen: "Home" })} // Root에 있는 name=""을 앞에 적어줘야함
      >
        <Text style={{ fontSize: 30 }}>🔙</Text>
      </Back>
      <Title style={{ marginBottom: 30 }}>안녕하냐 자식아</Title>
      <TimeLine />
    </Body>
  );
};

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
      name="Risk"
      component={Risk}
      options={{ headerShown: false }}
    />
    <NativeStack.Screen
      name="CurrentSituation"
      component={CurrentSituation}
      options={{ headerShown: false }}
    />
    <NativeStack.Screen
      name="Prevent"
      component={Prevent}
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
    <NativeStack.Screen
      name="HomeInfos"
      component={HomeInfos}
      options={{ headerShown: false }}
    />
    <NativeStack.Screen
      name="HomeGame"
      component={HomeGame}
      options={{ headerShown: false }}
    />
    <NativeStack.Screen
      name="HomeDiagnosis"
      component={HomeDiagnosis}
      options={{ headerShown: false }}
    />
    <NativeStack.Screen
      name="Write"
      component={Write}
      options={{ headerShown: false }}
    />
  </NativeStack.Navigator>
);

export default Stack;

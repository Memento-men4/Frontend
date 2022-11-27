import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { AsyncStorage } from "@react-native-async-storage/async-storage";
import Timeline from "react-native-timeline-flatlist";
import styled from "styled-components/native";

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

export default Days;

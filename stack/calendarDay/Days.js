import React, { useEffect } from "react";
import { Text } from "react-native";
import { RecordText1, RecordText2, RecordText3, RecordText4 } from "../../atom";
import { useRecoilState, atom } from "recoil";
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
const TimeLine = () => {
  const [text1, setText1] = useRecoilState(RecordText1);
  const [text2, setText2] = useRecoilState(RecordText2);
  const [text3, setText3] = useRecoilState(RecordText3);
  const [text4, setText4] = useRecoilState(RecordText4);

  const dummy = [
    { time: "09:00", title: "한양대학교", description: `${text1}` },
    { time: "10:45", title: "세탁기", description: `${text2}` },
    {
      time: "12:00",
      title: "마쿠마라탕",
      description: "마쿠마라탕에서 마라탕을 먹었다",
    },
    { time: "14:00", title: "스타일러", description: `${text3}` },
    { time: "16:30", title: "집", description: `${text4}` },
  ];
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
      <Title style={{ marginBottom: 30 }}>안녕하냐!!!</Title>
      <TimeLine />
    </Body>
  );
};

export default Days;

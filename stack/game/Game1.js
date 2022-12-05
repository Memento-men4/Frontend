import React, { useState, useEffect, useRef } from "react";
import { TouchableOpacity, Text, View, Alert, StyleSheet } from "react-native";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import Voice from "react-native-voice";
import { useIsFocused } from "@react-navigation/native";

const Record = () => {
  // hook
  const [isRecord, setIsRecord] = useState(false); // 녹음 중인지 아닌지
  const [text, setText] = useState(""); // 녹음한 텍스트
  const buttonLabel = isRecord ? "녹음 끝! 전송하기" : "녹음 시작하기"; // 녹음 중이면 전송, 아니면 시작
  const voiceLabel = text
    ? text
    : isRecord
    ? "Recording..."
    : "정답을 말해주세요!";
  // hook
  const _onSpeechStart = () => {
    // 음성인식 시작
    console.log("onSpeechStart");
    console.log("Answer:", AnswerText);
  };
  const _onSpeechEnd = () => {
    // 녹음이 끝나면
    console.log("onSpeechEnd");
    if (text === AnswerText) {
      console.log(text, AnswerText, "정답");
      //Alert.alert(text, AnswerText);
    }
    if (text !== AnswerText) {
      console.log(text, AnswerText, "오답");
      //Alert.alert(AnswerText, text);
    }
    Alert.alert("녹음 끝! 타임라인에 반영됩니다.");
  };
  const _onSpeechResults = (event) => {
    // 음성인식 결과
    console.log("onSpeechResults");
    setText(event.value[0]);
    // 음성인식 결과를 text에 저장
    //console.log(event.value[0]); // 음성인식 결과 출력
    console.log(event.value[0].length); // 음성인식 결과 길이
  };
  const _onSpeechError = (event) => {
    // 에러 발생시
    Alert.alert("녹음 에러 발생! 다시 시도하세요.");
    console.log("_onSpeechError");
    console.log(event.error);
  };

  const _onRecordVoice = () => {
    // 녹음 시작
    if (isRecord) {
      Voice.stop(); // 녹음 중지
    } else {
      Voice.start("ko-KR"); // 한국어
    }
    setIsRecord(!isRecord); // 상태 변경
  };

  useEffect(() => {
    Voice.onSpeechStart = _onSpeechStart;
    Voice.onSpeechEnd = _onSpeechEnd;
    Voice.onSpeechResults = _onSpeechResults;
    Voice.onSpeechError = _onSpeechError;
    //AsyncStorage.setItem("Text", text); // 이걸 보내야함? 정답처리 걍 프론트에서
    return () => {
      Voice.destroy().then(Voice.removeAllListeners); // 컴포넌트가 사라질 때
    };
  }, []); //[]에 text를 넣으면 text가 바뀔 때마다 useEffect가 실행되는데 그럼 스트링 한 번밖에 못 받아서 빼야함.
  return (
    <Container>
      <VoiceText>{voiceLabel}</VoiceText>
      <ButtonRecord onPress={_onRecordVoice} title={buttonLabel} />
    </Container>
  );
};
var AnswerText = "";
const Game1 = ({ navigation: { navigate } }) => {
  // hook
  const [isRecord, setIsRecord] = useState(false); // 녹음 중인지 아닌지
  const [text, setText] = useState(""); // 녹음한 텍스트
  const buttonLabel = isRecord ? "녹음 끝! 전송하기" : "녹음 시작하기"; // 녹음 중이면 전송, 아니면 시작
  const voiceLabel = text
    ? text
    : isRecord
    ? "Recording..."
    : "정답을 말해주세요!";
  // hook
  const isFocused = useIsFocused();
  const [count, setCount] = useState(-1);
  const answer = ["빨강 파랑 노랑 초록", "파랑 빨강 초록 노랑"];
  const answerText1 = useRef(answer[0]);
  const answerText2 = useRef(answer[1]);
  useEffect(() => {
    setCount(count + 1);
  }, [isFocused]);
  const words = {
    red: ["파랑", "노랑", "검정", "초록"],
    blue: ["노랑", "검정", "초록", "빨강"],
    yellow: ["검정", "초록", "빨강", "파랑"],
    green: ["빨강", "파랑", "노랑", "검정"],
  };
  const Colors = () => (
    <ColorList>
      <View>
        <Text style={{ fontSize: 25, fontWeight: "bold", color: "red" }}>
          {words["red"][count % 3]}
        </Text>
      </View>
      <View>
        <Text style={{ fontSize: 25, fontWeight: "bold", color: "blue" }}>
          {words["blue"][count % 3]}
        </Text>
      </View>
      <View>
        <Text style={{ fontSize: 25, fontWeight: "bold", color: "yellow" }}>
          {words["yellow"][count % 3]}
        </Text>
      </View>
      <View>
        <Text style={{ fontSize: 25, fontWeight: "bold", color: "green" }}>
          {words["green"][count % 3]}
        </Text>
      </View>
    </ColorList>
  );
  const Colors2 = () => (
    <ColorList>
      <Text style={{ fontSize: 25, fontWeight: "bold", color: "blue" }}>
        {words["blue"][count % 3]}
      </Text>
      <Text style={{ fontSize: 25, fontWeight: "bold", color: "red" }}>
        {words["red"][count % 3]}
      </Text>
      <Text style={{ fontSize: 25, fontWeight: "bold", color: "green" }}>
        {words["green"][count % 3]}
      </Text>
      <Text style={{ fontSize: 25, fontWeight: "bold", color: "yellow" }}>
        {words["yellow"][count % 3]}
      </Text>
    </ColorList>
  );
  return (
    <View
      style={{ flex: 1, justifyContent: "center", alignContent: "flex-start" }}
    >
      <Back
        style={{ marginTop: 40, marginLeft: 10 }}
        onPress={() => navigate("Main", { screen: "Home" })}
      >
        <Text style={{ fontSize: 30 }}>🔙</Text>
      </Back>
      <Title>치매 게임 111111</Title>
      <View style={{ backgroundColor: "#D4D4D4" }}>
        {count % 2 === 0 ? <Colors /> : <Colors2 />}
      </View>
      <View style={{ marginTop: 20 }}>
        <Text>
          {count % 2 === 0 ? answerText1.current : answerText2.current}
          {console.log(count)}
        </Text>
      </View>
      <Record />
    </View>
  );
};
const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f5fcff;
`;
const ButtonRecord = styled.Button`
  background-color: black;
`;
const VoiceText = styled.Text`
  margin: 32px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;
const Back = styled.TouchableOpacity``;
const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  margin-top: 20px;
  text-align: center;
`;
const ColorList = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 40px;
  margin-left: 25px;
  margin-right: 25px;
`;
export default Game1;

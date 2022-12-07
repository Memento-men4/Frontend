import React, { useState, useEffect, useRef } from "react";
import { Text, View, Alert, StyleSheet } from "react-native";
import styled from "styled-components/native";
import Voice from "react-native-voice";
import { useIsFocused } from "@react-navigation/native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

var AnswerText = "";
const Game1 = ({ navigation: { navigate } }) => {
  const isFocused = useIsFocused();
  const [count, setCount] = useState(-1);
  const answer = ["빨강 파랑 노랑 초록", "파랑 빨강 초록 노랑"];
  const answerText1 = useRef(answer[0]);
  const answerText2 = useRef(answer[1]);
  const [isRecord, setIsRecord] = useState(false); // 녹음 중인지 아닌지
  const buttonLabel = isRecord ? (
    <MaterialCommunityIcons name="stop-circle" size={30} color="black" />
  ) : (
    <MaterialIcons name="keyboard-voice" size={30} color="black" />
  ); // 녹음 중이면 전송, 아니면 시작
  const [text, setText] = useState(""); // 녹음한 텍스트
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
  const _onSpeechStart = () => {
    // 음성인식 시작
  };
  const _onSpeechEnd = () => {
    // 녹음이 끝나면
    console.log("onSpeechEnd");
    if (text === AnswerText) {
      console.log(text, AnswerText, "정답");
      Alert.alert("🥳 정답입니다!");
      navigate("Main", { screen: "home" });
    }
    if (text !== AnswerText) {
      console.log(text, AnswerText, "오답");
      Alert.alert("😢 오답입니다.");
      navigate("Main", { screen: "home" });
    }
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
    return () => {
      Voice.destroy().then(Voice.removeAllListeners); // 컴포넌트가 사라질 때
    };
  }, []);
  return (
    <Body>
      <Back
        style={{ marginTop: 40, marginLeft: 10 }}
        onPress={() => navigate("Main", { screen: "Home" })}
      >
        <Text style={{ fontSize: 30 }}>🔙</Text>
      </Back>
      <GameCharacter
        source={require("/Users/leesukcheol/memento/assets/images/bbiyakgaming.png")}
      />
      <Container>
        <View style={styles.view}>
          <RecordBtn onPress={_onRecordVoice}>
            <Text>{buttonLabel}</Text>
          </RecordBtn>
        </View>
      </Container>
      <View style={{ backgroundColor: "#e6e6e6", marginTop: 70 }}>
        {count % 2 === 0 ? <Colors /> : <Colors2 />}
      </View>
    </Body>
  );
};
const styles = StyleSheet.create({
  view: {
    width: 200,
    height: 100,
    alignSelf: "center",
    marginVertical: 80,
  },
});
const Body = styled.View`
  background-color: white;
`;
const Container = styled.View`
  justify-content: center;
  align-items: center;
  background-color: white;
`;
const RecordBtn = styled.TouchableOpacity`
  background-color: #ffda79;
  padding: 30px;
  margin-horizontal: 50px;
  border-radius: 50px;
  align-items: center;
`;
const Back = styled.TouchableOpacity``;
const ColorList = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 40px;
  margin-left: 25px;
  margin-right: 25px;
`;
const GameCharacter = styled.Image`
  width: 300px;
  height: 180px;
  margin-bottom: 10px;
  margin-right: 37px;
  margin-top: 50px;
  align-self: flex-end;
`;
export default Game1;

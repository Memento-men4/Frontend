import React, { useState, useEffect } from "react";
import { TouchableOpacity, Text, View } from "react-native";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import Voice from "react-native-voice";

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

// 다크모드
// background-color: ${(props) => props.theme.mainBgColor};
const Txt = styled.Text`
  font-size: 20px;
  color: ${(props) => props.theme.textColor};
`;

//color: ${(props) => (props.selected ? "red" : "blue")};
//selected={true}
const Recording = () => {
  const [isRecord, setIsRecord] = useState<boolean>(false); // 녹음 중인지 아닌지
  const [text, setText] = useState<string>(""); // 녹음한 텍스트
  const buttonLabel = isRecord ? "전송" : "시작"; // 녹음 중이면 전송, 아니면 시작
  const voiceLabel = text
    ? text
    : isRecord
    ? "Recording..."
    : "버튼을 누르면 음성인식이 시작됩니다.";

  const _onSpeechStart = () => {
    // 음성인식 시작
    console.log("onSpeechStart");
    setText("");
  };
  const _onSpeechEnd = () => {
    // 녹음이 끝나면
    console.log("onSpeechEnd");
  };
  const _onSpeechResults = (event) => {
    // 음성인식 결과
    console.log("onSpeechResults");
    setText(event.value[0]); //
    console.log(event.value[0]); //
    console.log(event.value[0].length); //
  };
  const _onSpeechError = (event) => {
    // 에러 발생시
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
    <Container>
      <VoiceText>{voiceLabel}</VoiceText>
      <ButtonRecord onPress={_onRecordVoice} title={buttonLabel} />
    </Container>
  );
};

export default Recording;

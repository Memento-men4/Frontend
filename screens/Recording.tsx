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
const ButtonRecord = styled.Button``;
const VoiceText = styled.Text`
  margin: 32px;
`;
const Btn = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #ffda79;
  margin: 110px;
  margin-top: 250px;
  margin-bottom: 250px;
  padding: 10px;
  border-radius: 100px;
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
  const [isRecord, setIsRecord] = useState<boolean>(false);
  const [text, setText] = useState<string>("");
  const buttonLabel = isRecord ? "Stop" : "Start";
  const voiceLabel = text
    ? text
    : isRecord
    ? "Say something..."
    : "press Start button";

  const _onSpeechStart = () => {
    console.log("onSpeechStart");
    setText("");
  };
  const _onSpeechEnd = () => {
    console.log("onSpeechEnd");
  };
  const _onSpeechResults = (event) => {
    console.log("onSpeechResults");
    setText(event.value[0]);
  };
  const _onSpeechError = (event) => {
    console.log("_onSpeechError");
    console.log(event.error);
  };

  const _onRecordVoice = () => {
    if (isRecord) {
      Voice.stop();
    } else {
      Voice.start("ko-KR");
    }
    setIsRecord(!isRecord);
  };

  useEffect(() => {
    Voice.onSpeechStart = _onSpeechStart;
    Voice.onSpeechEnd = _onSpeechEnd;
    Voice.onSpeechResults = _onSpeechResults;
    Voice.onSpeechError = _onSpeechError;

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
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

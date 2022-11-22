import React, { useState, useEffect } from "react";
import { TouchableOpacity, Text, View, Alert, StyleSheet } from "react-native";
import Geolocation from "@react-native-community/geolocation";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import Voice from "react-native-voice";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
  const buttonLabel = isRecord ? "녹음 끝! 전송하기" : "녹음 시작하기"; // 녹음 중이면 전송, 아니면 시작
  const voiceLabel = text
    ? text
    : isRecord
    ? "Recording..."
    : "버튼을 누르면 음성인식이 시작됩니다.";
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLogitude] = useState(null);

  const geoLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        const latitude = JSON.stringify(position.coords.latitude);
        const longitude = JSON.stringify(position.coords.longitude);

        setLatitude(latitude);
        setLogitude(longitude);
      },
      (error) => {
        console.log(error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };

  const _onSpeechStart = () => {
    // 음성인식 시작
    console.log("onSpeechStart");
    setText("");
  };
  const _onSpeechEnd = () => {
    // 녹음이 끝나면

    console.log("onSpeechEnd");
    Alert.alert("녹음 끝! 타임라인에 반영됩니다.");
  };
  const _onSpeechResults = (event) => {
    // 음성인식 결과
    console.log("onSpeechResults");
    setText(event.value[0]); // 음성인식 결과를 text에 저장
    console.log(event.value[0]); // 음성인식 결과 출력
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
    AsyncStorage.setItem("Text", text); //
    return () => {
      Voice.destroy().then(Voice.removeAllListeners); // 컴포넌트가 사라질 때
    };
  }, []); //[]에 text를 넣으면 text가 바뀔 때마다 useEffect가 실행되는데 그럼 스트링 한 번밖에 못 받아서 빼야함.
  return (
    <Container>
      <VoiceText>{voiceLabel}</VoiceText>
      <ButtonRecord onPress={_onRecordVoice} title={buttonLabel} />

      <TouchableOpacity onPress={() => geoLocation()}>
        <Text> Get GeoLocation </Text>
      </TouchableOpacity>
      <Text>latitude: {latitude}</Text>
      <Text>longitude: {longitude}</Text>
    </Container>
  );
};

export default Recording;

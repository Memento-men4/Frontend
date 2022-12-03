import React, { useState, useEffect, useRef } from "react";
import { Alert, ImageBackground, View } from "react-native";
import styled from "styled-components/native";
import Voice from "react-native-voice";
import { RecordText1, RecordText2, RecordText3, RecordText4 } from "../atom";
import { UserIDNumber } from "../atom";
import { useRecoilState } from "recoil";
import axios from "axios";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
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

const Recording = () => {
  const [userIDNumber, setUserIDNumber] = useRecoilState(UserIDNumber);
  const [isRecord, setIsRecord] = useState(false); // 녹음 중인지 아닌지
  const [showingText, setShowingText] = useState("");
  const [text, setText] = useRecoilState(RecordText1); // 녹음한 텍스트
  const [text2, setText2] = useRecoilState(RecordText2); // 녹음한 텍스트 두번째
  const [text3, setText3] = useRecoilState(RecordText3); // 녹음한 텍스트 세번째
  const [text4, setText4] = useRecoilState(RecordText4); // 녹음한 텍스트 네번째
  const cnt = useRef(0); // 녹음한 횟수 카운트

  const buttonLabel = isRecord ? "녹음 끝! 전송하기" : "녹음 시작하기"; // 녹음 중이면 전송, 아니면 시작
  const voiceLabel = showingText
    ? showingText
    : isRecord
    ? "Recording..."
    : "음성인식 시작";

  const _onSpeechStart = () => {
    console.log(userIDNumber);
    // 음성인식 시작
  };
  const _onSpeechEnd = () => {
    // 녹음이 끝나면
    Alert.alert("녹음 끝! 타임라인에 반영됩니다.");
    cnt.current = cnt.current + 1;
  };
  const _onSpeechResults = (event) => {
    // 음성인식 결과
    console.log("onSpeechResults");
    setShowingText(event.value[0]);
    if (cnt.current === 0) {
      setText(event.value[0]); // 음성인식 결과를 text에 저장
      /* 서버로 전달하는 파트인데 타이틀인지 로케이션인지 잘 맞춰서. else if에도 다 넣어야함
      const temp = {
        member_seq: userIDNumber,
        title: "한양대학교",
        content: event.value[0],
      };
      axios.post(
        "http://ec2-52-79-187-71.ap-northeast-2.compute.amazonaws.com:8080/record",
        temp
        )
        */
    } else if (cnt.current === 1) {
      setText2(event.value[0]); // 음성인식 결과를 text2에 저장
    } else if (cnt.current === 2) {
      setText3(event.value[0]); // 음성인식 결과를 text3에 저장
    } else if (cnt.current === 3) {
      setText4(event.value[0]); // 음성인식 결과를 text4에 저장
    }

    //console.log(event.value[0]); // 음성인식 결과 출력
    //console.log(event.value[0].length); // 음성인식 결과 길이
  };
  const _onSpeechError = (event) => {
    // 에러 발생시
    Alert.alert("녹음 에러 발생! 다시 시도하세요.");
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
  }, []); //[]에 text를 넣으면 text가 바뀔 때마다 useEffect가 실행되는데 그럼 스트링 한 번밖에 못 받아서 빼야함.
  return (
    <Container>
      <ImageBackground
        source={require("../assets/images/back1.png")}
        style={{ width: "105%", height: "100%" }}
      >
        <View style={{ marginTop: 250 }}>
          <VoiceText>{voiceLabel}</VoiceText>
          <ButtonRecord onPress={_onRecordVoice} title={buttonLabel} />
        </View>
      </ImageBackground>
    </Container>
  );
};

export default Recording;

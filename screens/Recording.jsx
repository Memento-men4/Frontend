import React, { useState, useEffect, useRef } from "react";
import { Alert, Text, View } from "react-native";
import styled from "styled-components/native";
import Voice from "react-native-voice";
import { RecordText1, RecordText2, RecordText3, RecordText4 } from "../atom";
import { UserIDNumber, RecordDate } from "../atom";
import { useRecoilState } from "recoil";
import axios from "axios";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const ButtonRecord = styled.TouchableOpacity`
  background-color: #ffda79;
  padding: 30px;
  margin-horizontal: 50px;
  border-radius: 50px;
  align-items: center;
  border: 1px solid black;
`;
const VoiceText = styled.Text`
  margin: 32px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;
const Character = styled.Image`
  width: 300px;
  height: 170px;
  margin-bottom: 100px;
  margin-left: 100px;
  align-self: flex-end;
`;

const Recording = () => {
  const [userIDNumber, setUserIDNumber] = useRecoilState(UserIDNumber);
  const [isRecord, setIsRecord] = useState(false); // 녹음 중인지 아닌지
  const [showingText, setShowingText] = useState("");
  const [text, setText] = useRecoilState(RecordText1); // 녹음한 텍스트
  const [text2, setText2] = useRecoilState(RecordText2); // 녹음한 텍스트 두번째
  const [text3, setText3] = useRecoilState(RecordText3); // 녹음한 텍스트 세번째
  const [text4, setText4] = useRecoilState(RecordText4); // 녹음한 텍스트 네번째
  const [recordDate, setRecordDate] = useRecoilState(RecordDate); // 녹음한 날짜
  const cnt = useRef(0); // 녹음한 횟수 카운트
  const date = new Date(); // 녹음한 날짜
  const today =
    date.getFullYear() +
    "-" +
    (date.getMonth() < 9 ? "0" : "") +
    (date.getMonth() + 1) +
    "-" +
    (date.getDate() < 10 ? "0" : "") +
    date.getDate(); // 녹음한 날짜
  const buttonLabel = isRecord ? (
    <MaterialCommunityIcons name="stop-circle" size={30} color="black" />
  ) : (
    <MaterialIcons name="keyboard-voice" size={30} color="black" />
  ); // 녹음 중이면 전송, 아니면 시작
  const voiceLabel = showingText
    ? showingText
    : isRecord
    ? "Recording..."
    : "음성인식 시작";

  const _onSpeechStart = () => {
    console.log("시작 유저넘버", userIDNumber);
    console.log(text2);
    console.log(recordDate);
    // 음성인식 시작
  };
  const _onSpeechEnd = () => {
    // 녹음이 끝나면
    /* 녹음 끝나면, 달력에 닷 찍힌다! !*/
    setRecordDate(
      Object.assign({}, recordDate, {
        [today]: { marked: true, selectedColor: "#ffda79" },
      })
    );
    console.log("녹음종료 유저넘버는: ", userIDNumber);
    if (cnt.current === 0) {
      const temp = {
        member_seq: userIDNumber,
        title: "한양대학교",
        description: text,
      };
      axios
        .post(
          "http://ec2-52-79-187-71.ap-northeast-2.compute.amazonaws.com:8080/record",
          temp
        )
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    } else if (cnt.current === 1) {
      const temp2 = {
        member_seq: userIDNumber,
        title: "한양대학교",
        description: text2,
      };
      axios
        .post(
          "http://ec2-52-79-187-71.ap-northeast-2.compute.amazonaws.com:8080/record",
          temp2
        )
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        }); // 음성인식 결과를 text2에 저장
    } else if (cnt.current === 2) {
      const temp3 = {
        member_seq: userIDNumber,
        title: "한양대학교",
        description: text3,
      };
      axios
        .post(
          "http://ec2-52-79-187-71.ap-northeast-2.compute.amazonaws.com:8080/record",
          temp3
        )
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        }); // 음성인식 결과를 text3에 저장
    } else if (cnt.current === 3) {
      const temp4 = {
        member_seq: userIDNumber,
        title: "한양대학교",
        description: text4,
      };
      axios
        .post(
          "http://ec2-52-79-187-71.ap-northeast-2.compute.amazonaws.com:8080/record",
          temp4
        )
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        }); // 음성인식 결과를 text4에 저장
    }
    Alert.alert("녹음 끝! 타임라인에 반영됩니다.");
    cnt.current = cnt.current + 1;
  };
  const _onSpeechResults = (event) => {
    // 음성인식 결과
    console.log("onSpeechResults");
    setShowingText(event.value[0]);
    //setRecordDate(Object.assign({}, recordDate, { [today]: "hi" }));
    if (cnt.current === 0) {
      setText(event.value[0]); // 음성인식 결과를 text에 저장
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
    <Container style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ marginTop: 270 }}>
        <VoiceText>{voiceLabel}</VoiceText>
        <View>
          <ButtonRecord onPress={_onRecordVoice}>
            <Text>{buttonLabel}</Text>
          </ButtonRecord>
        </View>
      </View>
      <View style={{ paddingTop: 60, marginRight: 60 }}>
        <Character
          source={require("/Users/leesukcheol/memento/assets/images/bbiyakmemory.png")}
        />
      </View>
    </Container>
  );
};
//<ButtonRecord onPress={_onRecordVoice} title={buttonLabel} />
/*
백그라운드 이미지 우선 삭제
  <ImageBackground
  source={require("../assets/images/back1.png")}
  style={{ width: "105%", height: "100%" }}
  >
  </ImageBackground>
*/
export default Recording;

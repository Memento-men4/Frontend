import React, { useState, useEffect, useRef } from "react";
import { TouchableOpacity, Text, View, Alert, StyleSheet } from "react-native";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { useIsFocused } from "@react-navigation/native";
import Risk from "../info/Risk";
import { SelectQuiz, QuizList, QuizAnswer } from "../../atom";
import { useRecoilState } from "recoil";
const Game2 = ({ navigation: { navigate } }) => {
  const isFocused = useIsFocused();
  const flag = useRef(1);
  const [num, setNum] = useRecoilState(SelectQuiz);
  const [quizList, setQuizList] = useRecoilState(QuizList);
  const [quizAnswer, setQuizAnswer] = useRecoilState(QuizAnswer);
  useEffect(
    () => {
      console.log("SelectQuiz", num);
    },
    [
      /*isFocused*/
    ]
  );
  setTimeout(() => {
    flag.current = (flag.current + 1) % 2; // 1, 0, 1, 0, 1, 0... 반복
    console.log("This is ", flag.current);
    navigate("Stack", { screen: "Answer" });
  }, 2000);

  return (
    <View style={{ justifyContent: "center", alignContent: "flex-start" }}>
      {flag.current === 1 ? (
        <Body>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 80,
              flexDirection: "row",
              alignItems: "space-between",
            }}
          >
            <Text style={{ fontSize: 90 }}>💁</Text>
            <Txt style={{ textAlign: "center" }}>
              {num + 1}번째 퀴즈입니다. 2초 후에{"\n"}이 단어와 가장 관련 있는
              주제를
              {"\n"}
              고르시면 정답입니다. 집중하세요!{"\n"}
            </Txt>
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 100,
              marginBottom: 400,
            }}
          >
            <Text style={{ fontSize: 40 }}>{quizList[num]}</Text>
          </View>
        </Body>
      ) : null}
    </View>
  );
};
const Body = styled.View`
  padding: 10px;
  padding-top: 20px;
  background-color: white;
  justify-content: center;
  align-items: center;
`;
const Txt = styled.Text`
  font-size: 15px;
  font-weight: bold;
  padding-left: 0px;
`;
export default Game2;

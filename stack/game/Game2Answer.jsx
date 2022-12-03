import React, { useState, useEffect, useRef } from "react";
import { TouchableOpacity, Text, View, Alert } from "react-native";
import styled from "styled-components/native";
import { SelectQuiz, QuizList, QuizAnswer } from "../../atom";
import { useRecoilState } from "recoil";

const Quiz = () => {
  return (
    <View>
      <Txt>📝 조금 전 단어와 가장 관련 있는 주제는 무엇일까요?</Txt>
    </View>
  );
};
const Answer = ({ navigation: { navigate } }) => {
  const [num, setNum] = useRecoilState(SelectQuiz);
  const [quizList, setQuizList] = useRecoilState(QuizList);
  const [quizAnswer, setQuizAnswer] = useRecoilState(QuizAnswer);
  if (num >= 5) {
    console.log("퀴즈가 5세트밖에 없어서 초기화 한 번 할게요");
    setNum(0); // 초기화
  }
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Quiz />
        <View style={{ flexDirection: "row", marginTop: 30 }}>
          <Target
            onPress={() => {
              Alert.alert("😢 오답입니다.");
              setNum((props) => props + 1);
              navigate("Main", { screen: "Home" });
            }}
          >
            <Txt>💡 {quizAnswer[(num + 4) % 5]}</Txt>
          </Target>
          <Target
            onPress={() => {
              Alert.alert("🥳 정답입니다!");
              setNum((props) => props + 1);
              navigate("Main", { screen: "Home" });
            }}
          >
            <Txt>💡 {quizAnswer[num % 5]}</Txt>
          </Target>

          <Target
            onPress={() => {
              Alert.alert("😢 오답입니다.");
              setNum((props) => props + 1);
              navigate("Main", { screen: "Home" });
            }}
          >
            <Txt>💡 {quizAnswer[(num + 1) % 5]}</Txt>
          </Target>
          <Target
            onPress={() => {
              Alert.alert("😢 오답입니다.");
              setNum((props) => props + 1);
              navigate("Main", { screen: "Home" });
            }}
          >
            <Txt>💡 {quizAnswer[(num + 2) % 5]}</Txt>
          </Target>
        </View>
      </View>
    </View>
  );
};
const Target = styled.TouchableOpacity`
  justify-content: center;
  align-items: flex-start;
  background-color: #ffda79;
  border-radius: 10px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 50px;
  padding: 10px;
  box-shadow: 1px 1px 3px rgba(41, 30, 95, 0.9);
`;
const Txt = styled.Text`
  font-size: 15px;
  font-weight: bold;
  padding-left: 0px;
`;
export default Answer;

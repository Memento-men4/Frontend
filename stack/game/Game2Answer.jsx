import React from "react";
import { View, Alert } from "react-native";
import styled from "styled-components/native";
import { SelectQuiz, QuizList, QuizAnswer } from "../../atom";
import { useRecoilState } from "recoil";
import { MaterialIcons } from "@expo/vector-icons";

const Quiz = () => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Txt style={{ textAlign: "center" }}>
        조금 전 단어와 가장{"\n"}관련 있는 주제는 무엇일까요?
      </Txt>
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
      <View>
        <View style={{ alignContent: "center" }}>
          <GameCharacter
            source={require("/Users/leesukcheol/memento/assets/images/bbiyaklove.png")}
          />
        </View>
        <Quiz />
        <View style={{ margin: 50 }}>
          <Target
            onPress={() => {
              Alert.alert("😢 오답입니다.");
              setNum((props) => props + 1);
              navigate("Main", { screen: "Home" });
            }}
          >
            <AnswerNumber style={{ color: "#FE9A2E" }}>ANSWER 1</AnswerNumber>
            <View style={{ marginLeft: 33 }}>
              <Txt>{quizAnswer[(num + 4) % 5]}</Txt>
            </View>
            <MaterialIcons
              style={{ marginLeft: 100 }}
              name="arrow-forward-ios"
              size={24}
              color="#FE9A2E"
            />
          </Target>
          <Target
            onPress={() => {
              Alert.alert("🥳 정답입니다!");
              setNum((props) => props + 1);
              navigate("Main", { screen: "Home" });
            }}
          >
            <AnswerNumber style={{ color: "#FE9A2E" }}>ANSWER 2</AnswerNumber>
            <View style={{ marginLeft: 30 }}>
              <Txt>{quizAnswer[num % 5]}</Txt>
            </View>
            <MaterialIcons
              style={{ marginLeft: 100 }}
              name="arrow-forward-ios"
              size={24}
              color="#FE9A2E"
            />
          </Target>
          <Target
            onPress={() => {
              Alert.alert("😢 오답입니다.");
              setNum((props) => props + 1);
              navigate("Main", { screen: "Home" });
            }}
          >
            <AnswerNumber style={{ color: "#FE9A2E" }}>ANSWER 3</AnswerNumber>
            <View style={{ marginLeft: 29 }}>
              <Txt>{quizAnswer[(num + 1) % 5]}</Txt>
            </View>
            <MaterialIcons
              style={{ marginLeft: 100 }}
              name="arrow-forward-ios"
              size={24}
              color="#FE9A2E"
            />
          </Target>
          <Target
            onPress={() => {
              Alert.alert("😢 오답입니다.");
              setNum((props) => props + 1);
              navigate("Main", { screen: "Home" });
            }}
          >
            <AnswerNumber style={{ color: "#FE9A2E" }}>ANSWER 4</AnswerNumber>
            <View style={{ marginLeft: 28 }}>
              <Txt>{quizAnswer[(num + 2) % 5]}</Txt>
            </View>
            <MaterialIcons
              style={{ marginLeft: 100 }}
              name="arrow-forward-ios"
              size={24}
              color="#FE9A2E"
            />
          </Target>
        </View>
      </View>
    </View>
  );
};
/*
const Target = styled.TouchableOpacity`
  justify-content: center;
  align-items: flex-start;
  background-color: #ffda79;
  border-radius: 10px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 50px;
  padding: 15px;
  box-shadow: 1px 1px 3px rgba(41, 30, 95, 0.9);
`;
*/
const Txt = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;
const AnswerNumber = styled.Text`
  font-size: 17px;
  font-weight: bold;
`;
const GameCharacter = styled.Image`
  width: 400px;
  height: 200px;
  margin-top: 100px;
  margin-bottom: 10px;
  margin-left: 30px;
  align-self: flex-end;
`;
const Target = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background-color: #ffda79;
  border-radius: 10px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 40px;
  padding-horizontal: 10px;
  padding-vertical: 10px;
  box-shadow: 1px 1px 3px rgba(41, 30, 95, 0.9);
`;
export default Answer;

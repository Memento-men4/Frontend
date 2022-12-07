import React, { useRef } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import styled from "styled-components/native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

const goAlert = () => {
  Alert.alert(
    "자가진단 결과",
    "위험! 가까운 보건소나 치매안심센터를 방문하셔서 더 정확한 치매검진을 받아보시기 바랍니다.",
    [{ text: "아니요" }, { text: "네", style: "cancel" }],
    { cancelable: false }
  );
};

const goAlert2 = () => {
  Alert.alert(
    "자가진단 결과",
    "안전! 운동과 외부 사회 활동을 유지하시고 치매예방수칙 3.3.3을 잘 실천하셔서 치매를 예방하세요. 좀 더 정확한 치매검진을 원하신다면 가까운 보건소나 치매안심센터를 방문해주세요.", // 두번째 text: 그 밑에 작은 제목
    [{ text: "아니요" }, { text: "네", style: "cancel" }],
    { cancelable: false }
  );
};
const line = (
  <Text style={{ fontSize: 10, fontWeight: "200" }}>
    {"-----------------------------------------------------------------------"}
  </Text>
);
const Diagnosis = ({ navigation: { navigate } }) => {
  var cnt = useRef(0);
  return (
    <View style={{ backgroundColor: "white" }}>
      <Header>
        <View style={{ flexDirection: "row", marginBottom: 15 }}>
          <View style={{ flex: 3, alignItems: "center" }}>
            <Character
              source={require("/Users/leesukcheol/memento/assets/images/bbiyak3.png")}
            />
          </View>
          <T>
            <Intro style={{ fontSize: 20, fontWeight: "600" }}>
              자꾸 깜빡하는 나.{"\n"}혹시 영츠하이머?
            </Intro>
          </T>
        </View>
        {line}
        <View style={{ flexDirection: "row" }}>
          <T style={{ padding: 10 }}>
            <Intro style={{ textAlign: "right" }}>
              보건복지부 중앙치매센터에서{"\n"}제시한 주관적 기억감퇴 설문에{" "}
              {"\n"}
              지금 참여해보세요!
            </Intro>
          </T>
          <View style={{ flex: 2.5 }}>
            <Character
              source={require("/Users/leesukcheol/memento/assets/images/bbiyak2.png")}
            />
          </View>
        </View>
        {line}
        <NewLine>{"\n"}</NewLine>
        <Target>
          <Question style={{ fontSize: 19 }}>Q01</Question>
          <Sentence>기억력에 문제가{"\n"}있다고 생각하십니까?</Sentence>
          <BouncyCheckbox
            style={{ marginLeft: 30 }}
            size={25}
            fillColor="#ffda79"
            unfillColor="#FFFFFF"
            iconStyle={{ borderColor: "#ffda79" }}
            onPress={(isChecked) =>
              isChecked ? (cnt.current += 1) : (cnt.current -= 1)
            }
          />
        </Target>
        <NewLine>{"\n"}</NewLine>
        <Target>
          <Question style={{ fontSize: 19 }}>Q02</Question>
          <Sentence>
            기억력이 10년 전보다{"\n"}나빠졌다고 생각하십니까?
          </Sentence>
          <BouncyCheckbox
            style={{ marginLeft: 4 }}
            size={25}
            fillColor="#ffda79"
            unfillColor="#FFFFFF"
            iconStyle={{ borderColor: "#ffda79" }}
            onPress={(isChecked) =>
              isChecked ? (cnt.current += 1) : (cnt.current -= 1)
            }
          />
        </Target>
        <NewLine>{"\n"}</NewLine>
        <Target>
          <Question style={{ fontSize: 19 }}>Q03</Question>
          <Sentence>기억력이 또래에 비해{"\n"}나쁘다고 생각하십니까?</Sentence>
          <BouncyCheckbox
            style={{ marginLeft: 17 }}
            size={25}
            fillColor="#ffda79"
            unfillColor="#FFFFFF"
            iconStyle={{ borderColor: "#ffda79" }}
            onPress={(isChecked) =>
              isChecked ? (cnt.current += 1) : (cnt.current -= 1)
            }
          />
        </Target>
        <NewLine>{"\n"}</NewLine>
        <Target>
          <Question style={{ fontSize: 19 }}>Q04</Question>
          <Sentence>
            기억력 저하로 인해{"\n"}일상생활에 불편을 느끼십니까?
          </Sentence>
          <BouncyCheckbox
            style={{ marginLeft: -26 }}
            size={25}
            fillColor="#ffda79"
            unfillColor="#FFFFFF"
            iconStyle={{ borderColor: "#ffda79" }}
            onPress={(isChecked) =>
              isChecked ? (cnt.current += 1) : (cnt.current -= 1)
            }
          />
        </Target>
        <NewLine>{"\n"}</NewLine>
        <Target>
          <Question style={{ fontSize: 19 }}>Q05</Question>
          <Sentence>최근에 일어난 일을{"\n"}기억하는 것이 어렵습니까?</Sentence>
          <BouncyCheckbox
            style={{ marginLeft: 0 }}
            size={25}
            fillColor="#ffda79"
            unfillColor="#FFFFFF"
            iconStyle={{ borderColor: "#ffda79" }}
            onPress={(isChecked) =>
              isChecked ? (cnt.current += 1) : (cnt.current -= 1)
            }
          />
        </Target>
        <NewLine>{"\n"}</NewLine>
        <Target>
          <Question style={{ fontSize: 19 }}>Q06</Question>
          <Sentence>
            며칠 전에 나눈 대화 내용을{"\n"}기억하기 어렵습니까?
          </Sentence>
          <BouncyCheckbox
            style={{ marginLeft: 0 }}
            size={25}
            fillColor="#ffda79"
            unfillColor="#FFFFFF"
            iconStyle={{ borderColor: "#ffda79" }}
            onPress={(isChecked) =>
              isChecked ? (cnt.current += 1) : (cnt.current -= 1)
            }
          />
        </Target>
        <NewLine>{"\n"}</NewLine>
        <Target>
          <Question style={{ fontSize: 19 }}>Q07</Question>
          <Sentence>며칠 전에 한 약속을{"\n"}기억하기 어렵습니까?</Sentence>
          <BouncyCheckbox
            style={{ marginLeft: 30 }}
            size={25}
            fillColor="#ffda79"
            unfillColor="#FFFFFF"
            iconStyle={{ borderColor: "#ffda79" }}
            onPress={(isChecked) =>
              isChecked ? (cnt.current += 1) : (cnt.current -= 1)
            }
          />
        </Target>
        <NewLine>{"\n"}</NewLine>
        <Target>
          <Question style={{ fontSize: 19 }}>Q08</Question>
          <Sentence>친한 사람의 이름을{"\n"}기억하기 어렵습니까?</Sentence>
          <BouncyCheckbox
            style={{ marginLeft: 30 }}
            size={25}
            fillColor="#ffda79"
            unfillColor="#FFFFFF"
            iconStyle={{ borderColor: "#ffda79" }}
            onPress={(isChecked) =>
              isChecked ? (cnt.current += 1) : (cnt.current -= 1)
            }
          />
        </Target>
        <NewLine>{"\n"}</NewLine>
        <Target>
          <Question style={{ fontSize: 19 }}>Q09</Question>
          <Sentence>물건 둔 곳을{"\n"}기억하기 어렵습니까?</Sentence>
          <BouncyCheckbox
            style={{ marginLeft: 30 }}
            size={25}
            fillColor="#ffda79"
            unfillColor="#FFFFFF"
            iconStyle={{ borderColor: "#ffda79" }}
            onPress={(isChecked) =>
              isChecked ? (cnt.current += 1) : (cnt.current -= 1)
            }
          />
        </Target>
        <NewLine>{"\n"}</NewLine>
        <Target>
          <Question style={{ fontSize: 19 }}>Q10</Question>
          <Sentence>이전에 비해 물건을{"\n"}자주 잃어버립니까?</Sentence>
          <BouncyCheckbox
            style={{ marginLeft: 42 }}
            size={25}
            fillColor="#ffda79"
            unfillColor="#FFFFFF"
            iconStyle={{ borderColor: "#ffda79" }}
            onPress={(isChecked) =>
              isChecked ? (cnt.current += 1) : (cnt.current -= 1)
            }
          />
        </Target>
        <NewLine>{"\n"}</NewLine>
        <Target>
          <Question style={{ fontSize: 19 }}>Q11</Question>
          <Sentence>집 근처에서 길을{"\n"}잃은 적이 있습니까?</Sentence>
          <BouncyCheckbox
            style={{ marginLeft: 33 }}
            size={25}
            fillColor="#ffda79"
            unfillColor="#FFFFFF"
            iconStyle={{ borderColor: "#ffda79" }}
            onPress={(isChecked) =>
              isChecked ? (cnt.current += 1) : (cnt.current -= 1)
            }
          />
        </Target>
        <NewLine>{"\n"}</NewLine>
        <Target>
          <Question style={{ fontSize: 19 }}>Q12</Question>
          <Sentence>
            물건을 사려고 할 때{"\n"}이름을 기억하기 어렵습니까?
          </Sentence>
          <BouncyCheckbox
            style={{ marginLeft: -14 }}
            size={25}
            fillColor="#ffda79"
            unfillColor="#FFFFFF"
            iconStyle={{ borderColor: "#ffda79" }}
            onPress={(isChecked) =>
              isChecked ? (cnt.current += 1) : (cnt.current -= 1)
            }
          />
        </Target>
        <NewLine>{"\n"}</NewLine>
        <Target>
          <Question style={{ fontSize: 19 }}>Q13</Question>
          <Sentence>
            가스불, 전기불 끄는 것을{"\n"}기억하기 어렵습니까?
          </Sentence>
          <BouncyCheckbox
            style={{ marginLeft: 10 }}
            size={25}
            fillColor="#ffda79"
            unfillColor="#FFFFFF"
            iconStyle={{ borderColor: "#ffda79" }}
            onPress={(isChecked) =>
              isChecked ? (cnt.current += 1) : (cnt.current -= 1)
            }
          />
        </Target>
        <NewLine>{"\n"}</NewLine>
        <Target>
          <Question style={{ fontSize: 19 }}>Q14</Question>
          <Sentence>
            자주 사용하는 전화번호를{"\n"}기억하기 어렵습니까?
          </Sentence>
          <BouncyCheckbox
            style={{ marginLeft: 5 }}
            size={25}
            fillColor="#ffda79"
            unfillColor="#FFFFFF"
            iconStyle={{ borderColor: "#ffda79" }}
            onPress={(isChecked) =>
              isChecked ? (cnt.current += 1) : (cnt.current -= 1)
            }
          />
        </Target>
        <Submit
          onPress={() => {
            cnt.current >= 6 ? goAlert() : goAlert2();
            navigate("Main", { screen: "home" });
          }}
        >
          <Text style={{ textAlign: "center", fontSize: 20 }}>제출</Text>
        </Submit>
      </Header>
    </View>
  );
};
const Header = styled.ScrollView`
  flex-direction: column;
  padding: 10px;
  padding-top: 20px;
  background-color: white;
`;
const Character = styled.Image`
  width: 150px;
  height: 100px;
`;
const Target = styled.View`
  flex-direction: row;
  margin-vertical: 5px;
  margin-horizontal: 10px;
  background-color: #f5f5f5;
  border-radius: 10px;
  padding: 5px;
  justify-content: space-between;
`; // 3분할. 1. 질문 2. 예 체크박스 3. 아니오 체크박스
const Intro = styled.Text`
  text-align: right;
  font-weight: bold;
  font-size: 15px;
`;
const Question = styled.Text`
  margin-right: 0px;
  font-size: 15px;
  font-weight: 500;
`;
const Sentence = styled.Text`
  margin-left: 0px;
  margin-right: 0px;
  font-size: 15px;
  font-weight: 500;
`;
const Submit = styled.TouchableOpacity`
  background-color: #ffda79;
  border-radius: 10px;
  padding: 10px;
  margin: 30px;
  margin-left: 120px;
  margin-right: 120px;
  border: 1px solid black;
  box-shadow: 1px 1px 3px rgba(41, 30, 95, 0.9);
`;
const NewLine = styled.Text`
  font-size: 5px;
`; // 줄간격이라고 보면 될듯
const T = styled.View`
  flex: 5;
  align-items: center;
  justify-content: center;
  background-color: #ffda79;
  border-radius: 10px;
  margin: 10px;
`;
export default Diagnosis;

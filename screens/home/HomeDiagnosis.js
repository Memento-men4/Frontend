import React from "react";
import { View, Text, Alert, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
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
  margin: 5px;
`; // 3분할. 1. 질문 2. 예 체크박스 3. 아니오 체크박스
const Intro = styled.Text`3
  text-align: right;
  font-weight: bold;
  font-size: 15px;
`;
const Question = styled.Text`
  margin-left: 5px;
  margin-right: 10px;
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
  background-color: #d4d4d4;
  border-radius: 10px;
  margin: 10px;
  box-shadow: 1px 1px 3px rgba(41, 30, 95, 0.9);
`;
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
var cnt = 0;

const HomeDiagnosis = ({ navigation: { navigate } }) => (
  <View>
    <TouchableOpacity
      style={{ marginTop: 40, marginLeft: 10 }}
      onPress={() => navigate("Main", { screen: "Home" })}
    >
      <Text style={{ fontSize: 30 }}>🔙</Text>
    </TouchableOpacity>
    <Header>
      <View style={{ flexDirection: "row", marginBottom: 15 }}>
        <View style={{ flex: 3, alignItems: "center" }}>
          <Character
            source={require("/Users/leesukcheol/memento/assets/images/crying3.png")}
          />
        </View>
        <T>
          <Intro style={{ fontSize: 20, fontWeight: "600" }}>
            자꾸 깜빡하는 나.{"\n"}혹시 영츠하이머?
          </Intro>
        </T>
      </View>
      <View style={{ flexDirection: "row" }}>
        <T style={{ padding: 10 }}>
          <Intro style={{ textAlign: "right" }}>
            보건복지부 중앙치매센터에서 제시한 주관적 기억감퇴 설문에 {"\n"}지금
            참여해보세요!
          </Intro>
        </T>
        <View style={{ flex: 2.5 }}>
          <Character
            source={require("/Users/leesukcheol/memento/assets/images/righthand.png")}
          />
        </View>
      </View>
      <NewLine>{"\n"}</NewLine>
      <NewLine>{"\n"}</NewLine>
      <Target>
        <Question>👉</Question>
        <Question>기억력에 문제가 있다고 생각하십니까? </Question>
        <BouncyCheckbox
          size={16}
          fillColor="#ffda79"
          unfillColor="#FFFFFF"
          iconStyle={{ borderColor: "#ffda79" }}
          onPress={(isChecked) => (isChecked ? (cnt += 1) : (cnt -= 1))}
        />
      </Target>
      <NewLine>{"\n"}</NewLine>
      <Target>
        <Question>👉</Question>
        <Question>기억력이 10년 전보다 나빠졌다고 생각하십니까?</Question>
        <BouncyCheckbox
          size={16}
          fillColor="#ffda79"
          unfillColor="#FFFFFF"
          iconStyle={{ borderColor: "#ffda79" }}
          onPress={(isChecked) => (isChecked ? (cnt += 1) : (cnt -= 1))}
        />
      </Target>
      <NewLine>{"\n"}</NewLine>
      <Target>
        <Question>👉</Question>
        <Question>기억력이 또래에 비해 나쁘다고 생각하십니까?</Question>
        <BouncyCheckbox
          size={16}
          fillColor="#ffda79"
          unfillColor="#FFFFFF"
          iconStyle={{ borderColor: "#ffda79" }}
          onPress={(isChecked) => (isChecked ? (cnt += 1) : (cnt -= 1))}
        />
      </Target>
      <NewLine>{"\n"}</NewLine>
      <Target>
        <Question>👉</Question>
        <Question>기억력 저하로 인해 일상생활에 불편을 느끼십니까?</Question>
        <BouncyCheckbox
          size={16}
          fillColor="#ffda79"
          unfillColor="#FFFFFF"
          iconStyle={{ borderColor: "#ffda79" }}
          onPress={(isChecked) => (isChecked ? (cnt += 1) : (cnt -= 1))}
        />
      </Target>
      <NewLine>{"\n"}</NewLine>
      <Target>
        <Question>👉</Question>
        <Question>최근에 일어난 일을 기억하는 것이 어렵습니까?</Question>
        <BouncyCheckbox
          size={16}
          fillColor="#ffda79"
          unfillColor="#FFFFFF"
          iconStyle={{ borderColor: "#ffda79" }}
          onPress={(isChecked) => (isChecked ? (cnt += 1) : (cnt -= 1))}
        />
      </Target>
      <NewLine>{"\n"}</NewLine>
      <Target>
        <Question>👉</Question>
        <Question>며칠 전에 나눈 대화 내용을 기억하기 어렵습니까?</Question>
        <BouncyCheckbox
          size={16}
          fillColor="#ffda79"
          unfillColor="#FFFFFF"
          iconStyle={{ borderColor: "#ffda79" }}
          onPress={(isChecked) => (isChecked ? (cnt += 1) : (cnt -= 1))}
        />
      </Target>
      <NewLine>{"\n"}</NewLine>
      <Target>
        <Question>👉</Question>
        <Question>며칠 전에 한 약속을 기억하기 어렵습니까?</Question>
        <BouncyCheckbox
          size={16}
          fillColor="#ffda79"
          unfillColor="#FFFFFF"
          iconStyle={{ borderColor: "#ffda79" }}
          onPress={(isChecked) => (isChecked ? (cnt += 1) : (cnt -= 1))}
        />
      </Target>
      <NewLine>{"\n"}</NewLine>
      <Target>
        <Question>👉</Question>
        <Question>친한 사람의 이름을 기억하기 어렵습니까?</Question>
        <BouncyCheckbox
          size={16}
          fillColor="#ffda79"
          unfillColor="#FFFFFF"
          iconStyle={{ borderColor: "#ffda79" }}
          onPress={(isChecked) => (isChecked ? (cnt += 1) : (cnt -= 1))}
        />
      </Target>
      <NewLine>{"\n"}</NewLine>
      <Target>
        <Question>👉</Question>
        <Question>물건 둔 곳을 기억하기 어렵습니까?</Question>
        <BouncyCheckbox
          size={16}
          fillColor="#ffda79"
          unfillColor="#FFFFFF"
          iconStyle={{ borderColor: "#ffda79" }}
          onPress={(isChecked) => (isChecked ? (cnt += 1) : (cnt -= 1))}
        />
      </Target>
      <NewLine>{"\n"}</NewLine>
      <Target>
        <Question>👉</Question>
        <Question>이전에 비해 물건을 자주 잃어버립니까?</Question>
        <BouncyCheckbox
          size={16}
          fillColor="#ffda79"
          unfillColor="#FFFFFF"
          iconStyle={{ borderColor: "#ffda79" }}
          onPress={(isChecked) => (isChecked ? (cnt += 1) : (cnt -= 1))}
        />
      </Target>
      <NewLine>{"\n"}</NewLine>
      <Target>
        <Question>👉</Question>
        <Question>집 근처에서 길을 잃은 적이 있습니까?</Question>
        <BouncyCheckbox
          size={16}
          fillColor="#ffda79"
          unfillColor="#FFFFFF"
          iconStyle={{ borderColor: "#ffda79" }}
          onPress={(isChecked) => (isChecked ? (cnt += 1) : (cnt -= 1))}
        />
      </Target>
      <NewLine>{"\n"}</NewLine>
      <Target>
        <Question>👉</Question>
        <Question>물건을 사려고 할 때 이름을 기억하기 어렵습니까?</Question>
        <BouncyCheckbox
          size={16}
          fillColor="#ffda79"
          unfillColor="#FFFFFF"
          iconStyle={{ borderColor: "#ffda79" }}
          onPress={(isChecked) => (isChecked ? (cnt += 1) : (cnt -= 1))}
        />
      </Target>
      <NewLine>{"\n"}</NewLine>
      <Target>
        <Question>👉</Question>
        <Question>가스불, 전기불 끄는 것을 기억하기 어렵습니까?</Question>
        <BouncyCheckbox
          size={16}
          fillColor="#ffda79"
          unfillColor="#FFFFFF"
          iconStyle={{ borderColor: "#ffda79" }}
          onPress={(isChecked) => (isChecked ? (cnt += 1) : (cnt -= 1))}
        />
      </Target>
      <NewLine>{"\n"}</NewLine>
      <Target>
        <Question>👉</Question>
        <Question>자주 사용하는 전화번호를 기억하기 어렵습니까?</Question>
        <BouncyCheckbox
          size={16}
          fillColor="#ffda79"
          unfillColor="#FFFFFF"
          iconStyle={{ borderColor: "#ffda79" }}
          onPress={(isChecked) => (isChecked ? (cnt += 1) : (cnt -= 1))}
        />
      </Target>
      <Submit onPress={() => (cnt >= 6 ? goAlert() : goAlert2())}>
        <Text style={{ textAlign: "center", fontSize: 20 }}>제출</Text>
      </Submit>
    </Header>
  </View>
);

export default HomeDiagnosis;

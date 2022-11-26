import React, { useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Alert,
} from "react-native";
import styled from "styled-components/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Timeline from "react-native-timeline-flatlist";
import Voice from "react-native-voice";
import Recording from "../screens/Recording";
import Login from "../screens/Login";

const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  margin-top: 20px;
  text-align: center;
`;
const Body = styled.View`
  flex-direction: column;
  padding-top: 20px;
  background-color: white;
`;
const Target = styled.TouchableOpacity`
  justify-content: center;
  align-items: flex-start;
  background-color: #ffda79;
  border-radius: 10px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 50px;
  padding: 10px;
`;
const Txt = styled.Text`
  font-size: 20px;
  font-weight: bold;
  padding: 10px;
  padding-left: 0px;
  padding-right: 3px;
`; // 💡 아이콘에 디폴트 패딩이 있어서 오른쪽 패딩 넣어서 보정해줬음
const Back = styled.TouchableOpacity``;
const TextArea = styled.ScrollView`
  margin-top: 20px;
  margin-bottom: 50px;
  padding: 10px;
  background-color: #ffda79;
`;
const ColorList = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 40px;
  margin-left: 25px;
  margin-right: 25px;
`;
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
//var tmp = "";
//var tmp2 = "";
const TimeLine = () => {
  const dummy = [
    { time: "09:00", title: "한양대학교", description: `${tmp}` },
    { time: "10:45", title: "세탁기", description: "실행하러 고고" },
    {
      time: "12:00",
      title: "마쿠마라탕",
      description: "마쿠마라탕에서 마라탕을 먹었다",
    },
    { time: "14:00", title: "스타일러", description: "실행하러 고고" },
    { time: "16:30", title: "집", description: `${tmp2}` },
  ];
  const [data, setData] = useState([]);
  const [tmp, setTmp] = useState("");
  const [tmp2, setTmp2] = useState("");
  useEffect(() => {
    AsyncStorage.getItem("Text", (err, result) => {
      if (result != null) {
        //setData(result);
        setData((data) => [...data, result]);
        setTmp(result);
        setTmp2(result);
      }
    });
  }, []);
  //tmp = data[0];
  //tmp2 = data[1];
  return (
    <Timeline
      data={dummy}
      separator={true}
      lineColor="#ffda79"
      innerCircle={"dot"}
      circleColor="#ffda79"
      circleSize={20}
      descriptionStyle={{ color: "gray" }}
      options={{
        style: { padding: 20 },
      }}
      onEventPress={(event) => {
        console.log(event);
        alert(tmp2);
      }}
    />
  );
};

const Days = ({ navigation: { navigate } }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    AsyncStorage.getItem("Text", (err, result) => {
      //array.push(result);
      setData(result);
    });
  }, []);
  // 하늘: 서버로부터 추천 목록이랑 실제 실행 목록 두가지 api가 넘어온다.
  // 실제실행: [세탁기] 전체(=추천): [세탁기, 스타일러]인데
  // 둘 다 띄워주면 세탁기 세탁기 스타일러. 이렇게 뜨면 안되니까
  // 전체에 있는 세탁기가 실제실행 리스트에 있을 경우 전체에서 빼주는 식으로 해야할듯

  return (
    <Body style={{ flex: 1 }}>
      <Back
        style={{ marginTop: 20, marginLeft: 10 }}
        onPress={() => navigate("Main", { screen: "Home" })} // Root에 있는 name=""을 앞에 적어줘야함
      >
        <Text style={{ fontSize: 30 }}>🔙</Text>
      </Back>
      <Title style={{ marginBottom: 30 }}>{data}</Title>
      <ScrollView>
        <TimeLine />
      </ScrollView>
    </Body>
  );
};
const Infos = ({ navigation: { navigate } }) => (
  <Body style={{ flex: 1 }}>
    <Back
      style={{ marginTop: 20, marginLeft: 10 }}
      onPress={() => navigate("Main", { screen: "Home" })} // Root에 있는 name=""을 앞에 적어줘야함
    >
      <Text style={{ fontSize: 30 }}>🔙</Text>
    </Back>
    <Title>영츠하이머 예방 방법</Title>
    <SafeAreaView>
      <TextArea>
        <Text style={{ padding: 10, marginBottom: 10, textAlign: "justify" }}>
          영츠하이머를 예방하기 위해서, 먼저 치매의 위험성을 알 필요가 있습니다.
          치매란 정상적으로 생활하던 사람이 다양한 원인으로 인해 뇌가 손상되어
          후천적으로 기억력, 언어력, 판단력 등 여러 영역의 인지기능이 떨어져
          일상생활에 지장이 생기는 현상을 의미합니다. 현재까지 치료법이 없는
          치매는 조기 진단과 관리, 유지가 가장 중요하며, 이는 20~30대의 젊은 층
          또한 포함됩니다. 최근 들어 젊은 세대에서 치매의 초기 증상인 과도한
          건망증 현상을 겪는 사람이 급증하고 있고, 이에 따른 신조어인 젊음을
          의미하는 ‘young’과 알츠하이머의 ‘Alzheimer’를 합친
          ‘Youngzheimer(영츠하이머) 또한 생겨났습니다. 영츠하이머의 잠재적
          위험성이 큰 이유는, 규명된지 얼마 되지 않은 영츠하이머를 겪는 젊은
          사람들이 몇십 년 뒤에 어떻게 될지에 대한 통계 자료가 없다는 것입니다.
          그래서 우린 영츠하이머를 예방하기 위해, 치매의 현 주소 및 예방 방법을
          알아야 합니다.
        </Text>
      </TextArea>
    </SafeAreaView>
    <Target onPress={() => navigate("Stack", { screen: "Next" })}>
      <Txt style={{ marginLeft: 30 }}>💡 치매 위험성</Txt>
    </Target>
    <Target onPress={() => navigate("Stack", { screen: "Next2" })}>
      <Txt style={{ marginLeft: 30 }}>💡 치매 현황</Txt>
    </Target>
    <Target onPress={() => navigate("Stack", { screen: "Next3" })}>
      <Txt style={{ marginLeft: 30 }}>💡 치매 예방 방법</Txt>
    </Target>
  </Body>
);
const Next = ({ navigation: { navigate } }) => (
  <View style={{ justifyContent: "center", alignContent: "flex-start" }}>
    <Back
      style={{ marginTop: 40, marginLeft: 10 }}
      onPress={() => navigate("Stack", { screen: "Infos" })}
    >
      <Text style={{ fontSize: 30 }}>🔙</Text>
    </Back>
    <Title>치매 위험성</Title>
  </View>
);
const Next2 = ({ navigation: { navigate } }) => (
  <View style={{ justifyContent: "center", alignContent: "flex-start" }}>
    <Back
      style={{ marginTop: 40, marginLeft: 10 }}
      onPress={() => navigate("Stack", { screen: "Infos" })}
    >
      <Text style={{ fontSize: 30 }}>🔙</Text>
    </Back>
    <Text>치매의 현황을 소개하는 농담곰</Text>
  </View>
);
const Next3 = ({ navigation: { navigate } }) => (
  <View style={{ justifyContent: "center", alignContent: "flex-start" }}>
    <TouchableOpacity
      style={{ marginTop: 40, marginLeft: 10 }}
      onPress={() => navigate("Stack", { screen: "Infos" })}
    >
      <Text style={{ fontSize: 30 }}>🔙</Text>
    </TouchableOpacity>
    <Text>치매를 예방하는 방법을 소개하는 농담곰</Text>
  </View>
);
const Game = ({ navigation: { navigate } }) => (
  <View style={{ justifyContent: "center", alignContent: "flex-start" }}>
    <Back
      style={{ marginTop: 40, marginLeft: 10, marginBottom: 40 }}
      onPress={() => navigate("Main", { screen: "Home" })}
    >
      <Text style={{ fontSize: 30 }}>🔙</Text>
    </Back>
    <Target onPress={() => navigate("Stack", { screen: "Game1" })}>
      <Txt style={{ marginLeft: 30 }}>💡 치매 예방 게임 1</Txt>
    </Target>
    <Target onPress={() => navigate("Stack", { screen: "Game2" })}>
      <Txt style={{ marginLeft: 30 }}>💡 치매 예방 게임 2</Txt>
    </Target>
    <Target onPress={() => navigate("Stack", { screen: "Game3" })}>
      <Txt style={{ marginLeft: 30 }}>💡 치매 예방 게임 3</Txt>
    </Target>
  </View>
);

// 다크모드
// background-color: ${(props) => props.theme.mainBgColor};

//color: ${(props) => (props.selected ? "red" : "blue")};
//selected={true}
const Record = () => {
  const [isRecord, setIsRecord] = useState(false); // 녹음 중인지 아닌지
  const [text, setText] = useState(""); // 녹음한 텍스트
  const buttonLabel = isRecord ? "녹음 끝! 전송하기" : "녹음 시작하기"; // 녹음 중이면 전송, 아니면 시작
  const voiceLabel = text
    ? text
    : isRecord
    ? "Recording..."
    : "버튼을 누르면 음성인식이 시작됩니다.";

  const _onSpeechStart = () => {
    // 음성인식 시작
    console.log("onSpeechStart");
    console.log("Answer:", AnswerText);
  };
  const _onSpeechEnd = () => {
    // 녹음이 끝나면
    console.log("onSpeechEnd");
    if (text === AnswerText) {
      console.log(text, AnswerText, "정답");
      //Alert.alert(text, AnswerText);
    }
    if (text !== AnswerText) {
      console.log(text, AnswerText, "오답");
      //Alert.alert(AnswerText, text);
    }
    Alert.alert("녹음 끝! 타임라인에 반영됩니다.");
  };
  const _onSpeechResults = (event) => {
    // 음성인식 결과
    console.log("onSpeechResults");
    setText(event.value[0]);
    // 음성인식 결과를 text에 저장
    //console.log(event.value[0]); // 음성인식 결과 출력
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
    //AsyncStorage.setItem("Text", text); // 이걸 보내야함? 정답처리 걍 프론트에서
    return () => {
      Voice.destroy().then(Voice.removeAllListeners); // 컴포넌트가 사라질 때
    };
  }, []); //[]에 text를 넣으면 text가 바뀔 때마다 useEffect가 실행되는데 그럼 스트링 한 번밖에 못 받아서 빼야함.
  return (
    <Container>
      <VoiceText>{voiceLabel}</VoiceText>
      <ButtonRecord onPress={_onRecordVoice} title={buttonLabel} />
    </Container>
  );
};
var AnswerText = "";
const Game1 = ({ navigation: { navigate } }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(count + 1);
    AnswerText = answer[(count + 1) % 2];
  }, []);
  const words = {
    red: ["파랑", "노랑", "검정", "초록"],
    blue: ["노랑", "검정", "초록", "빨강"],
    yellow: ["검정", "초록", "빨강", "파랑"],
    green: ["빨강", "파랑", "노랑", "검정"],
  };
  const answer = ["빨강 파랑 노랑 초록", "파랑 빨강 초록 노랑"];
  const Colors = () => (
    <ColorList>
      <Text style={{ fontSize: 25, fontWeight: "bold", color: "red" }}>
        {words["red"][count % 3]}
      </Text>
      <Text style={{ fontSize: 25, fontWeight: "bold", color: "blue" }}>
        {words["blue"][count % 3]}
      </Text>
      <Text style={{ fontSize: 25, fontWeight: "bold", color: "yellow" }}>
        {words["yellow"][count % 3]}
      </Text>
      <Text style={{ fontSize: 25, fontWeight: "bold", color: "green" }}>
        {words["green"][count % 3]}
      </Text>
    </ColorList>
  );
  const Colors2 = () => (
    <ColorList>
      <Text style={{ fontSize: 25, fontWeight: "bold", color: "blue" }}>
        {words["blue"][count % 3]}
      </Text>
      <Text style={{ fontSize: 25, fontWeight: "bold", color: "red" }}>
        {words["red"][count % 3]}
      </Text>
      <Text style={{ fontSize: 25, fontWeight: "bold", color: "green" }}>
        {words["green"][count % 3]}
      </Text>
      <Text style={{ fontSize: 25, fontWeight: "bold", color: "yellow" }}>
        {words["yellow"][count % 3]}
      </Text>
    </ColorList>
  );
  return (
    <View
      style={{ flex: 1, justifyContent: "center", alignContent: "flex-start" }}
    >
      <Back
        style={{ marginTop: 40, marginLeft: 10 }}
        onPress={() => navigate("Stack", { screen: "Game" })}
      >
        <Text style={{ fontSize: 30 }}>🔙</Text>
      </Back>
      <Title>치매 게임 1</Title>
      <View style={{ backgroundColor: "#D4D4D4" }}>
        {count % 2 === 0 ? <Colors /> : <Colors2 />}
      </View>
      <View style={{ marginTop: 20 }}>
        <Text>{count % 2 === 0 ? answer[0] : answer[1]}</Text>
      </View>
      <Record />
    </View>
  );
};
const Game2 = ({ navigation: { navigate } }) => (
  <View style={{ justifyContent: "center", alignContent: "flex-start" }}>
    <Back
      style={{ marginTop: 40, marginLeft: 10 }}
      onPress={() => navigate("Stack", { screen: "Game" })}
    >
      <Text style={{ fontSize: 30 }}>🔙</Text>
    </Back>
    <Text>치매 게임 2</Text>
  </View>
);
const Game3 = ({ navigation: { navigate } }) => (
  <View style={{ justifyContent: "center", alignContent: "flex-start" }}>
    <TouchableOpacity
      style={{ marginTop: 40, marginLeft: 10 }}
      onPress={() => navigate("Stack", { screen: "Game" })}
    >
      <Text style={{ fontSize: 30 }}>🔙</Text>
    </TouchableOpacity>
    <Text>치매 게임 3</Text>
  </View>
);

const NativeStack = createNativeStackNavigator();

const Stack = () => (
  <NativeStack.Navigator screenOptions={{ headerBackTitleVisible: false }}>
    <NativeStack.Screen
      name="Days"
      component={Days}
      options={{ headerShown: false }}
    />
    <NativeStack.Screen
      name="Infos"
      component={Infos}
      options={{ headerShown: false }}
    />
    <NativeStack.Screen
      name="Next"
      component={Next}
      options={{ headerShown: false }}
    />
    <NativeStack.Screen
      name="Next2"
      component={Next2}
      options={{ headerShown: false }}
    />
    <NativeStack.Screen
      name="Next3"
      component={Next3}
      options={{ headerShown: false }}
    />
    <NativeStack.Screen
      name="Game"
      component={Game}
      options={{ headerShown: false }}
    />
    <NativeStack.Screen
      name="Game1"
      component={Game1}
      options={{ headerShown: false }}
    />
    <NativeStack.Screen
      name="Game2"
      component={Game2}
      options={{ headerShown: false }}
    />
    <NativeStack.Screen
      name="Game3"
      component={Game3}
      options={{ headerShown: false }}
    />
  </NativeStack.Navigator>
);

export default Stack;

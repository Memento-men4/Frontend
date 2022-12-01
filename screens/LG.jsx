import React, { useState, useEffect, useRef } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { format } from "date-fns";
import ko from "date-fns/esm/locale/ko/index.js";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { WriteFormat, UserIDNumber } from "../atom";
import { useRecoilState } from "recoil";
import { useIsFocused } from "@react-navigation/native";
import axios from "axios";
const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 28px;
  margin-top: 25px;
  text-align: center;
`;
const Body = styled.View`
  flex-direction: column;
  padding: 10px;
  padding-top: 20px;
  background-color: white;
`;
const Container = styled.View`
  border: 1px solid gray;
  border-radius: 1px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
`;
const Btn = styled.TouchableOpacity`
  align-items: center;
  background-color: #ffda79;
  padding-horizontal: 5px;
  padding-vertical: 3px;
`;
const DayBtn = styled.TouchableOpacity`
  align-items: center;
  padding-horizontal: 4px;
  padding-vertical: 3px;
  border-width: 1px;
  background-color: ${(props) => (props.selected ? "black" : "transparent")};
`;
const Footer = styled.View`
  border: 2px solid black;
`;
//box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.15);
// 차라리 테두리 라인 주기
const AddBtn = styled.TouchableOpacity`
  position: absolute;
  bottom: 50px;
  right: 50px;
  background-color: #ffda79;
  width: 80px;
  height: 80px;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
`;
const AddBtnText = styled.Text`
  font-size: 30px;
`;
const ShowDate = styled.Text`
  font-size: 10px;
`;
const Content = styled.View`
  flex-direction: row;
  margin-left: 5px;
  align-items: center;
`;

const LG = ({ navigation: { navigate } }) => {
  const isFocused = useIsFocused();
  const [writeFormat, setWriteFormat] = useRecoilState(WriteFormat);
  const check = useRef([0, 0, 0, 0, 0, 0, 0]); // 가전제품 종류별 렌더링
  const [userIDNumber, setUserIDNumber] = useRecoilState(UserIDNumber);
  const [mon, setMon] = useState(false);
  const [tue, setTue] = useState(false);
  const [wed, setWed] = useState(false);
  const [thu, setThu] = useState(false);
  const [fri, setFri] = useState(false);
  const [sat, setSat] = useState(false);
  const [sun, setSun] = useState(false);
  const onMonPress = () => {
    setMon(!mon);
  };
  const onTuePress = () => {
    setTue(!tue);
  };
  const onWedPress = () => {
    setWed(!wed);
  };
  const onThuPress = () => {
    setThu(!thu);
  };
  const onFriPress = () => {
    setFri(!fri);
  };
  const onSatPress = () => {
    setSat(!sat);
  };
  const onSunPress = () => {
    setSun(!sun);
  };
  useEffect(() => {
    console.log(writeFormat);
    console.log("useEffectmon", writeFormat["current"]["selectDay"]["mon"]);
    setMon(writeFormat["current"]["selectDay"]["mon"]);
    setTue(writeFormat["current"]["selectDay"]["tue"]);
    setWed(writeFormat["current"]["selectDay"]["wed"]);
    setThu(writeFormat["current"]["selectDay"]["thr"]);
    setFri(writeFormat["current"]["selectDay"]["fri"]);
    setSat(writeFormat["current"]["selectDay"]["sat"]);
    setSun(writeFormat["current"]["selectDay"]["sun"]);
    if (writeFormat["current"]["name"] == "🤯") {
      check.current[0] = 1;
    } else if (writeFormat["current"]["name"] == "🥲") {
      check.current[1] = 1;
    } else if (writeFormat["current"]["name"] == "🤬") {
      check.current[2] = 1;
    } else if (writeFormat["current"]["name"] == "🤗") {
      check.current[3] = 1;
    } else if (writeFormat["current"]["name"] == "🥰") {
      check.current[4] = 1;
    } else if (writeFormat["current"]["name"] == "😊") {
      check.current[5] = 1;
    } else if (writeFormat["current"]["name"] == "🤩") {
      check.current[6] = 1;
    }
  }, [writeFormat]); // 제발 여기에 꼭 넣어야함!!!

  const [date, onChangeDate] = useState(new Date()); // 선택 날짜
  const [mode, setMode] = useState("date"); // 모달 유형
  const [visible, setVisible] = useState(false); // 모달 노출 여부
  const onPressDate = () => {
    // 날짜 클릭 시
    setMode("date"); // 모달 유형을 date로 변경
    setVisible(true); // 모달 open
  };
  const onPressTime = () => {
    // 시간 클릭 시
    setMode("time"); // 모달 유형을 time으로 변경
    setVisible(true); // 모달 open
  };
  const onConfirm = (selectedDate) => {
    // 날짜 또는 시간 선택 시
    setVisible(false); // 모달 close
    onChangeDate(selectedDate); // 선택한 날짜 변경
  };
  const onCancel = () => {
    // 취소 시
    setVisible(false); // 모달 close
  };
  const onSubmit = () => {
    console.log(writeFormat);
  };
  const SetBtn = () => (
    <Btn
      style={{
        padding: 15,
        borderRadius: 10,
        marginLeft: 5,
        backgroundColor: "#D4D4D4",
      }}
      onPress={() => {
        onSubmit();
      }}
    >
      <Text>설정</Text>
    </Btn>
  );
  const Airplane = () => {
    return (
      <Content style={{ marginTop: 20, padding: 15 }}>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Footer
            style={{
              backgroundColor: "#ffda79",
              padding: 7,
              borderRadius: 12,
              flex: 1,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <View style={{ flex: 1, marginLeft: 10, marginTop: 13 }}>
                <Ionicons name="ios-airplane" size={30} color="black" />
              </View>
              <View
                style={{
                  flexDirection: "column",
                  alignItems: "center",
                  flex: 3,
                }}
              >
                <Btn style={{ flex: 1 }} onPress={onPressTime}>
                  <ShowDate style={{ fontSize: 20 }}>
                    {format(new Date(date), "p", { locale: ko })}
                  </ShowDate>
                </Btn>
                <View style={{ flex: 1, flexDirection: "row", marginRight: 5 }}>
                  <DayBtn selected={mon} onPress={() => onMonPress()}>
                    <Text style={{ fontSize: 20 }}>월</Text>
                  </DayBtn>
                  <DayBtn selected={tue} onPress={() => onTuePress()}>
                    <Text style={{ fontSize: 20 }}>화</Text>
                  </DayBtn>
                  <DayBtn selected={wed} onPress={() => onWedPress()}>
                    <Text style={{ fontSize: 20 }}>수</Text>
                  </DayBtn>
                  <DayBtn selected={thu} onPress={() => onThuPress()}>
                    <Text style={{ fontSize: 20 }}>목</Text>
                  </DayBtn>
                  <DayBtn selected={fri} onPress={() => onFriPress()}>
                    <Text style={{ fontSize: 20 }}>금</Text>
                  </DayBtn>
                  <DayBtn selected={sat} onPress={() => onSatPress()}>
                    <Text style={{ fontSize: 20 }}>토</Text>
                  </DayBtn>
                  <DayBtn selected={sun} onPress={() => onSunPress()}>
                    <Text style={{ fontSize: 20 }}>일</Text>
                  </DayBtn>
                </View>
              </View>
              <DateTimePickerModal
                isVisible={visible}
                mode={mode}
                onConfirm={onConfirm}
                onCancel={onCancel}
                date={date}
              />
            </View>
          </Footer>
          <SetBtn style={{ flex: 1 }} />
        </View>
      </Content>
    );
  };
  const TV = () => {
    return (
      <Content style={{ marginTop: 20, padding: 15 }}>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Footer
            style={{
              backgroundColor: "#ffda79",
              padding: 7,
              borderRadius: 12,
              flex: 1,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <View style={{ flex: 1, marginLeft: 10, marginTop: 13 }}>
                <Ionicons name="ios-tv" size={30} color="black" />
              </View>
              <View
                style={{
                  flexDirection: "column",
                  alignItems: "center",
                  flex: 3,
                }}
              >
                <Btn style={{ flex: 1 }} onPress={onPressTime}>
                  <ShowDate style={{ fontSize: 20 }}>
                    {format(new Date(date), "p", { locale: ko })}
                  </ShowDate>
                </Btn>
                <View style={{ flex: 1, flexDirection: "row", marginRight: 5 }}>
                  <DayBtn selected={mon} onPress={() => onMonPress()}>
                    <Text style={{ fontSize: 20 }}>월</Text>
                  </DayBtn>
                  <DayBtn selected={tue} onPress={() => onTuePress()}>
                    <Text style={{ fontSize: 20 }}>화</Text>
                  </DayBtn>
                  <DayBtn selected={wed} onPress={() => onWedPress()}>
                    <Text style={{ fontSize: 20 }}>수</Text>
                  </DayBtn>
                  <DayBtn selected={thu} onPress={() => onThuPress()}>
                    <Text style={{ fontSize: 20 }}>목</Text>
                  </DayBtn>
                  <DayBtn selected={fri} onPress={() => onFriPress()}>
                    <Text style={{ fontSize: 20 }}>금</Text>
                  </DayBtn>
                  <DayBtn selected={sat} onPress={() => onSatPress()}>
                    <Text style={{ fontSize: 20 }}>토</Text>
                  </DayBtn>
                  <DayBtn selected={sun} onPress={() => onSunPress()}>
                    <Text style={{ fontSize: 20 }}>일</Text>
                  </DayBtn>
                </View>
              </View>
              <DateTimePickerModal
                isVisible={visible}
                mode={mode}
                onConfirm={onConfirm}
                onCancel={onCancel}
                date={date}
              />
            </View>
          </Footer>
          <SetBtn style={{ flex: 1 }} />
        </View>
      </Content>
    );
  };
  const Drum = () => (
    <Content style={{ marginTop: 10 }}>
      <Footer style={{ backgroundColor: "#ffda79" }}>
        <Btn style={{ padding: 20 }}>
          <Ionicons name="home" size={24} color="black" />
        </Btn>
        <Btn style={{ padding: 20 }} onPress={onPressDate}>
          <ShowDate style={{ fontSize: 15 }}>
            {format(new Date(date), "PPP", { locale: ko })}{" "}
          </ShowDate>
        </Btn>
        <Btn style={{ padding: 20 }} onPress={onPressTime}>
          <ShowDate style={{ fontSize: 15 }}>
            {format(new Date(date), "p", { locale: ko })}
          </ShowDate>
        </Btn>
        <DateTimePickerModal
          isVisible={visible}
          mode={mode}
          onConfirm={onConfirm}
          onCancel={onCancel}
          date={date}
        />
      </Footer>
      <SetBtn />
    </Content>
  );
  return (
    <Body style={{ flex: 1 }}>
      <Container style={{ flex: 1, margin: 10 }}>
        <View style={{ backgroundColor: "#f2f2f2" }}>
          <Title>우리 집 LG 가전</Title>
        </View>
      </Container>
      <Container style={{ marginTop: 50, flex: 5.5 }}>
        <ScrollView style={{ backgroundColor: "#f2f2f2" }}>
          {console.log("Hello", check.current)}
          {check.current[0] !== 0 ? <Airplane /> : null}
          {check.current[1] !== 0 ? <TV /> : null}
          {check.current[2] !== 0 ? <Drum /> : null}
        </ScrollView>
      </Container>
      <AddBtn onPress={() => navigate("Stack", { screen: "Write" })}>
        <AddBtnText>+</AddBtnText>
      </AddBtn>
    </Body>
  );
};

export default LG;

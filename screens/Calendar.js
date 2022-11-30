import React, { useContext, useEffect, useState } from "react";
import { Calendar } from "react-native-calendars";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import styled from "styled-components/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { imageName } from "/Users/leesukcheol/memento/images.js"; // 실제 디바이스에서 돌릴 때 에러 뜨길래..
import HighlightText from "react-native-highlight-underline-text";
import { loginFlag } from "../atom";
import { useRecoilState } from "recoil";
import axios from "axios";
import { UserIDNumber, UserName } from "../atom";
import { useIsFocused } from "@react-navigation/native";

const Body = styled.View`
  background-color: white;
`;
const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-horizontal: 20px;
  margin-top: 20px;
  border: 1px solid black;
  background-color: #f2f2f2;
  box-shadow: 1px 1px 3px rgba(41, 30, 95, 0.9);
  border-radius: 10px;
`;
const Container = styled.View`
  box-shadow: 1px 1px 3px rgba(41, 30, 95, 0.9);
  margin-horizontal: 20px;
`;
const Footer = styled.View`
  box-shadow: 1px 1px 3px rgba(41, 30, 95, 0.9);
  margin-horizontal: 20px;
`;
const Target = styled.TouchableOpacity`
  background-color: #ffda79;
  border-radius: 10px;
  padding: 5px;
  border: 1px solid black;
  box-shadow: 1px 1px 3px rgba(41, 30, 95, 0.7);
  margin-vertical: 5px;
`; // margin: 두 버튼 사이 간격
const Hello = styled.Text`
  font-size: 20px;
  margin-top: 31px;
  font-weight: bold;
`;
const Txt = styled.Text`
  font-size: 15px;
  font-weight: bold;
  text-align: center;
`;
const Gom = styled.Image`
  width: 100px;
  height: 100px;
`;

const CalendarView = ({ navigation: { navigate } }) => {
  const isFocused = useIsFocused();
  const [userName, setUserName] = useRecoilState(UserName);
  const [userIDNumber, setUserIDNumber] = useRecoilState(UserIDNumber);
  const getUserIDNumber = () => {
    //const [loading, setLoading] = useState(false);
    //const [error, setError] = useState(null);
    const userInfo = {
      id: "new1",
      password: "1234",
      name: "new2",
      phoneNumber: "010-3333-3333",
      gender: "MALE",
      type: "GENERAL",
      birthDay: "1999-01-01",
      email: "dltjrcjf9@naver,com",
    };

    axios
      .post(
        "http://ec2-52-79-187-71.ap-northeast-2.compute.amazonaws.com:8080/member",
        userInfo
      )
      .then(function (response) {
        console.log(response);
        /*console.log(response.data);
        console.log(response.config);
        setUserIDNumber(response.data);
        setUserName(userInfo["name"]);*/
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const markedDates = {
    "2022-11-01": { selected: true, marked: true, selectedColor: "#ffda79" },
    "2022-11-02": { marked: true },
    "2022-11-03": { marked: true, dotColor: "#ffda79", activeOpacity: 0 },
    "2022-11-04": { disabled: true, disableTouchEvent: true },
  };

  const [login, setLogin] = useRecoilState(loginFlag);
  useEffect(
    () => {
      /*getUserIDNumber();*/
    },
    [
      /*isFocused*/
    ]
  ); // 주석 풀면 캘린더 스크린에 접속할 때마다 post가 실행됨

  return (
    <Body>
      {login === 0 ? (
        <View style={{ marginVertical: 320 }}>
          <Txt style={{ textAlign: "center" }}>로그인이 필요합니다.</Txt>
        </View> /* 여기에 그림 귀여운 거 들어갔으면 좋겠다! */
      ) : (
        <View>
          <Header>
            <Gom
              source={require("/Users/leesukcheol/memento/assets/images/gom-unscreen.gif")}
            />
            <View style={{ alignItems: "center" }}>
              <Hello>안녕하세요</Hello>
              <HighlightText
                isFixed
                underlineSize={13}
                underlineColor="#ffda79"
                textStyle={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "black",
                }}
                text={userName}
              />
            </View>
            <Gom
              source={require("/Users/leesukcheol/memento/assets/images/gom.png")}
            />
          </Header>
          <Container>
            <Calendar
              onDayPress={(day) => navigate("Stack", { screen: "Days" })} // 날짜 클릭하면 스택으로 이동
              minDate={"2022-11-01"}
              //markingType={"multi-dot"}
              markedDates={markedDates}
              hideExtraDays={true}
              style={styles.calendar}
              theme={{
                selectedDayBackgroundColor: "#ffda79",
                arrowColor: "#ffda79",
                dotColor: "#ffda79",
                todayButtonFontWeight: "bold",
                //textDayFontWeight: "bold",
                //textDayHeaderFontSize: 14,
                textDayHeaderFontWeight: "bold",
                textMonthFontWeight: "bold",
                arrowWidth: 100,
                arrowStyle: { padding: 10, margin: 10 },
                textMonthFontSize: 20,
                textDayFontSize: 15,
              }}
            ></Calendar>
          </Container>
          <Footer>
            <Target onPress={() => navigate("Stack", { screen: "HomeInfos" })}>
              <Txt>영츠하이머 그게 뭔데?</Txt>
            </Target>
            <Target
              onPress={() => navigate("Stack", { screen: "HomeDiagnosis" })}
            >
              <Txt>영츠하이머 자가 진단!</Txt>
            </Target>
            <Target onPress={() => navigate("Stack", { screen: "HomeGame" })}>
              <Txt>영츠하이머 예방 게임!</Txt>
            </Target>
          </Footer>
        </View>
      )}
    </Body>
  );
};

const styles = StyleSheet.create({
  calendar: {
    marginTop: 10,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "black",
    borderRadius: 10,
  },
});

export default CalendarView;

// 그 기록 있는 날짜는 파랑 마크업 필요한데 그거 찾아서 넣기

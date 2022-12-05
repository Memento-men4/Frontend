import React, { useEffect, useState } from "react";
import { Calendar } from "react-native-calendars";
import { StyleSheet, View } from "react-native";
import styled from "styled-components/native";
import HighlightText from "react-native-highlight-underline-text";
import { loginFlag, UserIDNumber, UserName } from "../atom";
import { useRecoilState } from "recoil";
import axios from "axios";
import { RecordDate, RecordResponse, TodayDate, TimelineData } from "../atom";
import { useIsFocused } from "@react-navigation/native";

const CalendarView = ({ navigation: { navigate } }) => {
  const [login, setLogin] = useRecoilState(loginFlag);
  // 전역변수로 recordDate 선언하고, recording에서 날짜를 받아와서 저장하고, calendar에서 불러와서 표시하기
  const [recordDate, setRecordDate] = useRecoilState(RecordDate);
  // 전역변수로 recordResponse 선언하고, recording에서 서버로 데이터 보내고, 날짜 클릭했을 때 그 데이터 받아오기
  const [recordResponse, setRecordResponse] = useRecoilState(RecordResponse);
  // 달력에 특정 날짜 클릭하면 하루 스크린에서 오늘 날짜 띄워줘야 해서 그걸 위한 전역변수
  const [todayDate, setTodayDate] = useRecoilState(TodayDate);
  const isFocused = useIsFocused();
  const [userName, setUserName] = useRecoilState(UserName);
  const [userIDNumber, setUserIDNumber] = useRecoilState(UserIDNumber);
  // 전역변수로 timelineData 선언하고, calendar에서 날짜 클릭하면 그 날짜에 해당하는 데이터 받아와서 저장하기 하늘이가 준거
  const [timelineData, setTimelineData] = useRecoilState(TimelineData);
  const getUserIDNumber = () => {
    //const [loading, setLoading] = useState(false);
    //const [error, setError] = useState(null);
    const userInfo = {
      id: "dsfsd",
      password: "12344sf",
      name: "이석철",
      phoneNumber: "010-1111-1111",
      gender: "FEMALE",
      type: "GENERAL",
      birthDay: "1993-12-01",
      email: "rcjf9@naver,com",
    };
    // 첫 유저 정보 서버로
    axios
      .post(
        "http://ec2-52-79-187-71.ap-northeast-2.compute.amazonaws.com:8080/member",
        userInfo
      )
      .then(function (response) {
        console.log(response);
        /*
        console.log(response.data);
        console.log(response.config);
        */
        setUserName(userInfo["name"]);
        setUserIDNumber(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(
    () => {
      getUserIDNumber();
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
            <Character
              source={require("/Users/leesukcheol/memento/assets/images/bbiyak1.png")}
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
                text={userName + " 님"}
              />
            </View>
            <Character
              source={require("/Users/leesukcheol/memento/assets/images/bbiyak2.png")}
            />
          </Header>
          <Container>
            <Calendar
              onDayPress={(day) => {
                axios
                  .get(
                    "http://ec2-52-79-187-71.ap-northeast-2.compute.amazonaws.com:8080/day",
                    {
                      params: {
                        date: day.dateString,
                        member_seq: 1,
                      },
                    },
                    { withCredentials: true }
                  )
                  .then(function (response) {
                    console.log(response.data[0]);
                    for (let i = 0; i < response.data.length; i++) {
                      if (response.data[i]["title"] === "LG 가전") {
                        response.data[i] = {
                          ...response.data[i],
                          icon: require("../assets/images/LG.png"),
                        };
                      } else if (response.data[i]["title"] === "한양대학교") {
                        response.data[i] = {
                          ...response.data[i],
                          icon: require("../assets/images/hanyang.png"),
                        };
                      }
                    }
                    setTimelineData(response.data);
                    setTodayDate(day.dateString);
                  })
                  .catch(function (error) {
                    console.log("Calendar usernum: ", userIDNumber);
                    console.log(
                      "Record Response 들어오면 빈칸 아님",
                      recordResponse
                    );
                    console.log(error);
                  });
                navigate("Stack", { screen: "Days" });
                /* 
                    이하늘이 정렬해서 던져준 데이터 받기
                    axios
                      .get(
                        "http://ec2-52-79-187-71.ap-northeast-2.compute.amazonaws.com:8080/record/date",
                        {
                          params: {
                            date: day.dateString,
                            member_seq: 1,
                          },
                        },
                        { withCredentials: true }
                      )
                      .then(function (response) {
                        setRecordResponse(response.data);
                        setTodayDate(day.dateString);
                      })
                      .catch(function (error) {
                        console.log("Calendar usernum: ", userIDNumber);
                        console.log(
                          "Record Response 들어오면 빈칸 아님",
                          recordResponse
                        );
                        console.log(error);
                      });
                      */
              }}
              minDate={"2022-11-01"}
              //markingType={"multi-dot"}
              markedDates={recordDate}
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
  margin-top: 28px;
  font-weight: bold;
`;
const Txt = styled.Text`
  font-size: 15px;
  font-weight: bold;
  text-align: center;
`;
const Character = styled.Image`
  width: 120px;
  height: 90px;
`;
export default CalendarView;

// 그 기록 있는 날짜는 파랑 마크업 필요한데 그거 찾아서 넣기

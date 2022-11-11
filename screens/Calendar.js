import React from "react";
import { Calendar } from "react-native-calendars";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

const Body = styled.View``;
const Footer = styled.View``;
const Target = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: #ffda79;
  border-radius: 10px;
  padding: 20px;
  margin: 5px;
  flex: 1;
  border: 2px solid black;
`;

const Txt = styled.Text`
  font-size: 20px;
  font-weight: bold;
  padding: 10px;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 0px;
  padding-right: 0px;
  text-align: center;
`;

const CalendarView = ({ navigation: { navigate } }) => {
  const markedDates = {
    "2022-11-01": { selected: true, marked: true, selectedColor: "#ffda79" },
    "2022-11-02": { marked: true },
    "2022-11-03": { marked: true, dotColor: "#ffda79", activeOpacity: 0 },
    "2022-11-04": { disabled: true, disableTouchEvent: true },
  };
  return (
    <Body>
      <Calendar
        onDayPress={(day) => navigate("Stack", { screen: "Days" })} // 날짜 클릭하면 스택으로 이동
        //onDayPress={(day) => console.log("selected day", day)}
        markedDates={markedDates}
        hideExtraDays={true}
        style={styles.calendar}
        theme={{
          selectedDayBackgroundColor: "#ffda79",
          arrowColor: "#ffda79",
          dotColor: "#ffda79",
          todayButtonFontWeight: "bold",
        }}
      ></Calendar>
      <Footer
        style={{
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Target onPress={() => navigate("Stack", { screen: "Infos" })}>
          <Txt>
            💡{"\n"} 영츠하이머 {"\n"} 예방 방법
          </Txt>
        </Target>
        <Target onPress={() => navigate("Stack", { screen: "Game" })}>
          <Txt>
            💡{"\n"} 영츠하이머 {"\n"} 게임
          </Txt>
        </Target>
      </Footer>
    </Body>
  );
};

const styles = StyleSheet.create({
  calendar: {
    marginTop: 10,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
    borderRadius: 10,
  },
});

export default CalendarView;

// 그 기록 있는 날짜는 파랑 마크업 필요한데 그거 찾아서 넣기

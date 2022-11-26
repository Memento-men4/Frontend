import React from "react";
import { Calendar } from "react-native-calendars";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import styled from "styled-components/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { imageName } from "/Users/leesukcheol/memento/images.js"; // 실제 디바이스에서 돌릴 때 에러 뜨길래..
import HighlightText from "react-native-highlight-underline-text";

const Body = styled.View`
  background-color: white;
`;
const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 10px;
  margin-bottom: 0px;
  border: 1px solid black;
  background-color: #f2f2f2;
  box-shadow: 1px 1px 3px rgba(41, 30, 95, 0.9);
  border-radius: 10px;
`;
const Footer = styled.View`
  box-shadow: 1px 1px 3px rgba(41, 30, 95, 0.9);
`;
const Target = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: #ffda79;
  border-radius: 10px;
  padding: 20px;
  margin: 5px;
  flex: 1;
  border: 1px solid black;
  box-shadow: 1px 1px 3px rgba(41, 30, 95, 0.7);
`; // margin: 두 버튼 사이 간격
const Hello = styled.Text`
  font-size: 20px;
  margin-top: 31px;
  font-weight: bold;
`;

const Txt = styled.Text`
  font-size: 20px;
  font-weight: bold;
  padding: 5px;
  padding-left: 0px;
  padding-right: 0px;
  text-align: center;
`;

const Gom = styled.Image`
  width: 100px;
  height: 100px;
`;

const CalendarView = ({ navigation: { navigate } }) => {
  const markedDates = {
    "2022-11-01": { selected: true, marked: true, selectedColor: "#ffda79" },
    "2022-11-02": { marked: true },
    "2022-11-03": { marked: true, dotColor: "#ffda79", activeOpacity: 0 },
    "2022-11-04": { disabled: true, disableTouchEvent: true },
  };
  const name = "이하늘 님";
  return (
    <Body>
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
            text={name}
          />
        </View>
        <Gom
          source={require("/Users/leesukcheol/memento/assets/images/gom.png")}
        />
      </Header>
      <Footer>
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
      </Footer>
      <Footer
        style={{
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Target onPress={() => navigate("Stack", { screen: "Infos" })}>
          <Txt>영츠하이머 {"\n"} 그게 뭔데?</Txt>
        </Target>
        <Target onPress={() => navigate("Stack", { screen: "Game" })}>
          <Txt>영츠하이머 {"\n"} 예방 게임</Txt>
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
    borderBottomColor: "black",
    borderRadius: 10,
  },
});

export default CalendarView;

// 그 기록 있는 날짜는 파랑 마크업 필요한데 그거 찾아서 넣기

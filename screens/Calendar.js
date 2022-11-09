import React from "react";
import { Calendar } from "react-native-calendars";
import { StyleSheet } from "react-native";

function CalendarView({ navigation: { navigate } }) {
  return (
    <Calendar
      onDayPress={(day) => navigate("Stack", { screen: "Days" })} // 날짜 클릭하면 스택으로 이동
      hideExtraDays={true}
      style={styles.calendar}
    />
  );
}

const styles = StyleSheet.create({
  calendar: {
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
});

export default CalendarView;
// 그 기록 있는 날짜는 파랑 마크업 필요한데 그거 찾아서 넣기

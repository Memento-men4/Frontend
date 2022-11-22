import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Write from "../navigation/Write";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { format } from "date-fns";
import ko from "date-fns/esm/locale/ko/index.js";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Login from "./Login";

const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 50px;
  margin-top: 20px;
  text-align: center;
`;

const Body = styled.View`
  flex-direction: column;
  padding: 10px;
  padding-top: 20px;
  background-color: "#D8D8D8";
`;

const Btn = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: #ffda79;
  padding-top: 10px;
  padding-bottom: 10px;
  flex-direction: row;
`;
const Footer = styled.View`
  flex-direction: row;
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
`;
const Airplane = () => {
  <Content style={{ marginTop: 10 }}>
    <Footer style={{ backgroundColor: "#ffda79" }}>
      <Btn style={{ padding: 20 }}>
        <Ionicons name="ios-airplane" size={24} color="black" />
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
    <Btn
      style={{
        padding: 15,
        borderRadius: 30,
        marginLeft: 5,
        backgroundColor: "#D4D4D4",
      }}
    >
      <Text>설정</Text>
    </Btn>
  </Content>;
};

export var array = [];

// justify-content: center, align-items: center; 갈기면 상하좌우 센터
const LG = ({ navigation: { navigate } }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    AsyncStorage.getItem("Product", (err, result) => {
      //array.push(result);
      //array.includes("🤯"
      if (result == "🤯") {
        setData((data) => [...data, 1]);
      } else if (result == "🥲") {
        setData((data) => [...data, 2]);
      } else if (result == "🤬") {
        setData((data) => [...data, 3]);
      } else if (result == "🤗") {
        setData((data) => [...data, 4]);
      } else if (result == "🥰") {
        setData((data) => [...data, 5]);
      } else if (result == "😊") {
        setData((data) => [...data, 6]);
      } else if (result == "🤩") {
        setData((data) => [...data, 7]);
      }
    });
  }, []);
  array = data;
  console.log(array);
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
  const SetBtn = () => (
    <Btn
      style={{
        padding: 15,
        borderRadius: 30,
        marginLeft: 5,
        backgroundColor: "#D4D4D4",
      }}
    >
      <Text>설정</Text>
    </Btn>
  );
  const Airplane = () => (
    <Content style={{ marginTop: 10 }}>
      <Footer style={{ backgroundColor: "#ffda79" }}>
        <Btn style={{ padding: 20 }}>
          <Ionicons name="ios-airplane" size={24} color="black" />
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
  const TV = () => (
    <Content style={{ marginTop: 10 }}>
      <Footer style={{ backgroundColor: "#ffda79" }}>
        <Btn style={{ padding: 20 }}>
          <Ionicons name="tv" size={24} color="black" />
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
    <Body style={{ flex: 1, backgroundColor: "white" }}>
      <Title>우리 집 LG 가전</Title>
      <ScrollView style={{ backgroundColor: "white" }}>
        {array.includes(1) ? <Airplane /> : null}
        {array.includes(2) ? <TV /> : null}
        {array.includes(3) ? <Drum /> : null}
        {array.includes(4) ? <Airplane /> : null}
        {array.includes(5) ? <Airplane /> : null}
        {array.includes(6) ? <Airplane /> : null}
        {array.includes(7) ? <Airplane /> : null}
      </ScrollView>
      <AddBtn onPress={() => navigate("Write", { screen: "Write" })}>
        <AddBtnText>+</AddBtnText>
      </AddBtn>
    </Body>
  );
};

export default LG;

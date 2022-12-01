import React, { useState, useEffect, useRef } from "react";
import { View, Text, Alert } from "react-native";
import styled from "styled-components/native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { format } from "date-fns";
import ko from "date-fns/esm/locale/ko/index.js";
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import {
  WriteFormat,
  UserIDNumber,
  FirstData,
  SecondData,
  ThirdData,
  FourthData,
} from "../atom";
import { useRecoilState } from "recoil";
import { useIsFocused } from "@react-navigation/native";
import axios from "axios";

const LG = ({ navigation: { navigate } }) => {
  const count = useRef(0);
  const isFocused = useIsFocused();
  const [writeFormat, setWriteFormat] = useRecoilState(WriteFormat);
  const check = useRef([0, 0, 0, 0, 0, 0, 0]); // 가전제품 종류별 렌더링
  const [userIDNumber, setUserIDNumber] = useRecoilState(UserIDNumber);
  /*
  12/4에 문제 없으면 삭제
  const [mon, setMon] = useState(false);
  const [tue, setTue] = useState(false);
  const [wed, setWed] = useState(false);
  const [thu, setThu] = useState(false);
  const [fri, setFri] = useState(false);
  const [sat, setSat] = useState(false);
  const [sun, setSun] = useState(false);
  */

  useEffect(() => {
    if (writeFormat["name"] == "🤯") {
      check.current[0] = 1;
    } else if (writeFormat["name"] == "🥲") {
      check.current[1] = 1;
    } else if (writeFormat["name"] == "🤬") {
      check.current[2] = 1;
    } else if (writeFormat["name"] == "🤗") {
      check.current[3] = 1;
    } else if (writeFormat["name"] == "🥰") {
      check.current[4] = 1;
    } else if (writeFormat["name"] == "😊") {
      check.current[5] = 1;
    } else if (writeFormat["name"] == "🤩") {
      check.current[6] = 1;
    }
  }, [writeFormat]); // 제발 여기에 꼭 넣어야함!!!

  const [date, onChangeDate] = useState(new Date()); // 선택 날짜
  const [mode, setMode] = useState("date"); // 모달 유형
  const [visible, setVisible] = useState(false); // 모달 노출 여부
  /*
  12/4에 문제 없으면 삭제
  const onPressDate = () => {
    // 날짜 클릭 시
    setMode("date"); // 모달 유형을 date로 변경
    setVisible(true); // 모달 open
  };
  */
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
    Alert.alert("설정이 완료되었습니다.");
    //타임라인으로 전송 구현해야함
  };
  const SetBtn = () => (
    <Btn
      style={{
        padding: 15,
        borderRadius: 10,
        marginLeft: 5,
        backgroundColor: "#D4D4D4",
        justifyContent: "center",
      }}
      onPress={() => {
        /* 
        setWriteFormat으로 값 변경해줘야함...
        */
        onSubmit();
      }}
    >
      <Text>설정</Text>
    </Btn>
  );
  const [first, setFirst] = useRecoilState(FirstData);
  const [second, setSecond] = useRecoilState(SecondData);
  const [third, setThird] = useRecoilState(ThirdData);
  const [fourth, setFourth] = useRecoilState(FourthData);

  const Airplane = () => {
    const [monday, setMonday] = useState(first.mon);
    const [tuesday, setTuesday] = useState(first.tue);
    const [wednesday, setWednesday] = useState(first.wed);
    const [thursday, setThursday] = useState(first.thr);
    const [friday, setFriday] = useState(first.fri);
    const [saturday, setSaturday] = useState(first.sat);
    const [sunday, setSunday] = useState(first.sun);
    const onMonPress = () => {
      setMonday(!monday);
    };
    const onTuePress = () => {
      setTuesday(!tuesday);
    };
    const onWedPress = () => {
      setWednesday(!wednesday);
    };
    const onThuPress = () => {
      setThursday(!thursday);
    };
    const onFriPress = () => {
      setFriday(!friday);
    };
    const onSatPress = () => {
      setSaturday(!saturday);
    };
    const onSunPress = () => {
      setSunday(!sunday);
    };
    const [date1, onChangeDate1] = useState(new Date()); // 선택 날짜
    const [mode1, setMode1] = useState("date"); // 모달 유형
    const [visible1, setVisible1] = useState(false); // 모달 노출 여부
    const onPressTime1 = () => {
      // 시간 클릭 시
      setMode1("time"); // 모달 유형을 time으로 변경
      setVisible1(true); // 모달 open
    };
    const onConfirm1 = (selectedDate) => {
      // 날짜 또는 시간 선택 시
      setVisible1(false); // 모달 close
      onChangeDate1(selectedDate); // 선택한 날짜 변경
      //console.log(selectedDate);
    };
    const onCancel1 = () => {
      // 취소 시
      setVisible1(false); // 모달 close
    };
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
                <MaterialCommunityIcons
                  name="washing-machine"
                  size={30}
                  color="black"
                />
              </View>
              <View
                style={{
                  flexDirection: "column",
                  alignItems: "center",
                  flex: 3,
                }}
              >
                <Btn style={{ flex: 1 }} onPress={onPressTime1}>
                  <ShowDate style={{ fontSize: 20 }}>
                    {format(new Date(date1), "p", { locale: ko })}
                  </ShowDate>
                </Btn>
                <View style={{ flex: 1, flexDirection: "row", marginRight: 5 }}>
                  <DayBtn selected={monday} onPress={() => onMonPress()}>
                    <Text style={{ fontSize: 20 }}>월</Text>
                  </DayBtn>
                  <DayBtn selected={tuesday} onPress={() => onTuePress()}>
                    <Text style={{ fontSize: 20 }}>화</Text>
                  </DayBtn>
                  <DayBtn selected={wednesday} onPress={() => onWedPress()}>
                    <Text style={{ fontSize: 20 }}>수</Text>
                  </DayBtn>
                  <DayBtn selected={thursday} onPress={() => onThuPress()}>
                    <Text style={{ fontSize: 20 }}>목</Text>
                  </DayBtn>
                  <DayBtn selected={friday} onPress={() => onFriPress()}>
                    <Text style={{ fontSize: 20 }}>금</Text>
                  </DayBtn>
                  <DayBtn selected={saturday} onPress={() => onSatPress()}>
                    <Text style={{ fontSize: 20 }}>토</Text>
                  </DayBtn>
                  <DayBtn selected={sunday} onPress={() => onSunPress()}>
                    <Text style={{ fontSize: 20 }}>일</Text>
                  </DayBtn>
                </View>
              </View>
              <DateTimePickerModal
                isVisible={visible1}
                mode={mode1}
                onConfirm={onConfirm1}
                onCancel={onCancel1}
                date={date1}
              />
            </View>
          </Footer>
          <SetBtn style={{ flex: 1 }} />
        </View>
      </Content>
    );
  };
  const TV = () => {
    const [monday, setMonday] = useState(second.mon);
    const [tuesday, setTuesday] = useState(second.tue);
    const [wednesday, setWednesday] = useState(second.wed);
    const [thursday, setThursday] = useState(second.thr);
    const [friday, setFriday] = useState(second.fri);
    const [saturday, setSaturday] = useState(second.sat);
    const [sunday, setSunday] = useState(second.sun);
    const onMonPress = () => {
      setMonday(!monday);
    };
    const onTuePress = () => {
      setTuesday(!tuesday);
    };
    const onWedPress = () => {
      setWednesday(!wednesday);
    };
    const onThuPress = () => {
      setThursday(!thursday);
    };
    const onFriPress = () => {
      setFriday(!friday);
    };
    const onSatPress = () => {
      setSaturday(!saturday);
    };
    const onSunPress = () => {
      setSunday(!sunday);
    };
    const [date2, onChangeDate2] = useState(new Date()); // 선택 날짜
    const [mode2, setMode2] = useState("date"); // 모달 유형
    const [visible2, setVisible2] = useState(false); // 모달 노출 여부
    const onPressTime2 = () => {
      // 시간 클릭 시
      setMode2("time"); // 모달 유형을 time으로 변경
      setVisible2(true); // 모달 open
    };
    const onConfirm2 = (selectedDate) => {
      // 날짜 또는 시간 선택 시
      setVisible2(false); // 모달 close
      onChangeDate2(selectedDate); // 선택한 날짜 변경
      //console.log(selectedDate);
    };
    const onCancel2 = () => {
      // 취소 시
      setVisible2(false); // 모달 close
    };
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
                <MaterialCommunityIcons
                  name="air-purifier"
                  size={30}
                  color="black"
                />
              </View>
              <View
                style={{
                  flexDirection: "column",
                  alignItems: "center",
                  flex: 3,
                }}
              >
                <Btn style={{ flex: 1 }} onPress={onPressTime2}>
                  <ShowDate style={{ fontSize: 20 }}>
                    {format(new Date(date2), "p", { locale: ko })}
                  </ShowDate>
                </Btn>
                <View style={{ flex: 1, flexDirection: "row", marginRight: 5 }}>
                  <DayBtn selected={monday} onPress={() => onMonPress()}>
                    <Text style={{ fontSize: 20 }}>월</Text>
                  </DayBtn>
                  <DayBtn selected={tuesday} onPress={() => onTuePress()}>
                    <Text style={{ fontSize: 20 }}>화</Text>
                  </DayBtn>
                  <DayBtn selected={wednesday} onPress={() => onWedPress()}>
                    <Text style={{ fontSize: 20 }}>수</Text>
                  </DayBtn>
                  <DayBtn selected={thursday} onPress={() => onThuPress()}>
                    <Text style={{ fontSize: 20 }}>목</Text>
                  </DayBtn>
                  <DayBtn selected={friday} onPress={() => onFriPress()}>
                    <Text style={{ fontSize: 20 }}>금</Text>
                  </DayBtn>
                  <DayBtn selected={saturday} onPress={() => onSatPress()}>
                    <Text style={{ fontSize: 20 }}>토</Text>
                  </DayBtn>
                  <DayBtn selected={sunday} onPress={() => onSunPress()}>
                    <Text style={{ fontSize: 20 }}>일</Text>
                  </DayBtn>
                </View>
              </View>
              <DateTimePickerModal
                isVisible={visible2}
                mode={mode2}
                onConfirm={onConfirm2}
                onCancel={onCancel2}
                date={date2}
              />
            </View>
          </Footer>
          <SetBtn style={{ flex: 1 }} />
        </View>
      </Content>
    );
  };
  const Drum = () => {
    const [monday, setMonday] = useState(third.mon);
    const [tuesday, setTuesday] = useState(third.tue);
    const [wednesday, setWednesday] = useState(third.wed);
    const [thursday, setThursday] = useState(third.thr);
    const [friday, setFriday] = useState(third.fri);
    const [saturday, setSaturday] = useState(third.sat);
    const [sunday, setSunday] = useState(third.sun);
    const onMonPress = () => {
      setMonday(!monday);
    };
    const onTuePress = () => {
      setTuesday(!tuesday);
    };
    const onWedPress = () => {
      setWednesday(!wednesday);
    };
    const onThuPress = () => {
      setThursday(!thursday);
    };
    const onFriPress = () => {
      setFriday(!friday);
    };
    const onSatPress = () => {
      setSaturday(!saturday);
    };
    const onSunPress = () => {
      setSunday(!sunday);
    };
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
                <Ionicons name="water" size={30} color="black" />
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
                  <DayBtn selected={monday} onPress={() => onMonPress()}>
                    <Text style={{ fontSize: 20 }}>월</Text>
                  </DayBtn>
                  <DayBtn selected={tuesday} onPress={() => onTuePress()}>
                    <Text style={{ fontSize: 20 }}>화</Text>
                  </DayBtn>
                  <DayBtn selected={wednesday} onPress={() => onWedPress()}>
                    <Text style={{ fontSize: 20 }}>수</Text>
                  </DayBtn>
                  <DayBtn selected={thursday} onPress={() => onThuPress()}>
                    <Text style={{ fontSize: 20 }}>목</Text>
                  </DayBtn>
                  <DayBtn selected={friday} onPress={() => onFriPress()}>
                    <Text style={{ fontSize: 20 }}>금</Text>
                  </DayBtn>
                  <DayBtn selected={saturday} onPress={() => onSatPress()}>
                    <Text style={{ fontSize: 20 }}>토</Text>
                  </DayBtn>
                  <DayBtn selected={sunday} onPress={() => onSunPress()}>
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
  const Clothes = () => {
    const [monday, setMonday] = useState(fourth.mon);
    const [tuesday, setTuesday] = useState(fourth.tue);
    const [wednesday, setWednesday] = useState(fourth.wed);
    const [thursday, setThursday] = useState(fourth.thr);
    const [friday, setFriday] = useState(fourth.fri);
    const [saturday, setSaturday] = useState(fourth.sat);
    const [sunday, setSunday] = useState(fourth.sun);
    const onMonPress = () => {
      setMonday(!monday);
    };
    const onTuePress = () => {
      setTuesday(!tuesday);
    };
    const onWedPress = () => {
      setWednesday(!wednesday);
    };
    const onThuPress = () => {
      setThursday(!thursday);
    };
    const onFriPress = () => {
      setFriday(!friday);
    };
    const onSatPress = () => {
      setSaturday(!saturday);
    };
    const onSunPress = () => {
      setSunday(!sunday);
    };
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
                <MaterialIcons name="dry-cleaning" size={30} color="black" />
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
                  <DayBtn selected={monday} onPress={() => onMonPress()}>
                    <Text style={{ fontSize: 20 }}>월</Text>
                  </DayBtn>
                  <DayBtn selected={tuesday} onPress={() => onTuePress()}>
                    <Text style={{ fontSize: 20 }}>화</Text>
                  </DayBtn>
                  <DayBtn selected={wednesday} onPress={() => onWedPress()}>
                    <Text style={{ fontSize: 20 }}>수</Text>
                  </DayBtn>
                  <DayBtn selected={thursday} onPress={() => onThuPress()}>
                    <Text style={{ fontSize: 20 }}>목</Text>
                  </DayBtn>
                  <DayBtn selected={friday} onPress={() => onFriPress()}>
                    <Text style={{ fontSize: 20 }}>금</Text>
                  </DayBtn>
                  <DayBtn selected={saturday} onPress={() => onSatPress()}>
                    <Text style={{ fontSize: 20 }}>토</Text>
                  </DayBtn>
                  <DayBtn selected={sunday} onPress={() => onSunPress()}>
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
          {check.current[3] !== 0 ? <Clothes /> : null}
        </ScrollView>
      </Container>
      <AddBtn onPress={() => navigate("Stack", { screen: "Write" })}>
        <AddBtnText>+</AddBtnText>
      </AddBtn>
    </Body>
  );
};
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
  padding-horizontal: 2px;
  margin-horizontal: 2px;
  padding-vertical: 3px;
  border-width: 1px;
  border-radius: 5px;
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

export default LG;

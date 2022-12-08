import React, { useState, useEffect, useRef } from "react";
import { View, Text, Alert, Image } from "react-native";
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

  const [first, setFirst] = useRecoilState(FirstData);
  const [second, setSecond] = useRecoilState(SecondData);
  const [third, setThird] = useRecoilState(ThirdData);
  const [fourth, setFourth] = useRecoilState(FourthData);

  const WASHING_MACHINE = () => {
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
    const temp1 = useRef({});
    const SetBtn1 = () => (
      <LGSetBtn
        onPress={() => {
          temp1.current = {
            member_seq: userIDNumber,
            serialNum: "test1",
            type: "WASHING_MACHINE",
            settingTime:
              (date1.getHours() < 10 ? "0" : "") +
              date1.getHours() +
              ":" +
              (date1.getMinutes() < 10 ? "0" : "") +
              date1.getMinutes(),
            mon: monday,
            tue: tuesday,
            wed: wednesday,
            thr: thursday,
            fri: friday,
            sat: saturday,
            sun: sunday,
          };
          onSubmit1();
        }}
      >
        <Text>설정</Text>
      </LGSetBtn>
    );
    const onSubmit1 = async () => {
      const response = await axios
        .post(
          "http://ec2-52-79-187-71.ap-northeast-2.compute.amazonaws.com:8080/appliance",
          temp1.current
        )
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      console.log("temp1:", temp1);
      Alert.alert("설정이 완료되었습니다.");
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
                <View
                  style={{ flex: 1, flexDirection: "row", marginRight: 10 }}
                >
                  <DayBtn selected={monday} onPress={() => onMonPress()}>
                    <Text style={{ fontSize: 17 }}>월</Text>
                  </DayBtn>
                  <DayBtn selected={tuesday} onPress={() => onTuePress()}>
                    <Text style={{ fontSize: 17 }}>화</Text>
                  </DayBtn>
                  <DayBtn selected={wednesday} onPress={() => onWedPress()}>
                    <Text style={{ fontSize: 17 }}>수</Text>
                  </DayBtn>
                  <DayBtn selected={thursday} onPress={() => onThuPress()}>
                    <Text style={{ fontSize: 17 }}>목</Text>
                  </DayBtn>
                  <DayBtn selected={friday} onPress={() => onFriPress()}>
                    <Text style={{ fontSize: 17 }}>금</Text>
                  </DayBtn>
                  <DayBtn selected={saturday} onPress={() => onSatPress()}>
                    <Text style={{ fontSize: 17 }}>토</Text>
                  </DayBtn>
                  <DayBtn selected={sunday} onPress={() => onSunPress()}>
                    <Text style={{ fontSize: 17 }}>일</Text>
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
          <SetBtn1 style={{ flex: 1 }} />
        </View>
      </Content>
    );
  };
  const AIR_CLEANER = () => {
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
    const temp2 = useRef({});
    const SetBtn2 = () => (
      <LGSetBtn
        onPress={() => {
          temp2.current = {
            member_seq: userIDNumber,
            serialNum: "test1",
            type: "AIR_CLEANER",
            settingTime:
              (date2.getHours() < 10 ? "0" : "") +
              date2.getHours() +
              ":" +
              (date2.getMinutes() < 10 ? "0" : "") +
              date2.getMinutes(),
            mon: monday,
            tue: tuesday,
            wed: wednesday,
            thr: thursday,
            fri: friday,
            sat: saturday,
            sun: sunday,
          };
          onSubmit2();
        }}
      >
        <Text>설정</Text>
      </LGSetBtn>
    );
    const onSubmit2 = async () => {
      const response = await axios
        .post(
          "http://ec2-52-79-187-71.ap-northeast-2.compute.amazonaws.com:8080/appliance",
          temp2
        )
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      Alert.alert("설정이 완료되었습니다.");
      //타임라인으로 전송 구현해야함
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
                <View
                  style={{ flex: 1, flexDirection: "row", marginRight: 10 }}
                >
                  <DayBtn selected={monday} onPress={() => onMonPress()}>
                    <Text style={{ fontSize: 17 }}>월</Text>
                  </DayBtn>
                  <DayBtn selected={tuesday} onPress={() => onTuePress()}>
                    <Text style={{ fontSize: 17 }}>화</Text>
                  </DayBtn>
                  <DayBtn selected={wednesday} onPress={() => onWedPress()}>
                    <Text style={{ fontSize: 17 }}>수</Text>
                  </DayBtn>
                  <DayBtn selected={thursday} onPress={() => onThuPress()}>
                    <Text style={{ fontSize: 17 }}>목</Text>
                  </DayBtn>
                  <DayBtn selected={friday} onPress={() => onFriPress()}>
                    <Text style={{ fontSize: 17 }}>금</Text>
                  </DayBtn>
                  <DayBtn selected={saturday} onPress={() => onSatPress()}>
                    <Text style={{ fontSize: 17 }}>토</Text>
                  </DayBtn>
                  <DayBtn selected={sunday} onPress={() => onSunPress()}>
                    <Text style={{ fontSize: 17 }}>일</Text>
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
          <SetBtn2 style={{ flex: 1 }} />
        </View>
      </Content>
    );
  };
  const WATER_MACHINE = () => {
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
    const [date3, onChangeDate3] = useState(new Date()); // 선택 날짜
    const [mode3, setMode3] = useState("date"); // 모달 유형
    const [visible3, setVisible3] = useState(false); // 모달 노출 여부
    const onPressTime3 = () => {
      // 시간 클릭 시
      setMode3("time"); // 모달 유형을 time으로 변경
      setVisible3(true); // 모달 open
    };
    const onConfirm3 = (selectedDate) => {
      // 날짜 또는 시간 선택 시
      setVisible3(false); // 모달 close
      onChangeDate3(selectedDate); // 선택한 날짜 변경
      //console.log(selectedDate);
    };
    const onCancel3 = () => {
      // 취소 시
      setVisible3(false); // 모달 close
    };
    const temp3 = useRef({});
    const SetBtn3 = () => (
      <LGSetBtn
        onPress={() => {
          temp3.current = {
            member_seq: userIDNumber,
            serialNum: "test1",
            type: "WATER_MACHINE",
            settingTime:
              (date3.getHours() < 10 ? "0" : "") +
              date3.getHours() +
              ":" +
              (date3.getMinutes() < 10 ? "0" : "") +
              date3.getMinutes(),
            mon: monday,
            tue: tuesday,
            wed: wednesday,
            thr: thursday,
            fri: friday,
            sat: saturday,
            sun: sunday,
          };
          onSubmit3();
        }}
      >
        <Text>설정</Text>
      </LGSetBtn>
    );
    const onSubmit3 = async () => {
      const response = await axios
        .post(
          "http://ec2-52-79-187-71.ap-northeast-2.compute.amazonaws.com:8080/appliance",
          temp3
        )
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      Alert.alert("설정이 완료되었습니다.");
      //타임라인으로 전송 구현해야함
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
                <Btn style={{ flex: 1 }} onPress={onPressTime3}>
                  <ShowDate style={{ fontSize: 20 }}>
                    {format(new Date(date3), "p", { locale: ko })}
                  </ShowDate>
                </Btn>
                <View
                  style={{ flex: 1, flexDirection: "row", marginRight: 10 }}
                >
                  <DayBtn selected={monday} onPress={() => onMonPress()}>
                    <Text style={{ fontSize: 17 }}>월</Text>
                  </DayBtn>
                  <DayBtn selected={tuesday} onPress={() => onTuePress()}>
                    <Text style={{ fontSize: 17 }}>화</Text>
                  </DayBtn>
                  <DayBtn selected={wednesday} onPress={() => onWedPress()}>
                    <Text style={{ fontSize: 17 }}>수</Text>
                  </DayBtn>
                  <DayBtn selected={thursday} onPress={() => onThuPress()}>
                    <Text style={{ fontSize: 17 }}>목</Text>
                  </DayBtn>
                  <DayBtn selected={friday} onPress={() => onFriPress()}>
                    <Text style={{ fontSize: 17 }}>금</Text>
                  </DayBtn>
                  <DayBtn selected={saturday} onPress={() => onSatPress()}>
                    <Text style={{ fontSize: 17 }}>토</Text>
                  </DayBtn>
                  <DayBtn selected={sunday} onPress={() => onSunPress()}>
                    <Text style={{ fontSize: 17 }}>일</Text>
                  </DayBtn>
                </View>
              </View>
              <DateTimePickerModal
                isVisible={visible3}
                mode={mode3}
                onConfirm={onConfirm3}
                onCancel={onCancel3}
                date={date3}
              />
            </View>
          </Footer>
          <SetBtn3 style={{ flex: 1 }} />
        </View>
      </Content>
    );
  };
  const STYLER = () => {
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
    const [date4, onChangeDate4] = useState(new Date()); // 선택 날짜
    const [mode4, setMode4] = useState("date"); // 모달 유형
    const [visible4, setVisible4] = useState(false); // 모달 노출 여부
    const onPressTime4 = () => {
      // 시간 클릭 시
      setMode4("time"); // 모달 유형을 time으로 변경
      setVisible4(true); // 모달 open
    };
    const onConfirm4 = (selectedDate) => {
      // 날짜 또는 시간 선택 시
      setVisible4(false); // 모달 close
      onChangeDate4(selectedDate); // 선택한 날짜 변경
      //console.log(selectedDate);
    };
    const onCancel4 = () => {
      // 취소 시
      setVisible4(false); // 모달 close
    };
    const SetBtn4 = () => (
      <LGSetBtn
        onPress={() => {
          temp4.current = {
            member_seq: userIDNumber,
            serialNum: "test1",
            type: "WASHING_MACHINE",
            settingTime:
              (date4.getHours() < 10 ? "0" : "") +
              date4.getHours() +
              ":" +
              (date4.getMinutes() < 10 ? "0" : "") +
              date4.getMinutes(),
            mon: monday,
            tue: tuesday,
            wed: wednesday,
            thr: thursday,
            fri: friday,
            sat: saturday,
            sun: sunday,
          };
          onSubmit4();
        }}
      >
        <Text>설정</Text>
      </LGSetBtn>
    );
    const onSubmit4 = async () => {
      const response = await axios
        .post(
          "http://ec2-52-79-187-71.ap-northeast-2.compute.amazonaws.com:8080/appliance",
          fourth
        )
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      Alert.alert("설정이 완료되었습니다.");
      //타임라인으로 전송 구현해야함
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
                <Btn style={{ flex: 1 }} onPress={onPressTime4}>
                  <ShowDate style={{ fontSize: 20 }}>
                    {format(new Date(date4), "p", { locale: ko })}
                  </ShowDate>
                </Btn>
                <View
                  style={{ flex: 1, flexDirection: "row", marginRight: 10 }}
                >
                  <DayBtn selected={monday} onPress={() => onMonPress()}>
                    <Text style={{ fontSize: 17 }}>월</Text>
                  </DayBtn>
                  <DayBtn selected={tuesday} onPress={() => onTuePress()}>
                    <Text style={{ fontSize: 17 }}>화</Text>
                  </DayBtn>
                  <DayBtn selected={wednesday} onPress={() => onWedPress()}>
                    <Text style={{ fontSize: 17 }}>수</Text>
                  </DayBtn>
                  <DayBtn selected={thursday} onPress={() => onThuPress()}>
                    <Text style={{ fontSize: 17 }}>목</Text>
                  </DayBtn>
                  <DayBtn selected={friday} onPress={() => onFriPress()}>
                    <Text style={{ fontSize: 17 }}>금</Text>
                  </DayBtn>
                  <DayBtn selected={saturday} onPress={() => onSatPress()}>
                    <Text style={{ fontSize: 17 }}>토</Text>
                  </DayBtn>
                  <DayBtn selected={sunday} onPress={() => onSunPress()}>
                    <Text style={{ fontSize: 17 }}>일</Text>
                  </DayBtn>
                </View>
              </View>
              <DateTimePickerModal
                isVisible={visible4}
                mode={mode4}
                onConfirm={onConfirm4}
                onCancel={onCancel4}
                date={date4}
              />
            </View>
          </Footer>
          <SetBtn4 style={{ flex: 1 }} />
        </View>
      </Content>
    );
  };
  return (
    <Body style={{ flex: 1 }}>
      <Header style={{ flex: 0.95 }}>
        <Character source={require("../assets/images/bbiyak1.png")} />
        <Title>우리 집 LG 가전</Title>
      </Header>
      <Header style={{ marginTop: 25, flex: 5.19 }}>
        <ScrollView style={{ backgroundColor: "#f2f2f2", borderRadius: 10 }}>
          {check.current[0] !== 0 ? <WASHING_MACHINE /> : null}
          {check.current[1] !== 0 ? <AIR_CLEANER /> : null}
          {check.current[2] !== 0 ? <WATER_MACHINE /> : null}
          {check.current[3] !== 0 ? <STYLER /> : null}
        </ScrollView>
      </Header>
      <AddBtn onPress={() => navigate("Stack", { screen: "Write" })}>
        <AddBtnText>+</AddBtnText>
      </AddBtn>
    </Body>
  );
};
const Title = styled.Text`
  font-size: 28px;
  font-weight: bold;
  margin-top: 32px;
  margin-right: 25px;
  text-align: center;
`;
const Body = styled.View`
  flex-direction: column;
  padding: 10px;
  background-color: white;
`;
const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-horizontal: 10px;
  margin-top: 10px;
  background-color: #f2f2f2;
  box-shadow: 1px 1px 3px rgba(41, 30, 95, 0.9);
  border-radius: 10px;
`;
const Btn = styled.TouchableOpacity`
  align-items: center;
  background-color: #ffda79;
  padding-horizontal: 5px;
  padding-vertical: 3px;
`;
const DayBtn = styled.TouchableOpacity`
  align-items: center;
  padding-horizontal: 1px;
  margin-left: 3px;
  margin-right: 3px;
  padding-vertical: 3px;
  border: 0.7px solid #d4d4d4;
  border-radius: 5px;
  background-color: ${(props) => (props.selected ? "#d4d4d4" : "white")};
`;
const Footer = styled.View`
  box-shadow: 1px 1px 3px rgba(41, 30, 95, 0.6);
`;
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
const LGSetBtn = styled.TouchableOpacity`
  padding: 15px;
  border-radius: 10px;
  margin-left: 10px;
  background-color: #d4d4d4;
  justify-content: center;
  box-shadow: 1px 1px 3px rgba(41, 30, 95, 0.6);
  margin-right: 5px;
`;
const Character = styled.Image`
  width: 120px;
  height: 90px;
`;
export default LG;

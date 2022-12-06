import React, { useState, useRef, useEffect } from "react";
import { Alert, Text, View } from "react-native";
import styled from "styled-components/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { format } from "date-fns";
import ko from "date-fns/esm/locale/ko/index.js";
import { ImageBackground } from "react-native";
import HighlightText from "react-native-highlight-underline-text";
import {
  WriteFormat,
  UserIDNumber,
  FirstData,
  SecondData,
  ThirdData,
  FourthData,
  WriteNumber,
} from "../atom";
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { useRecoilState } from "recoil";
import axios from "axios";
import { useIsFocused } from "@react-navigation/native";

const week = ["월", "화", "수", "목", "금", "토", "일"];
const products = ["🤯", "🥲", "🤬", "🤗", "🥰", "😊", "🤩"];
const list1 = [
  <MaterialCommunityIcons name="washing-machine" size={30} color="black" />,
  <MaterialCommunityIcons name="air-purifier" size={30} color="black" />,
  <Ionicons name="water" size={30} color="black" />,
  <MaterialIcons name="dry-cleaning" size={30} color="black" />,
  <MaterialCommunityIcons name="fridge" size={30} color="black" />,
  <MaterialCommunityIcons name="fan" size={30} color="black" />,
  <MaterialCommunityIcons name="air-conditioner" size={30} color="black" />,
];
const Write = ({ navigation: { goBack, navigate } }) => {
  const isFocused = useIsFocused();
  const [selectedProduct, setProduct] = useState(null);
  const [serialNumber, setSerialNumber] = useState("");
  const onChangeText = (text) => setSerialNumber(text);
  const onProductPress = (idx) => setProduct(idx);
  const [writeFormat, setWriteFormat] = useRecoilState(WriteFormat);
  const [mon, setMon] = useState(false);
  const [tue, setTue] = useState(false);
  const [wed, setWed] = useState(false);
  const [thu, setThu] = useState(false);
  const [fri, setFri] = useState(false);
  const [sat, setSat] = useState(false);
  const [sun, setSun] = useState(false);
  const [count, setCount] = useRecoilState(WriteNumber);
  const [first, setFirst] = useRecoilState(FirstData); //해지자
  const [second, setSecond] = useRecoilState(SecondData);
  const [Third, setThird] = useRecoilState(ThirdData);
  const [Fourth, setFourth] = useRecoilState(FourthData);
  useEffect(() => {
    //hi
    console.log("refresh");
    setCount((count) => count + 1);
  }, [isFocused]);

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
  const [date, onChangeDate] = useState(new Date()); // 선택 날짜
  const [mode, setMode] = useState("date"); // 모달 유형
  const [visible, setVisible] = useState(false); // 모달 노출 여부
  const onPressTime = () => {
    // 시간 클릭 시
    setMode("time"); // 모달 유형을 time으로 변경
    setVisible(true); // 모달 open
    //console.log(event.Date); 파라미터에 이벤트 넣으면 잘 나옴
  };
  const onConfirm = (selectedDate) => {
    // 날짜 또는 시간 선택 시
    console.log(selectedDate);
    setVisible(false); // 모달 close
    onChangeDate(selectedDate); // 선택한 날짜 변경
  };
  const onCancel = () => {
    // 취소 시
    setVisible(false); // 모달 close
  };
  const [userIDNumber, setUserIDNumber] = useRecoilState(UserIDNumber);
  const initialWriteFormat = useRef({
    name: "",
    time: "",
    selectDay: {
      mon: false,
      tue: false,
      wed: false,
      thr: false,
      fri: false,
      sat: false,
      sun: false,
    },
  });
  const onSubmit = () => {
    if (serialNumber === "" || selectedProduct == null || date == null) {
      return Alert.alert("모든 항목을 입력해주세요.");
    } else {
      initialWriteFormat.current = {
        name: selectedProduct,
        time: date.getHours() + ":" + date.getMinutes(),
        selectDay: {
          mon: mon,
          tue: tue,
          wed: wed,
          thr: thu,
          fri: fri,
          sat: sat,
          sun: sun,
        },
      };
      console.log("Before");
      console.log(writeFormat);
      //if (count === 1) {
      if (selectedProduct === "🤯") {
        const tmp = {
          member_seq: userIDNumber,
          serialNum: serialNumber,
          type: "WASHING_MACHINE",
          settingTime:
            date.getHours() +
            ":" +
            (date.getMinutes() < 10 ? "0" : "") +
            date.getMinutes(),
          mon: mon,
          tue: tue,
          wed: wed,
          thr: thu,
          fri: fri,
          sat: sat,
          sun: sun,
        };
        setFirst(tmp);
        console.log(typeof count);
      } else if (selectedProduct === "🥲") {
        const tmp2 = {
          member_seq: userIDNumber,
          serialNum: serialNumber,
          type: "AIR_CLEANER",
          settingTime:
            date.getHours() +
            ":" +
            (date.getMinutes() < 10 ? "0" : "") +
            date.getMinutes(),
          mon: mon,
          tue: tue,
          wed: wed,
          thr: thu,
          fri: fri,
          sat: sat,
          sun: sun,
        };
        setSecond(tmp2);
        console.log(count);
      } else if (selectedProduct === "🤬") {
        const tmp3 = {
          member_seq: userIDNumber,
          serialNum: serialNumber,
          type: "WATER_MACHINE",
          settingTime:
            date.getHours() +
            ":" +
            (date.getMinutes() < 10 ? "0" : "") +
            date.getMinutes(),
          mon: mon,
          tue: tue,
          wed: wed,
          thr: thu,
          fri: fri,
          sat: sat,
          sun: sun,
        };
        setThird(tmp3);
      } else if (selectedProduct === "🤗") {
        const tmp4 = {
          member_seq: userIDNumber,
          serialNum: serialNumber,
          type: "STYLER",
          settingTime:
            date.getHours() +
            ":" +
            (date.getMinutes() < 10 ? "0" : "") +
            date.getMinutes(),
          mon: mon,
          tue: tue,
          wed: wed,
          thr: thu,
          fri: fri,
          sat: sat,
          sun: sun,
        };
        setFourth(tmp4);
      }
      goAlert();
    }
  };
  const goAlert = () => {
    Alert.alert(
      "작성 완료",
      "나의 LG 목록에 추가하시겠습니까?",
      [
        {
          text: "아니요",
        },
        {
          text: "네",
          onPress: () => {
            /** 가전제품은 이것으로 4개까지만 */
            setWriteFormat(initialWriteFormat.current);
            //setWriteFormat(...writeFormat, initialWriteFormat.current);
            console.log("write종료", writeFormat);
            console.log("first", first);
            //setLG();
            //navigate("Main", { screen: "LG" });
            goBack();
          },
          style: "cancel",
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <Body>
      <Header>
        <Back
          style={{ marginTop: 40, marginLeft: 10 }}
          onPress={() => navigate("Main", { screen: "LG" })}
        >
          <Text style={{ fontSize: 30 }}>🔙</Text>
        </Back>
      </Header>
      <Container>
        <Part>
          <Title>제품의 시리얼 넘버를 입력해주세요</Title>
          <TextInput
            placeholder="시리얼 넘버를 입력해주세요"
            onSubmitEditing={onSubmit}
            onChangeText={onChangeText}
            autoCorrect={false} // 맞춤법 제안 끔
            autoCapitalize="characters" // 자동 대문자
            value={serialNumber}
            returnKeyType="done"
            keyboardType="email-address"
            style={{ marginHorizontal: 20, marginVertical: 10 }}
          />
        </Part>
      </Container>
      <Part>
        <Title>LG 가전 제품을 선택해주세요</Title>
        <List>
          {products.map((product, index) => (
            <Product
              selected={product === selectedProduct}
              onPress={() => onProductPress(product)}
              key={index}
            >
              <ProductName>{list1[index]}</ProductName>
            </Product>
          ))}
        </List>
      </Part>
      <Part>
        <Title style={{ marginBottom: 0 }}>실행할 시간을 선택해주세요</Title>
        <TimeView>
          <TimeBtn onPress={onPressTime}>
            <ShowDate>{format(new Date(date), "p", { locale: ko })}</ShowDate>
          </TimeBtn>
          <DateTimePickerModal
            isVisible={visible}
            mode={mode}
            onConfirm={onConfirm}
            onCancel={onCancel}
            date={date}
          />
        </TimeView>
      </Part>
      <Part>
        <Title>실행할 요일을 입력해주세요</Title>
        <List>
          <DayBtn selected={mon} onPress={() => onMonPress()}>
            <DayBtnText>월</DayBtnText>
          </DayBtn>
          <DayBtn selected={tue} onPress={() => onTuePress()}>
            <DayBtnText>화</DayBtnText>
          </DayBtn>
          <DayBtn selected={wed} onPress={() => onWedPress()}>
            <DayBtnText>수</DayBtnText>
          </DayBtn>
          <DayBtn selected={thu} onPress={() => onThuPress()}>
            <DayBtnText>목</DayBtnText>
          </DayBtn>
          <DayBtn selected={fri} onPress={() => onFriPress()}>
            <DayBtnText>금</DayBtnText>
          </DayBtn>
          <DayBtn selected={sat} onPress={() => onSatPress()}>
            <DayBtnText>토</DayBtnText>
          </DayBtn>
          <DayBtn selected={sun} onPress={() => onSunPress()}>
            <DayBtnText>일</DayBtnText>
          </DayBtn>
        </List>
      </Part>
      <SaveBtn onPress={onSubmit}>
        <BtnText>Save</BtnText>
      </SaveBtn>
    </Body>
  );
};
export default Write;
const Body = styled.ScrollView`
  flex: 1;
  flex-direction: column;
  background-color: white;
`;
const Header = styled.View``;
const ShowDate = styled.Text`
  font-size: 15px;
  color: black;
`;
const Title = styled.Text`
  color: black;
  text-align: center;
  font-size: 21px;
  font-weight: 500;
  margin: 25px;
`;
const TextInput = styled.TextInput`
  background-color: white;
  border-radius: 20px;
  padding: 10px 20px;
  font-size: 18px;
  box-shadow: 1px 1px 3px rgba(41, 30, 95, 0.2);
  border: 1px solid gray;
`;
const SaveBtn = styled.TouchableOpacity`
  margin: 20px;
  padding: 10px 20px;
  align-items: center;
  border-radius: 20px;
  box-shadow: 1px 1px 1px rgba(41, 30, 95, 0.9);
  background-color: black;
`;
const BtnText = styled.Text`
  color: white;
  font-weight: 500;
  font-size: 18px;
`;
const TimeBtn = styled.TouchableOpacity`
  margin: 20px;
  padding: 15px;
  align-items: center;
  border-radius: 20px;
  box-shadow: 1px 1px 3px rgba(41, 30, 95, 0.3);
  border: 1px solid;
  background-color: white;
`;
const Back = styled.TouchableOpacity``;
const List = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
`;
const TimeView = styled.View`
  align-items: center;
  margin-horizontal: 120px;
  border-radius: 20px;
`;
const Product = styled.TouchableOpacity`
  background-color: white;
  box-shadow: 1px 1px 3px rgba(41, 30, 95, 0.2);
  padding: 5px;
  border-radius: 10px;
  border-width: 1px;
  border-color: ${(props) =>
    props.selected ? "rgba(41, 30, 95, 1);" : "transparent"};
`;
const DayBtn = styled.TouchableOpacity`
  background-color: white;
  box-shadow: 1px 1px 3px rgba(41, 30, 95, 0.2);
  padding: 11px 14px;
  border-radius: 10px;
  border-width: 1px;
  border-color: ${(props) =>
    props.selected ? "rgba(41, 30, 95, 1);" : "transparent"};
`;
const ProductName = styled.Text`
  font-size: 20px;
`;
const DayBtnText = styled.Text`
  font-size: 15px;
`;
const Part = styled.View`
  border: 2px solid gray;
  margin: 10px;
  border-radius: 10px;
  background-color: #f5f5f5;
`;
const Container = styled.View``;
/* 
write.js 페이지에 새로운 시간이랑 요일 추가 기능 구현해서, 이걸 포스트로 백에 넘겨야지
엘지 스크린에서 시간 수정해서 설정버튼 누를 때 백에서 수정만 하면 됨
요일은 월화수목금토일 버튼인데 다수선택 가능하기로 햇자나? 그거 트루펄스로 넘기자. MON=true or false
<List>
        {week.map((day, index) => (
          <Product
            selected={day === days}
            onPress={() => console.log()}
            key={index}
          >
            <ProductName>{day}</ProductName>
          </Product>
        ))}
*/

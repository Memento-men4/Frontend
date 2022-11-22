import React, { useState } from "react";
import { Alert, Text, View } from "react-native";
import styled from "styled-components/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { input } from "../screens/LG";
const Body = styled.View`
  background-color: #ffda79;
  flex: 1;
  flex-direction: column;
  background-color: white;
`;

const Title = styled.Text`
  color: black;
  margin: 35px 0px;
  text-align: center;
  font-size: 24px;
  font-weight: 500;
`;
const TextInput = styled.TextInput`
  background-color: white;
  border-radius: 20px;
  padding: 10px 20px;
  font-size: 18px;
  box-shadow: 1px 1px 3px rgba(41, 30, 95, 0.2);
`;
const Btn = styled.TouchableOpacity`
  margin: 20px;
  background-color: black;
  padding: 10px 20px;
  align-items: center;
  border-radius: 20px;
  box-shadow: 1px 1px 3px rgba(41, 30, 95, 0.2);
`;
const BtnText = styled.Text`
  color: white;
  font-weight: 500;
  font-size: 18px;
`;
const Back = styled.TouchableOpacity``;
const Emotions = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 10px;
`;
const Emotion = styled.TouchableOpacity`
  background-color: white;
  box-shadow: 1px 1px 3px rgba(41, 30, 95, 0.2);
  padding: 10px;
  border-radius: 10px;
  border-width: 1px;
  border-color: ${(props) =>
    props.selected ? "rgba(41, 30, 95, 1);" : "transparent"};
`;
const EmotionText = styled.Text`
  font-size: 24px;
`;

//const products = ["🤯", "🥲", "🤬", "🤗", "🥰", "😊", "🤩"];
const products = ["🤯", "🥲", "🤬", "🤗", "🥰", "😊", "🤩"];

const Write = ({ navigation: { goBack, navigate } }) => {
  const [selectedProduct, setProduct] = useState(null);
  const [serialNumber, setSerialNumber] = useState("");
  const [content, setContent] = useState("");
  const onChangeText = (text) => setSerialNumber(text);
  const onProductPress = (idx) => setProduct(idx);
  const onSubmit = () => {
    if (serialNumber === "" || selectedProduct == null) {
      return Alert.alert("Please complete form.");
    }
    console.log(serialNumber, selectedProduct); // 콘솔에 텍스트랑 이모지 출력
    //AsyncStorage.clear();
    //console.log("이모지 클리어");
    AsyncStorage.setItem("Product", selectedProduct, () => {
      console.log("이모지 저장 완료");
    });
    goBack();
  };
  return (
    <Body>
      <View>
        <Back
          style={{ marginTop: 40, marginLeft: 10 }}
          onPress={() => navigate("Main", { screen: "LG" })}
        >
          <Text style={{ fontSize: 30 }}>🔙</Text>
        </Back>
      </View>
      <Title>어떤 LG 가전 제품을 가지고 있나요?</Title>
      <Emotions>
        {products.map((product, index) => (
          <Emotion
            selected={product === selectedProduct}
            onPress={() => onProductPress(product)}
            key={index}
          >
            <EmotionText>{product}</EmotionText>
          </Emotion>
        ))}
      </Emotions>
      <Title>시리얼 넘버를 입력해주세요</Title>
      <TextInput
        placeholder="시리얼 넘버를 입력해주세요"
        onSubmitEditing={onSubmit}
        onChangeText={onChangeText}
        autoCorrect={false} // 맞춤법 제안 끔
        autoCapitalize="characters" // 자동 대문자
        value={serialNumber}
        returnKeyType="done"
        keyboardType="email-address"
        style={{ marginLeft: 10, marginRight: 10 }}
      />
      <Btn onPress={onSubmit}>
        <BtnText>Save</BtnText>
      </Btn>
    </Body>
  );
};
export default Write;

/* 
write.js 페이지에 새로운 시간 추가 기능 구현해서, 이걸 포스트로 백에 넘겨야지
엘지 스크린에서 시간 수정해서 설정버튼 누를 때 백에서 수정만 하면 됨
*/

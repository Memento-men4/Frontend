import React from "react";
import styled from "styled-components/native";
import { View, Text, Button } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
/**
 * 오늘 하루는 어땠나요? 녹음 기능을 통해 하루를 기록하며 영츠하이머를 예방해요.
 * 녹음한 내용으로 퀴즈를 만들어 드릴게요. 인공지능 스피커와 퀴즈를 풀며 하루를 되돌아 보아요.
 * 집에 있는 LG 가전을 메멘토에 등록하세요. 까먹지 않고 실행하도록 저희가 알려드릴게요.
 * 영츠하이머 예방을 더 재밌게. 검증된 치매 예방 게임을 통해 우리의 뇌를 활성화시켜요.
 * 잘 알려지지 않은 청년 치매 영츠하이머. 저희가 잘 알려드릴게요.
 */
const Start = ({ navigation: { navigate } }) => (
  <View style={{ backgroundColor: "white" }}>
    <Container pagingEnabled={true} horizontal={true}>
      <Header>
        <View>
          <Title>
            오늘 하루는 어땠나요?{"\n"}녹음 기능을 통해 하루를 기록하며{"\n"}
            영츠하이머를 예방해요.
          </Title>
          <Attached
            source={require("/Users/leesukcheol/memento/assets/images/Record.png")}
          />
        </View>
        <LoginView>
          <Text style={{ marginRight: 15, fontSize: 18 }}>
            이미 계정이 있으신가요?
          </Text>
          <Button onPress={() => navigate("Login")} title="로그인" />
        </LoginView>
      </Header>
      <Header>
        <View>
          <Title>
            녹음한 내용으로 퀴즈를 만들어 드릴게요.
            {"\n"}인공지능 스피커와 퀴즈를 풀며
            {"\n"}하루를 되돌아 보아요.
          </Title>
          <Attached
            source={require("/Users/leesukcheol/memento/assets/images/bbiyaknugu.png")}
          />
          <LoginView>
            <Text style={{ marginRight: 15, fontSize: 18 }}>
              이미 계정이 있으신가요?
            </Text>
            <Button onPress={() => navigate("Login")} title="로그인" />
          </LoginView>
        </View>
      </Header>
      <Header>
        <View>
          <Title>
            집에 있는 LG 가전.{"\n"}메멘토에 등록하세요. 까먹지 않고{"\n"}
            실행하도록 저희가 알려드릴게요.
          </Title>
          <Attached
            source={require("/Users/leesukcheol/memento/assets/images/LGstart.png")}
          />
          <LoginView>
            <Text style={{ marginRight: 15, fontSize: 18 }}>
              이미 계정이 있으신가요?
            </Text>
            <Button onPress={() => navigate("Login")} title="로그인" />
          </LoginView>
        </View>
      </Header>
      <Header>
        <View>
          <Title>
            영츠하이머 예방을 더 재밌게!{"\n"}검증된 치매 예방 게임을 통해
            {"\n"}우리의 뇌를 활성화시켜요.
          </Title>
          <Attached
            source={require("/Users/leesukcheol/memento/assets/images/bbiyakgaming.png")}
          />
          <LoginView>
            <Text style={{ marginRight: 15, fontSize: 18 }}>
              이미 계정이 있으신가요?
            </Text>
            <Button onPress={() => navigate("Login")} title="로그인" />
          </LoginView>
        </View>
      </Header>
      <Header>
        <View>
          <Title>
            잘 알려지지 않은{"\n"}청년 치매 영츠하이머.{"\n"}저희가 잘
            알려드릴게요.
          </Title>
          <Attached
            source={require("/Users/leesukcheol/memento/assets/images/bbiyakbaksa.png")}
          />
          <LoginView>
            <Text style={{ marginRight: 15, fontSize: 18 }}>
              이미 계정이 있으신가요?
            </Text>
            <Button onPress={() => navigate("Login")} title="로그인" />
          </LoginView>
        </View>
      </Header>
    </Container>
  </View>
);

const Container = styled.ScrollView``;

const Title = styled.Text`
  margin-horizontal: 20px;
  margin-top: 80px;
  padding: 3px;
  font-size: 17px;
  text-align: center;
`;
const Header = styled.View`
  justify-content: center;
  align-self: center;
  margin-top: 80px;
  margin-horizontal: 20px;
  background-color: white;
`;
const Footer = styled.View`
  align-content: center;
  background-color: gray;
  margin-horizontal: 50px;
  margin-top: 40px;
  margin-bottom: 120px;
`;
const Attached = styled.Image`
  margin-top: 20px;
  width: 335px;
  height: 350px;
  margin-bottom: 20px;
`;
const Character = styled.Image`
  width: 300px;
  height: 150px;
`;
const LoginView = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 150px;
`;
export default Start;

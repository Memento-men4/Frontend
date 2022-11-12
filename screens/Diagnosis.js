import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";

const Header = styled.View`
  flex-direction: column;
  padding: 10px;
  padding-top: 20px;
  background-color: "#D8D8D8";
`;
const Question = styled.View`
  flex-direction: row;
  margin: 5px;
`; // 3분할. 1. 질문 2. 예 체크박스 3. 아니오 체크박스
const Diagnosis = ({ navigation: { navigate } }) => (
  <Header>
    <Text>무언가를 자주 까먹는 나, 젊은 나이에 벌써 치매?</Text>
    <Text>혹시, 나도 영츠하이머?</Text>
    <Text>
      국립중앙의료원 산하 기관인 중앙치매센터에서 제시한 주관적 기억감퇴
      설문(SMCQ, Subjective Memory Complaints Questionnaire)에 지금
      참여해보세요. {`\n`}
    </Text>
    <Question>
      <Text style={{ marginLeft: 5, marginRight: 5 }}>
        1. 기억력에 문제가 있다고 생각하십니까?
      </Text>
      <Text style={{ marginLeft: 5, marginRight: 5 }}>예</Text>
      <Text style={{ marginLeft: 5, marginRight: 5 }}>아니오</Text>
    </Question>
    <Question>
      <Text style={{ marginLeft: 5, marginRight: 5 }}>
        2. 기억력이 10년 전보다 나빠졌다고 생각하십니까?
      </Text>
      <Text style={{ marginLeft: 5, marginRight: 5 }}>예</Text>
      <Text style={{ marginLeft: 5, marginRight: 5 }}>아니오</Text>
    </Question>
    <Question>
      <Text style={{ marginLeft: 5, marginRight: 5 }}>
        3. 기억력이 또래에 비해 나쁘다고 생각하십니까?
      </Text>
      <Text style={{ marginLeft: 5, marginRight: 5 }}>예</Text>
      <Text style={{ marginLeft: 5, marginRight: 5 }}>아니오</Text>
    </Question>
    <Question>
      <Text style={{ marginLeft: 5, marginRight: 5 }}>
        4. 기억력 저하로 인해 일상생활에 불편을 느끼십니까?
      </Text>
      <Text style={{ marginLeft: 5, marginRight: 5 }}>예</Text>
      <Text style={{ marginLeft: 5, marginRight: 5 }}>아니오</Text>
    </Question>
    <Question>
      <Text style={{ marginLeft: 5, marginRight: 5 }}>
        5. 최근에 일어난 일을 기억하는 것이 어렵습니까?
      </Text>
      <Text style={{ marginLeft: 5, marginRight: 5 }}>예</Text>
      <Text style={{ marginLeft: 5, marginRight: 5 }}>아니오</Text>
    </Question>
    <Question>
      <Text style={{ marginLeft: 5, marginRight: 5 }}>
        6. 며칠 전에 나눈 대화 내용을 기억하기 어렵습니까?
      </Text>
      <Text style={{ marginLeft: 5, marginRight: 5 }}>예</Text>
      <Text style={{ marginLeft: 5, marginRight: 5 }}>아니오</Text>
    </Question>
    <Question>
      <Text style={{ marginLeft: 5, marginRight: 5 }}>
        7. 며칠 전에 한 약속을 기억하기 어렵습니까?
      </Text>
      <Text style={{ marginLeft: 5, marginRight: 5 }}>예</Text>
      <Text style={{ marginLeft: 5, marginRight: 5 }}>아니오</Text>
    </Question>
    <Question>
      <Text style={{ marginLeft: 5, marginRight: 5 }}>
        8. 친한 사람의 이름을 기억하기 어렵습니까?
      </Text>
      <Text style={{ marginLeft: 5, marginRight: 5 }}>예</Text>
      <Text style={{ marginLeft: 5, marginRight: 5 }}>아니오</Text>
    </Question>
    <Question>
      <Text style={{ marginLeft: 5, marginRight: 5 }}>
        9. 물건 둔 곳을 기억하기 어렵습니까?
      </Text>
      <Text style={{ marginLeft: 5, marginRight: 5 }}>예</Text>
      <Text style={{ marginLeft: 5, marginRight: 5 }}>아니오</Text>
    </Question>
    <Question>
      <Text style={{ marginLeft: 5, marginRight: 5 }}>
        10. 이전에 비해 물건을 자주 잃어버립니까?
      </Text>
      <Text style={{ marginLeft: 5, marginRight: 5 }}>예</Text>
      <Text style={{ marginLeft: 5, marginRight: 5 }}>아니오</Text>
    </Question>
    <Question>
      <Text style={{ marginLeft: 5, marginRight: 5 }}>
        11. 집 근처에서 길을 잃은 적이 있습니까?
      </Text>
      <Text style={{ marginLeft: 5, marginRight: 5 }}>예</Text>
      <Text style={{ marginLeft: 5, marginRight: 5 }}>아니오</Text>
    </Question>
    <Question>
      <Text style={{ marginLeft: 5, marginRight: 5 }}>
        12. 물건을 사려고 할 때 이름을 기억하기 어렵습니까?
      </Text>
      <Text style={{ marginLeft: 5, marginRight: 5 }}>예</Text>
      <Text style={{ marginLeft: 5, marginRight: 5 }}>아니오</Text>
    </Question>
    <Question>
      <Text style={{ marginLeft: 5, marginRight: 5 }}>
        13. 가스불, 전기불 끄는 것을 기억하기 어렵습니까?
      </Text>
      <Text style={{ marginLeft: 5, marginRight: 5 }}>예</Text>
      <Text style={{ marginLeft: 5, marginRight: 5 }}>아니오</Text>
    </Question>
    <Question>
      <Text style={{ marginLeft: 5, marginRight: 5 }}>
        14. 자주 사용하는 전화번호를 기억하기 어렵습니까?
      </Text>
      <Text style={{ marginLeft: 5, marginRight: 5 }}>예</Text>
      <Text style={{ marginLeft: 5, marginRight: 5 }}>아니오</Text>
    </Question>
  </Header>
);

export default Diagnosis;

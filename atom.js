import { atom } from "recoil";

export const loginFlag = atom({
  key: "loginFlag",
  default: 0,
});
/** 
 레코드텍스트 1234는 내가 데이즈.제이에스에 테스트해보려고 선언한 전역변수임.
 어차피 post로 시간, 타이틀, description으로 보낼거고, 그걸 다시 받아서 활용할 거니까
 얘네 네 개는 없애는 게 맞음.
 */
export const RecordResponse = atom({
  key: "RecordResponse",
  default: [],
});
export const RecordText1 = atom({
  key: "RecordText1",
  default: "",
});
export const RecordText2 = atom({
  key: "RecordText2",
  default: "",
});
export const RecordText3 = atom({
  key: "RecordText3",
  default: "",
});
export const RecordText4 = atom({
  key: "RecordText4",
  default: "",
});
export const WriteFormat = atom({
  key: "WriteFormat",
  default: {
    name: "",
    time: "",
    selectDay: {
      mon: false,
      tue: false,
      wed: false,
      thu: false,
      fri: false,
      sat: false,
      sun: false,
    },
  },
});
export const FirstData = atom({
  key: "FirstData",
  default: {},
});
export const SecondData = atom({
  key: "SecondData",
  default: {},
});
export const ThirdData = atom({
  key: "ThirdData",
  default: {},
});
export const FourthData = atom({
  key: "ForthData",
  default: {},
});
export const WriteNumber = atom({
  key: "WriteNumber",
  default: 0,
});
export const RecordDate = atom({
  key: "RecordDate",
  default: {},
});
export const UserIDNumber = atom({
  key: "UserIDNumber",
  default: 0,
});
export const UserName = atom({
  key: "UserName",
  default: "",
});
export const SelectQuiz = atom({
  key: "SelectQuiz",
  default: 0,
});
export const QuizList = atom({
  key: "QuizList",
  default: ["📺 TV", "🏫 ITBT관", "🐶 강아지", "🥤 커피", "🍕 피자"],
});
export const QuizAnswer = atom({
  key: "QuizAnswer",
  default: ["LG전자", "학교", "동물", "음료", "음식"],
});
export const TodayDate = atom({
  key: "TodayDate",
  default: "",
});
export const TimelineData = atom({
  key: "TimelineData",
  default: [],
});

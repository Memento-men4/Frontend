import { atom } from "recoil";

export const loginFlag = atom({
  key: "loginFlag",
  default: 1,
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

/*
export const WriteFormat = atom({
  key: "WriteFormat",
  default: [
    {
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
  ],
});*/
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

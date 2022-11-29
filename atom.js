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
    current: {
      name: "",
      time: "",
      selectDay: [false, false, false, false, false, false, false],
    },
  },
});
export const UserIDNumber = atom({
  key: "UserIDNumber",
  default: 0,
});
export const UserName = atom({
  key: "UserName",
  default: "",
});

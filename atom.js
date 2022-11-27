import { atom } from "recoil";

const loginFlag = atom({
  key: "loginFlag",
  default: 1,
});
const RecordText1 = atom({
  key: "RecordText1",
  default: "",
});
const RecordText2 = atom({
  key: "RecordText2",
  default: "",
});
const RecordText3 = atom({
  key: "RecordText3",
  default: "",
});
const RecordText4 = atom({
  key: "RecordText4",
  default: "",
});
const RecordCount = atom({
  key: "RecordCount",
  default: "0",
});
export {
  loginFlag,
  RecordText1,
  RecordText2,
  RecordText3,
  RecordText4,
  RecordCount,
};

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
/*const WriteFormat = atom({
  key: "WriteFormat",
  default: {
    productID: "",
    selectedDay: [false, false, false, false, false, false, false],
    //selectedTime: "",
  },
});*/
const WriteFormat = atom({
  key: "WriteFormat",
  default: {},
});
export {
  loginFlag,
  RecordText1,
  RecordText2,
  RecordText3,
  RecordText4,
  WriteFormat,
};

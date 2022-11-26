import { atom } from "recoil";

const loginFlag = atom({
  key: "loginFlag",
  default: 0,
});

export { loginFlag };

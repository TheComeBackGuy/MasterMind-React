import { atom } from "recoil";

export const MManswer = atom({
  key: "MManswer",
  default: [],
});

export const numberOfRows = atom({
  key: "number-of-rows",
  default: 10,
});

export const numberOfColumns = atom({
  key: "number-of-columns",
  default: 15,
});

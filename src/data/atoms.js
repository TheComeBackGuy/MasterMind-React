import atom from "recoil";

export const MManswer = atom({
  key: "MManswer",
  default: [],
});

export const rows = atom({
  key: "number-of-rows",
  default: 10,
});

export const columns = atom({
  key: "number-of-columns",
  default: 6,
});

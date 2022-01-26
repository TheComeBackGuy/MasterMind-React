import { atom } from "recoil";

export const MManswer = atom({
  key: "MManswer",
  default: ["red", "red", "yellow", "blue", "green"],
});

export const numberOfRows = atom({
  key: "number-of-rows",
  default: 10,
});

export const numberOfColumns = atom({
  key: "number-of-columns",
  default: 5,
});

export const listOfMarbles = atom({
  key: "list-of-marbles",
  default: ["yellow", "red", "blue", "green", "purple"],
});

export const activeRow = atom({
  key: "active-row",
  default: 0,
});

export const activeGame = atom({
  key: "active-game",
  default: false,
});

import { atom } from "recoil";

export const MManswer = atom({
  key: "MManswer",
  default: [],
});

export const numberOfRows = atom({
  key: "number-of-rows",
  default: 12,
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

export const gameTimerState = atom({
  key: "game-timer-state",
  default: "00:00",
});

export const currentGameHistory = atom({
  key: "current-game-state",
  default: [],
});

export const displayPopUp = atom({
  key: "display-popup",
  default: false,
});

export const displayValue = atom({
  key: "display-value",
  default: "settings",
});

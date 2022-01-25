// import * as Recoil from "recoil";

import { atom, useRecoilValue } from "recoil";

export const columns = atom({
  key: "number-of-columns",
  default: 6,
});

export default function CreateAnswer() {
  const marbles = ["yellow", "red", "blue", "green", "pink", "purple"];
  const cols = useRecoilValue(columns);
  const tempAnswer = [];

  for (let i = 0; i < cols; i++) {
    tempAnswer.push(marbles[Math.floor(Math.random() * marbles.length)]);
  }

  console.log(cols);
  console.log(tempAnswer);

  return tempAnswer;
}

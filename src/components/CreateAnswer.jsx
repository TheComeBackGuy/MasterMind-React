import { MManswer } from "../data/atoms";
import { numberOfColumns } from "../data/atoms.js";
import { useRecoilValue } from "recoil";
import { useSetRecoilState } from "recoil";

// import { useEffect } from "react";

export function CreateAnswer() {
  const setAnswer = useSetRecoilState(MManswer);
  const marbles = ["yellow", "red", "blue", "green", "purple"];
  const cols = useRecoilValue(numberOfColumns);
  const tempAnswer = [];

  // useEffect(() => {
  //   console.log(answer);
  // }, [answer]);

  for (let i = 0; i < cols; i++) {
    tempAnswer.push(marbles[Math.floor(Math.random() * marbles.length)]);
    // console.log(answer);
    console.log(`This is Column ${i} of  ${cols}`);
  }
  console.log(tempAnswer);
  setAnswer(marbles);
  // return "answer";
}

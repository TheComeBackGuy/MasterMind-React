import { numberOfColumns } from "../data/atoms.js";
import { useRecoilValue } from "recoil";

// import { MManswer } from "../data/atoms";
// import { useRecoilState }from 'recoil'

export default function CreateAnswer() {
  // const [answer, setAnswer] = useRecoilState(MManswer);
  const marbles = ["yellow", "red", "blue", "green", "purple"];
  const cols = useRecoilValue(numberOfColumns);
  const tempAnswer = [];

  for (let i = 0; i < cols; i++) {
    tempAnswer.push(marbles[Math.floor(Math.random() * marbles.length)]);
    // setAnswer([...answer, marbles[Math.floor(Math.random() * marbles.length)]]);
  }

  console.log(cols);
  console.log(tempAnswer);

  return tempAnswer;

  // return <h1>{answer}</h1>;
}

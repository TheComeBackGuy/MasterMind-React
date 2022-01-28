import { MManswer, activeGame } from "../data/atoms";

import React from "react";
import { useRecoilValue } from "recoil";

// import { numberOfColumns } from "../data/atoms";

export default function AnswerRow() {
  const answer = useRecoilValue(MManswer);
  const gameIsActive = useRecoilValue(activeGame);
  // const cols = useRecoilValue(numberOfColumns);

  function showAnswer() {
    if (!gameIsActive) {
      return (
        <ul id={`answer`} className="marbleRow">
          {answer.map((col) => {
            return (
              <button
                key={`${answer[answer.indexOf(col)]}-${Math.random() * 15000}`}
                id={`${answer[answer.indexOf(col)]}`}
                className={`hole ${answer[answer.indexOf(col)]} marble`}
              ></button>
            );
          })}
        </ul>
      );
    } else {
      return (
        <ul id={`answer`} className="marbleRow">
          {answer.map((col) => {
            return (
              <button
                key={`${answer[answer.indexOf(col)]}-${Math.random() * 15000}`}
                id={`${answer[answer.indexOf(col)]}`}
                className={`hole answerBlack marble`}
              ></button>
            );
          })}
        </ul>
      );
    }
  }

  return <>{showAnswer()}</>;
}

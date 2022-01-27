import { MManswer, activeGame } from "../data/atoms";

import React from "react";
import { useRecoilValue } from "recoil";

export default function AnswerRow() {
  const answer = useRecoilValue(MManswer);
  const gameIsActive = useRecoilValue(activeGame);

  function showAnswer() {
    if (!gameIsActive) {
      return (
        <ul id={`answer`} className="marbleRow">
          {answer.map((row) => {
            return (
              <button
                key={`${answer[answer.indexOf(row)]}-${Math.random() * 15000}`}
                id={`${answer[answer.indexOf(row)]}`}
                className={`hole ${answer[answer.indexOf(row)]} marble`}
              ></button>
            );
          })}
        </ul>
      );
    } else {
      return (
        <ul id={`answer`} className="marbleRow">
          {answer.map((row) => {
            return (
              <button
                key={`${answer[answer.indexOf(row)]}-${Math.random() * 15000}`}
                id={`${answer[answer.indexOf(row)]}`}
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

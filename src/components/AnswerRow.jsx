import {
  MManswer,
  activeGame,
  listOfMarbles,
  numberOfColumns,
  sessionStartedState,
} from "../data/atoms";

import React from "react";
import { useRecoilValue } from "recoil";

// import { numberOfColumns } from "../data/atoms";

export default function AnswerRow() {
  const answer = useRecoilValue(MManswer);
  const gameIsActive = useRecoilValue(activeGame);
  const marbles = useRecoilValue(listOfMarbles);
  const sessionStarted = useRecoilValue(sessionStartedState);
  const cols = useRecoilValue(numberOfColumns);
  // const cols = useRecoilValue(numberOfColumns);

  function marbleFades() {
    let marbleArrangement = new Array(cols).fill(
      marbles[Math.floor(Math.random() * marbles.length)]
    );
    console.log(marbleArrangement);
    return (
      <ul id={`answer`} className="marbleRow">
        {marbleArrangement.map((col) => {
          return (
            <button
              key={`${marbleArrangement[marbleArrangement.indexOf(col)]}-${
                Math.random() * 15000
              }`}
              id={`${marbleArrangement[marbleArrangement.indexOf(col)]}`}
              className={`hole answerBlack marble`}
            >
              ?
            </button>
          );
        })}
      </ul>
    );
  }

  function showAnswer() {
    // this condition returns the answer after game ends
    if (!gameIsActive && sessionStarted === true) {
      return (
        <ul id={`answer`} className="marbleRow">
          {/* <li>game is active and answer</li> */}
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
      //if no game ahs been started yet
    } else if (!gameIsActive && sessionStarted === false) {
      console.log("the game has not begun yet");
      return <>{marbleFades()}</>;
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

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
    let marbleArrangement = new Array(cols).fill(marbles[0]);

    setInterval(marbleTimer, 1500 + 500);

    function marbleTimer() {
      // pick a random marble
      //change stylesheet

      const chosenMarble = document.getElementById(
        `${Math.floor(Math.random() * cols)}`
      );
      console.log(chosenMarble.style);
      // chosenMarble.style.transform = "2s ease-in";
      chosenMarble.classList.replace(
        chosenMarble.classList[1],
        marbles[Math.floor(Math.random() * cols)]
      );
    }

    console.log(marbleArrangement);
    return (
      <ul id={`answer`} className="marbleRow">
        {marbleArrangement.map((col, index) => {
          return (
            <button
              key={`${marbleArrangement[marbleArrangement.indexOf(col)]}-${
                Math.random() * 15000
              }`}
              id={`${index}`}
              className={`hole answerBlack marble`}
            ></button>
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
      //if no game has been started yet
    } else if (!gameIsActive && sessionStarted === false) {
      console.log("the game has not begun yet");
      return <>{marbleFades()}</>;
      //game has started and answer is hidden
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

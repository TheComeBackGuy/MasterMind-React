import "../index.css";

import {
  MManswer,
  activeGame,
  activeRow,
  currentGameHistory,
  numberOfColumns,
  numberOfRows,
} from "../data/atoms";
import {
  useRecoilState,
  useRecoilValue,
  useResetRecoilState,
  useSetRecoilState,
} from "recoil";

import React from "react";
import styled from "styled-components";

const ResultContainer = styled.div`
  width: 220px;
  margin: 0 20px;
  padding: 10px 0 20px 0;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: left;
  justify-content: flex-end;
  //   border: 3px solid green;
`;

const SingleRowResult = styled.div`
  display: flex;
  flex-flow: column-reverse nowrap;
  width: 100%;
  margin-bottom: 3px;
  // background-color: #310303;
`;

const SubmitAnswerButton = styled.button`
  display: none;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  width: 50px;

  height: 50px;
  border-radius: 25px;
  font-size: 40px;
  cursor: pointer;
  background-color: transparent;
  border: 1px solid var(--mmWhite);
  color: var(--mmBrightWhite);
  :hover {
    border: 1px solid var(--mmDarkRed);
    background-color: var(--mmDarkRed);
    color: var(--mmWhite);
  }
`;
const RowResult = styled.div`
  margin-bottom: 10px;
  width: 50px;
  height: 50px;
  // border: 1px solid var(--mmBrightWhite);
  border-radius: 7px;
  color: var(--mmBrightWhite);
  text-align: left;
  padding: 5px;
  background-color: var(--mmDarkRedShade);
`;

export default function MarbleTracking() {
  const cols = useRecoilValue(numberOfColumns);
  const rows = useRecoilValue(numberOfRows);
  const [currentRow, setCurrentRow] = useRecoilState(activeRow);
  const resetRowNumber = useResetRecoilState(activeRow);
  const setIsGameActive = useSetRecoilState(activeGame);
  const answer = useRecoilValue(MManswer);
  const [gameHistory, setGameHistory] = useRecoilState(currentGameHistory);

  let correctCount = 0;
  let wrongSpaceCount = 0;

  function handleAnswerKeys(correctCount, currentGuess) {
    setGameHistory([
      ...gameHistory,
      {
        answer: currentGuess,
        rightSpace: correctCount,
        wrongSpace: wrongSpaceCount,
      },
    ]);
  }

  function submitAnswer() {
    const currentGuess = [];
    let answerMismatch = [];
    let guessMismatch = [];
    //check for total answer
    for (let i = 0; i < cols; i++) {
      const item = document.getElementById(`r${currentRow}c${i}`).classList[1];
      //push all entries into a temp array
      currentGuess.push(item);

      //find absolute matches
      if (item === answer[i]) {
        //increase the amount  of matches by 1
        correctCount++;
      } else {
        answerMismatch.push(answer[i]);
        guessMismatch.push(item);
      }
    }
    console.log(answer);
    console.log("-----");
    console.log("Guess is: ");
    console.log(guessMismatch);

    console.log("Answer is: ");
    console.log(answerMismatch);

    ///compare arrays for mismatches
    for (let i = 0; i < guessMismatch.length; i++) {
      for (let j = 0; j < guessMismatch.length; j++) {
        console.log(
          "comparing " + guessMismatch[i] + " with " + answerMismatch[j]
        );
        if (guessMismatch[i] === answerMismatch[j]) {
          console.log(
            "matched " +
              guessMismatch[i] +
              " and deleting " +
              answerMismatch[j] +
              " from answer."
          );
          answerMismatch.splice(j, 1, null);
          console.log("Answer remains as: ");
          console.log(answerMismatch);
          wrongSpaceCount++;
          break;
        }
      }
    }

    // if (activeRow)

    //detect a win
    if (correctCount === cols) {
      const buttonSwitched = document.querySelector("#startButton");
      buttonSwitched.style.backgroundColor = "var(--mmWhite)";
      buttonSwitched.style.color = "var(--mmDarkRed)";
      buttonSwitched.innerText = "Start Game";
      resetRowNumber();
      setIsGameActive(false);
    }

    // generateDefaultRow(cols, currentRow);

    if (currentRow === rows) {
      const buttonSwitched = document.querySelector("#startButton");
      buttonSwitched.style.backgroundColor = "var(--mmWhite)";
      buttonSwitched.style.color = "var(--mmDarkRed)";
      buttonSwitched.innerText = "Start Game";
      document.querySelector("#submitButton").style.display = "none";
      //send info to handleAnswerKeys to displaygit
      handleAnswerKeys(correctCount, currentGuess);
      resetRowNumber();
      setIsGameActive(false);
    } else {
      //increase the row Number to move up the board
      setCurrentRow(currentRow + 1);

      //send info to handleAnswerKeys to displaygit
      handleAnswerKeys(correctCount, currentGuess);
    }
  }

  return (
    <ResultContainer>
      <SubmitAnswerButton id="submitButton" onClick={submitAnswer}>
        ✔
      </SubmitAnswerButton>
      <SingleRowResult>
        {gameHistory.map((entry, index) => {
          return (
            <RowResult key={index}>
              <p>★ x {entry.rightSpace}</p>
              <p>☆ x {entry.wrongSpace}</p>
            </RowResult>
          );
        })}
      </SingleRowResult>
    </ResultContainer>
  );
}

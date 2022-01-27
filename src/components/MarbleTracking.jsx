import {
  MManswer,
  activeRow,
  currentGameHistory,
  numberOfColumns,
  numberOfRows,
} from "../data/atoms";
import { useRecoilState, useRecoilValue } from "recoil";

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
  background-color: var(--mmBrightWhite);
  border: 1px solid var(--mmWhite);
  color: var(--mmDarkRed);
  :hover {
    border: 1px solid var(--mmDarkRed);
    background-color: var(--mmDarkRed);
    color: var(--mmWhite);
  }
`;
const RowResult = styled.div`
  margin-bottom: 10px;
  width: 100%;
  height: 50px;
  // border: 1px solid var(--mmBrightWhite);
  border-radius: 7px;
  color: var(--mmBrightWhite);
  text-align: left;
  padding: 5px;
`;

export default function MarbleTracking() {
  const rows = useRecoilValue(numberOfRows);
  const cols = useRecoilValue(numberOfColumns);
  const [currentRow, setCurrentRow] = useRecoilState(activeRow);
  const numberofAttempts = new Array(rows);
  const answer = useRecoilValue(MManswer);
  const [gameHistory, setGameHistory] = useRecoilState(currentGameHistory);

  let correctCount = 0;

  function handleAnswerKeys(correctCount, currentGuess) {
    setGameHistory([
      ...gameHistory,
      {
        answer: currentGuess,
        rightSpace: correctCount,
        wrongSpace: 0,
      },
    ]);
  }

  function submitAnswer() {
    const currentGuess = [];
    //check for total answer
    for (let i = 0; i < cols; i++) {
      //push all entries into a temp array
      currentGuess.push(
        document.getElementById(`r${currentRow}c${i}`).classList[1]
      );

      //find absolute matches
      if (
        document.getElementById(`r${currentRow}c${i}`).classList[1] ===
        answer[i]
      ) {
        //increase the amount  of matches by 1
        correctCount++;
      }
    }
    //detect a win
    if (correctCount === cols) {
      console.log("you Win!");
    }
    // generateDefaultRow(cols, currentRow);

    //increase the row Number to move up the board
    setCurrentRow(currentRow + 1);

    //send info to handleAnswerKeys to display
    handleAnswerKeys(correctCount, currentGuess);

    console.log("determine correct stars");
  }

  console.log(numberofAttempts);
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

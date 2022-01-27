import { activeRow, numberOfColumns, numberOfRows } from "../data/atoms";
import { useRecoilState, useRecoilValue } from "recoil";

import React from "react";
import { generateDefaultRow } from "../utils/globalFunctions";
import styled from "styled-components";

const ResultContainer = styled.div`
  width: 220px;
  margin: 0 20px;
  padding: 10px 0 20px 0;
  height: 100%;
  display: flex;
  flex-flow: column-reverse nowrap;
  align-items: center;
  justify-content: flex-start;
  //   border: 3px solid green;
`;

const SingleRowResult = styled.div`
  width: 100%;
  height: 50px;
  //   border: 1px solid purple;
  margin-bottom: 10px;
  //   background-color: #310303;
`;

const SubmitAnswerButton = styled.button`
  width: 100%;
  height: 100%;
  border: 3px solid var(--mmBrightWhite);
  border-radius: 7px;
  background-color: var(--mmWhite);
  //   font-size: 20px;
  cursor: pointer;
  :hover {
    background-color: var(--mmBrightWhite);
    border-color: var(--mmWhite);
  }
`;

export default function MarbleTracking() {
  const rows = useRecoilValue(numberOfRows);
  const cols = useRecoilValue(numberOfColumns);
  const [currentRow, setCurrentRow] = useRecoilState(activeRow);
  const numberofAttempts = new Array(rows);

  function submitAnswer() {
    for (let i = 0; i < cols; i++) {
      console.log(
        `Marble ${i} is ${
          document.getElementById(`r${currentRow}c${i}`).classList[1]
        }`
      );
    }

    generateDefaultRow(cols, currentRow);
    setCurrentRow(currentRow + 1);
    console.log("compare answer and submission arrays");
    console.log("determine correct stars");
    console.log("change button to results");
    console.log("increase currentRow by one");
    console.log("add submit button to next row");

    //push to array
    // set state of answer array.
  }

  console.log(numberofAttempts);
  return (
    <ResultContainer>
      <SingleRowResult>
        <SubmitAnswerButton id="submitButton" onClick={submitAnswer}>
          Submit Answer
        </SubmitAnswerButton>
      </SingleRowResult>
    </ResultContainer>
  );
}

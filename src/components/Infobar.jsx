import {
  MManswer,
  listOfMarbles,
  numberOfColumns,
  numberOfRows,
} from "../data/atoms";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

import React from "react";
import styled from "styled-components";

// import { useEffect } from "react/cjs/react.production.min";

const InfobarContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #ddafa2;
  // border-bottom: 1px solid #ddafa2;
  color: #ddafa2;
  padding: 10px;
  text-align: center;
  filter: drop-shadow(0 1mm 1mm black);
  font-size: 15px;
`;

const InfobarP = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  // border: 1px solid green;
  &:last-child {
    margin-right: 0;
  }
`;

const GenerateAnswerButton = styled.button`
  border: none;
  border-radius: 3px;
  background-color: var(--mmWhite);
  color: #350101;
  padding: 3px;
  cursor: pointer;
`;

const CountChangeButton = styled.button`
margin: 3px;
border:none;
border:radius: 3px;
background-color: var(--mmWhite);
padding: 5px;
cursor: pointer;
`;

export default function Infobar() {
  const [rows, setRows] = useRecoilState(numberOfRows);
  const [cols, setCols] = useRecoilState(numberOfColumns);
  const setAnswer = useSetRecoilState(MManswer);
  const marbles = useRecoilValue(listOfMarbles);

  function GenerateAnswer() {
    let tempAnswer = [];
    for (let i = 0; i < cols; i++) {
      tempAnswer.push(marbles[Math.floor(Math.random() * marbles.length)]);
    }
    console.log(tempAnswer);
    setAnswer(tempAnswer);
  }

  return (
    <InfobarContainer
      id="infobar"
      onClick={(e) => {
        console.log(e);
      }}
    >
      <InfobarP>
        Rows: {rows}
        <CountChangeButton
          onClick={() => {
            setRows(rows + 1);
          }}
        >
          ▲
        </CountChangeButton>
        <CountChangeButton
          onClick={() => {
            if (rows > 5) {
              setRows(rows - 1);
            }
          }}
        >
          ▼
        </CountChangeButton>
      </InfobarP>
      <InfobarP>
        Columns: {cols}
        <CountChangeButton
          onClick={() => {
            setCols(cols + 1);
            GenerateAnswer();
          }}
        >
          ▲
        </CountChangeButton>
        <CountChangeButton
          onClick={() => {
            if (cols > 4) {
              setCols(cols - 1);
              GenerateAnswer();
            }
          }}
        >
          ▼
        </CountChangeButton>
      </InfobarP>
      <InfobarP>
        <GenerateAnswerButton
          onClick={() => {
            GenerateAnswer();
          }}
        >
          Create Answer!
        </GenerateAnswerButton>
      </InfobarP>
    </InfobarContainer>
  );
}
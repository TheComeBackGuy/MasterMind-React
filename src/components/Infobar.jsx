import { numberOfColumns, numberOfRows } from "../data/atoms";

import React from "react";
import styled from "styled-components";
import { useSetRecoilState } from "recoil";

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

// const InfobarP = styled.div`
//   display: flex;
//   align-items: center;
//   margin-right: 20px;
//   // border: 1px solid green;
//   &:last-child {
//     margin-right: 0;
//   }
// `;

const InfobarButton = styled.button`
  background-color: ${(props) => props.theme.bg};
  color: var(--mmDarkRed);
  padding: 5px;
  border: none;
  margin-left: 10px;
  border-radius: 4px;
`;

InfobarButton.defaultProps = {
  theme: { bg: "var(--mmWhite)" },
};

// const annoying = {
//   bg: "green",
// };
// const GenerateAnswerButton = styled.button`
//   border: none;
//   border-radius: 3px;
//   background-color: var(--mmWhite);
//   color: #350101;
//   padding: 3px;
//   cursor: pointer;
// `;

// const CountChangeButton = styled.button`
// margin: 3px;
// border:none;
// border:radius: 3px;
// background-color: var(--mmWhite);
// padding: 5px;
// cursor: pointer;
// `;

export default function Infobar() {
  const setRows = useSetRecoilState(numberOfRows);
  const setCols = useSetRecoilState(numberOfColumns);
  // const setAnswer = useSetRecoilState(MManswer);
  // const marbles = useRecoilValue(listOfMarbles);

  // function GenerateAnswer() {
  //   let tempAnswer = [];
  //   for (let i = 0; i < cols; i++) {
  //     tempAnswer.push(marbles[Math.floor(Math.random() * marbles.length)]);
  //   }
  //   console.log(tempAnswer);
  //   setAnswer(tempAnswer);
  // }

  return (
    <InfobarContainer
      id="infobar"
      onClick={(e) => {
        console.log(e);
      }}
    >
      <InfobarButton
        theme={null}
        id="difficulty"
        onClick={() => {
          setRows(12);
          setCols(4);
        }}
      >
        Classic
      </InfobarButton>{" "}
      <InfobarButton
        theme={null}
        id="difficulty"
        onClick={() => {
          setRows(14);
          setCols(6);
        }}
      >
        Hard
      </InfobarButton>
      <InfobarButton
        theme={null}
        id="difficulty"
        onClick={() => {
          setRows(16);
          setCols(10);
        }}
      >
        Why?!
      </InfobarButton>
      {/* <InfobarP>
        Rows: {rows}
        <CountChangeButton
          id="changeCount"
          onClick={() => {
            setRows(rows + 1);
          }}
        >
          ▲
        </CountChangeButton>
        <CountChangeButton
          id="changeCount"
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
          id="changeCount"
          onClick={() => {
            setCols(cols + 1);
            GenerateAnswer();
          }}
        >
          ▲
        </CountChangeButton>
        <CountChangeButton
          id="changeCount"
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
        {/* <GenerateAnswerButton
          onClick={() => {
            GenerateAnswer();
          }}
        >
          Create Answer!
        </GenerateAnswerButton> */}
      {/* </InfobarP> */}
    </InfobarContainer>
  );
}

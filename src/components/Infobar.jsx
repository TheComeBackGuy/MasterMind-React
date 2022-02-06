import { BiCog } from "react-icons/bi";
import { BsQuestionCircle } from "react-icons/bs";
import React from "react";
import styled from "styled-components";

const InfobarContainer = styled.div`
  display: none;
  flex-flow: row nowrap;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #ddafa2;
  // border-bottom: 1px solid #ddafa2;
  color: #ddafa2;
  padding: 10px;
  text-align: center;
  // filter: drop-shadow(0 1mm 1mm black);
  font-size: 15px;
  border: 1px solid yellow;
`;

const DifficultyDropDown = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin: 0px 20px;
  align-items: center;
  color: #ddafa2;
  padding: 10px;
  text-align: center;
  background-color: var(--mmDarkRedShade);
  border-radius: 10px;
  border: none;
  cursor: pointer;
`;

const InfobarButton = styled.button`
  display: flex;
  flex-flow: column nowrap;
  margin: 0px 20px;
  align-items: center;
  color: #ddafa2;
  padding: 10px;
  text-align: center;
  // filter: drop-shadow(0 1mm 1mm black);
  background-color: var(--mmDarkRedShade);
  // border-radius: 10px;
  border: none;
  border-radius: 5px;
  font-size: 20px;
  cursor: pointer;
`;

InfobarButton.defaultProps = {
  theme: { bg: "var(--mmWhite)" },
};

DifficultyDropDown.defaultProps = {
  theme: { bg: "var(--mmWhite)" },
};

export default function Infobar() {
  // const setRows = useSetRecoilState(numberOfRows);
  // const setCols = useSetRecoilState(numberOfColumns);
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
      <InfobarButton>
        <BsQuestionCircle />
      </InfobarButton>
      <InfobarButton>
        <BiCog />
      </InfobarButton>

      {/* some old code to change rows.cols with arrow buttons */}
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

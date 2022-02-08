import { activeGame, numberOfColumns, numberOfRows } from "../data/atoms";
import { useRecoilValue, useSetRecoilState } from "recoil";

import { GiBrain } from "react-icons/gi";
import React from "react";
import styled from "styled-components";

const DifficultyList = styled.ul`
  display: flex;
  align-content: center;
  justify-content: center;
  flex-flow: row nowrap;
  list-style-type: none;
`;

const DifficultyItem = styled.li`
  font-size: 35px;
  color: ${(props) => props.theme.color};
  margin: 5px 10px 0 0;
  cursor: pointer;
  &:last-child {
    margin-right: 0;
  }
`;

DifficultyItem.defaultProps = {
  theme: {
    // font: "25px",
    color: "green",
  },
};

const easy = {
  // font: "25px",
  color: "green",
};

const medium = {
  // font: "30px",
  color: "yellow",
};

const hard = {
  // font: "35px",
  color: "red",
};

const Footer = styled.div`
  font-size: 10px;
  font-weight: 200;
`;
export default function Settings() {
  const setRows = useSetRecoilState(numberOfRows);
  const setCols = useSetRecoilState(numberOfColumns);
  const gameIsActive = useRecoilValue(activeGame);

  return (
    <div>
      <h2>Settings</h2>
      <p>Choose your difficulty</p>
      <DifficultyList>
        <DifficultyItem theme={easy}>
          <GiBrain
            onClick={(e) => {
              if (!gameIsActive) {
                setCols(4);
                setRows(12);
              }
            }}
          />
        </DifficultyItem>
        <DifficultyItem theme={medium}>
          <GiBrain
            onClick={(e) => {
              if (!gameIsActive) {
                setCols(6);
                setRows(12);
              }
            }}
          />
        </DifficultyItem>
        <DifficultyItem theme={hard}>
          <GiBrain
            onClick={(e) => {
              if (!gameIsActive) {
                setCols(10);
                setRows(14);
              }
            }}
          />
        </DifficultyItem>
      </DifficultyList>
      <Footer>
        {" "}
        Designed and developed by Dennis Hart based on the classic game.
      </Footer>
    </div>
  );
}

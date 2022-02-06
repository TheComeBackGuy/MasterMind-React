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

export default function Settings() {
  return (
    <div>
      <h2>Settings</h2>
      <p>Choose your difficulty</p>
      <DifficultyList>
        <DifficultyItem theme={easy}>
          <GiBrain />
        </DifficultyItem>
        <DifficultyItem theme={medium}>
          <GiBrain />
        </DifficultyItem>
        <DifficultyItem theme={hard}>
          <GiBrain />
        </DifficultyItem>
      </DifficultyList>
      <p> Designed and developed by Dennis Hart based on the classic game.</p>
    </div>
  );
}

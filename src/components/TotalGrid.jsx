import AnswerRow from "./AnswerRow";
import MakeStacks from "./MakeStacks";
import React from "react";
import styled from "styled-components";

const GameContainer = styled.div`
  background: rgb(84, 84, 84);
  background: linear-gradient(
    180deg,
    rgba(84, 84, 84, 1) 0%,
    rgba(19, 19, 19, 1) 100%
  );
  display: flex;
  flex-flow: column nowrap;

  align-content: center;
  justify-content: center;
  width: fit-content;
  max-width: 100%;
  border-radius: 7px;
  padding: 5px;
  margin: 10px auto;
  filter: drop-shadow(0 5mm 2mm black);
`;
export default function TotalGrid({ answer }) {
  return (
    <GameContainer>
      <div className="divotContainer">
        <div className="divot ul"></div>
        <div className="divot ur"></div>
      </div>
      {/* <RowOfButtons answer={answer} /> */}
      {/* <Marblefades /> */}
      <AnswerRow />
      <MakeStacks />
      <div className="divotContainer">
        <div className="divot bl"></div>
        <div className="divot br"></div>
      </div>
    </GameContainer>
  );
}

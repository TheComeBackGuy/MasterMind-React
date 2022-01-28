// import GameTimer from "./GameTimer";

import React from "react";
import { listOfMarbles } from "../data/atoms";
import styled from "styled-components";
import { useRecoilValue } from "recoil";

const LegendContainer = styled.div`
  width: 220px;
  display: flex;
  flex-flow: column nowrap;
  margin: 0px 20px;
  align-items: center;
  color: #ddafa2;
  padding: 10px;
  text-align: center;
  // filter: drop-shadow(0 1mm 1mm black);
  background-color: var(--mmDarkRedShade);
  border-radius: 10px;
  //   border: 1px solid white;
  font-size: 15px;
  & > h2 {
    border-bottom: 1px solid var(--mmWhite);
    margin: 20px 0 10px 0;
  }
`;

const MarbleIcon = styled.li`
  display: inline-flex;
  flex-flow: row nowrap;
  list-style-type: none;
  width: 15px;
  height: 15px;
  background-color: white;
  border-radius: 50%;
  margin: 5px;
`;

export default function Legend() {
  const bagofMarbles = useRecoilValue(listOfMarbles);

  return (
    <LegendContainer>
      {/* <GameTimer /> */}
      <h2>The Goal</h2>
      <p>
        Use the clues to match the hidden combination of marbles at the top.
      </p>

      <h2>How To Play</h2>
      <p>
        Tap each marble to cycle through the colors. When you've changed them to
        your liking, Press "Submit Answer"
      </p>

      <h2>Legend</h2>
      <p>★ = Right color, right place </p>
      <p>☆ = Right color, wrong place </p>

      <h2>Available Colors</h2>
      <ul>
        {bagofMarbles.map((marble, index) => {
          return (
            <MarbleIcon
              key={index}
              style={{ backgroundColor: `${marble}` }}
            ></MarbleIcon>
          );
        })}
      </ul>
    </LegendContainer>
  );
}

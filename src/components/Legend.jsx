// import GameTimer from "./GameTimer";

import React from "react";
import { listOfMarbles } from "../data/atoms";
import styled from "styled-components";
import { useRecoilValue } from "recoil";

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
    <>
      {/* <GameTimer /> */}
      <h2>The Goal</h2>
      <p>
        Use the clues to match the hidden combination of marbles at the top.
      </p>
      <h2>How To Play</h2>
      <p>
        Tap each marble to cycle through the colors. When you've changed them to
        your liking, Press "✔"
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
    </>
  );
}

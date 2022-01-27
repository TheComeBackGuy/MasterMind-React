import {
  activeGame,
  activeRow,
  listOfMarbles,
  numberOfColumns,
} from "../data/atoms";

import React from "react";
import { useRecoilValue } from "recoil";

// import { handleButton, handleButtonRollover } from "../utils/globalFunctions";

export default function RowOfButtons({ currentRow }) {
  const thisRow = [];
  const columns = useRecoilValue(numberOfColumns);
  const activeRowNow = useRecoilValue(activeRow);
  const bagOfMarbles = useRecoilValue(listOfMarbles);
  const gameIsActive = useRecoilValue(activeGame);
  //if fed an answer, RoOfButtons will just make a row of answer buttons

  function handleButtonRollover(e, activeRowNow, currentRow) {
    if (currentRow === activeRowNow && gameIsActive) {
      // e.target.style.border = "1px solid red";
      e.target.style.cursor = "pointer";
    }
  }

  function handleButton(e, activeRowNow, currentRow) {
    let space = bagOfMarbles.indexOf(e.target.classList[1]);
    if (currentRow === activeRowNow && gameIsActive) {
      if (space < bagOfMarbles.length - 1) {
        e.target.classList.replace(
          bagOfMarbles[space],
          bagOfMarbles[space + 1]
        );
        space++;
        console.log(e.target.classList[1]);
      } else if (space === bagOfMarbles.length - 1) {
        e.target.classList.replace(e.target.classList[1], bagOfMarbles[0]);
        space = 0;
      }

      ///cycle through marbles AND setstate for current answer
    }
  }

  function handleButtonRollout(e, activeRowNow, currentRow) {
    if (currentRow === activeRowNow && gameIsActive) {
      e.target.style.border = "1px solid var(--darkGrey)";
    }
  }

  // `${answer[answer.indexOf(row)]}`;

  for (let i = 0; i < columns; i++) {
    thisRow.push(
      <button
        key={`button-r${currentRow}c${i}`}
        id={`r${currentRow}c${i}`}
        className="hole black"
        onClick={(e) => handleButton(e, activeRowNow, currentRow)}
        onMouseOver={(e) => {
          handleButtonRollover(e, activeRowNow, currentRow);
        }}
        onMouseLeave={(e) => handleButtonRollout(e, activeRowNow, currentRow)}
      >
        {/* r{currentRow}c{i} */}
      </button>
    );
  }
  // console.log(thisRow);
  // console.log(thisRow);

  ///row is defined by the current row and the column is defined by the iterator
  return (
    <ul id={`row${currentRow}`} className="marbleRow">
      {thisRow.map((row) => {
        // console.log(row);
        return (
          <li key={`row-r1c${thisRow.indexOf(row)}`}>
            {row}
            {/* <MarbleSpace row={rows} column={thisRow.indexOf(row)} /> */}
          </li>
        );
      })}
    </ul>
  );
}

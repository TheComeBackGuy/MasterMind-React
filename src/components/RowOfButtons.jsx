import { handleButton, handleButtonRollover } from "../utils/globalFunctions";

import React from "react";
import { numberOfColumns } from "../data/atoms";
import { useRecoilValue } from "recoil";

export default function RowOfButtons({ currentRow }) {
  const thisRow = [];
  const columns = useRecoilValue(numberOfColumns);

  //if fed an answer, RoOfButtons will just make a row of answer buttons

  // `${answer[answer.indexOf(row)]}`;

  for (let i = 0; i < columns; i++) {
    thisRow.push(
      <button
        key={`button-r${currentRow}c${i}`}
        id={`r${currentRow}c${i}`}
        className="hole"
        onClick={(e) => handleButton(e)}
        onMouseOver={(e) => {
          handleButtonRollover(e);
        }}
        onMouseLeave={(e) =>
          (e.target.style.border = "1px solid var(--darkGrey)")
        }
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

import React from "react";

export default function RowOfButtons({ currentRow }) {
    // let currentRow = 0;
  // currentRow and difficulty  detected and used to reproduce rows
  const thisRow = [];
    // let currentColor = 0;
    const columns = 6;

  function handleButtonRollover(e) {
    e.target.style.border = '1px solid red';
  }

  function handleButton(button) {
    const colors = ['black', 'red', 'yellow', 'green', 'blue', 'orange'];
    console.log(button.target);
    if (button.target.style.backgroundColor === colors[0]) {
      document.querySelector(`#${button.target.id}`).style.backgroundColor =
        colors[1];
    }
  }
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
        onMouseLeave={(e) => (e.target.style.border = '1px solid var(--darkGrey)')}
      >
        r{currentRow}c{i}
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
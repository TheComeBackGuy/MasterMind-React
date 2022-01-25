import React from "react";
import RowOfButtons from "./RowOfButtons";
import { numberOfRows } from "../data/atoms";
import { useRecoilValue } from "recoil";

export default function MakeStacks() {
  const columnsArray = [];
  const rows = useRecoilValue(numberOfRows);
  for (let i = rows; i > 0; i--) {
    columnsArray.push(<RowOfButtons key={`row-${i}`} currentRow={i} />);
    // console.log(columnsArray);
  }

  return (
    <div>
      {columnsArray.map((stack, index) => {
        return <div key={index}> {stack}</div>;
      })}
    </div>
  );
}

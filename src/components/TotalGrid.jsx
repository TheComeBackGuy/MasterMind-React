import MakeStacks from "./MakeStacks";
import React from "react";
import RowOfButtons from "./RowOfButtons";

export default function TotalGrid({ answer }) {
  return (
    <div className="container ">
      <div className="divotContainer">
        <div className="divot ul"></div>
        <div className="divot ur"></div>
      </div>
      {/* <RowOfButtons answer={answer} /> */}
      <RowOfButtons answer={answer} />
      <MakeStacks />
      <div className="divotContainer">
        <div className="divot bl"></div>
        <div className="divot br"></div>
      </div>
    </div>
  );
}

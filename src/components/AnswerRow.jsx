import { handleButton, handleButtonRollover } from "../utils/globalFunctions";

import { MManswer } from "../data/atoms";
import React from "react";
import { useRecoilValue } from "recoil";

// import { CreateAnswer } from "./CreateAnswer";




export default function AnswerRow() {
  const answer = useRecoilValue(MManswer);
  return (
    <ul id={`answer`} className="marbleRow">
      {answer.map((row) => {
        // console.log(row);
        return (
          <button
            key={`${answer[answer.indexOf(row)]}-${Math.random() * 15000}`}
            id={`${answer[answer.indexOf(row)]}`}
            className={`hole ${answer[answer.indexOf(row)]}`}
            onClick={(e) => handleButton(e)}
            onMouseOver={(e) => {
              handleButtonRollover(e);
            }}
            onMouseLeave={(e) =>
              (e.target.style.border = "1px solid var(--darkGrey)")
            }
          >
            {answer[answer.indexOf(row)]}
          </button>
        );
      })}
    </ul>
  );
}

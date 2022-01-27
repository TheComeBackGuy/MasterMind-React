import "./index.css";

import {
  MManswer,
  activeGame,
  activeRow,
  listOfMarbles,
  numberOfColumns,
} from "./data/atoms";
import {
  useRecoilState,
  useRecoilValue,
  useResetRecoilState,
  useSetRecoilState,
} from "recoil";

// import { GenerateAnswer } from "./components/Infobar";
import Infobar from "./components/Infobar";
import Legend from "./components/Legend";
import MarbleTracking from "./components/MarbleTracking";
// import { CreateAnswer } from "./components/CreateAnswer";
import TotalGrid from "./components/TotalGrid";
import { generateDefaultRow } from "./utils/globalFunctions";
import styled from "styled-components";
import { useEffect } from "react";

const FullGameContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  margin: 30px auto 0 auto;
  width: 100%;
  // border: 1px solid green;
  & > div {
    // border: 1px solid red;
  }
`;

const StartButton = styled.button`
  // color: green;
  width: 100%;
  padding: 20px;
  border: none;
  background-color: var(--mmWhite);
  font-size: 25px;
  cursor: pointer;
  transition: 0.25s ease-in-out;
  &:hover {
    background-color: var(--mmBrightWhite);
    transition: 0.25s ease-in-out;
  }
`;

export default function App() {
  const [isGameActive, setIsGameActive] = useRecoilState(activeGame);
  const [activeRowNumber, setActiveRowNumber] = useRecoilState(activeRow);
  const resetRows = useResetRecoilState(activeRow);
  const setAnswer = useSetRecoilState(MManswer);
  const cols = useRecoilValue(numberOfColumns);
  const marbles = useRecoilValue(listOfMarbles);
  // const [guessRow, setGuessRow] = useRecoilState(currentGuessRowState);

  useEffect(() => {
    if (activeRowNumber > 0) {
      for (let i = 0; i < cols; i++) {
        // console.log("hey " + i);
        document
          .getElementById(`r${activeRowNumber}c${i}`)
          .classList.replace("black", `yellow`);
        console.log(`r${activeRowNumber}c${i}`);
      }
    }
  }, [activeRowNumber, cols]);

  //generates a random answer for this round based on the column length
  function GenerateAnswer() {
    let tempAnswer = [];
    for (let i = 0; i < cols; i++) {
      tempAnswer.push(marbles[Math.floor(Math.random() * marbles.length)]);
    }
    console.log(tempAnswer);
    setAnswer(tempAnswer);
  }

  //game logic at start
  function StartNewGame(e) {
    //removes the customization bar
    document.querySelector("#infobar").style.display = "none";
    //litghtswitch for game elements
    setIsGameActive(true);

    // document.getElementById("submitButton").style.display = "flex";

    GenerateAnswer();

    //changes start button style
    e.target.style.backgroundColor = "var(--mmDarkRed)";
    e.target.style.color = "var(--mmWhite";
    e.target.innerText = "Give Up";

    //make board active
    setActiveRowNumber(1);

    generateDefaultRow(cols, activeRowNumber);
    // console.log("clear the board");
    // console.log("Start the timer");
    // console.log("Hide the answer");
  }
  // document.getElementById("submitButton").style.display = "none";

  return (
    <div>
      <header>
        <h1>MASTERMIND</h1>
      </header>
      <Infobar />
      <FullGameContainer>
        <div>
          <Legend />
        </div>
        <div>
          <TotalGrid />
        </div>
        <div>
          <MarbleTracking id="submitButton" />
        </div>
      </FullGameContainer>
      <StartButton
        onClick={(e) => {
          if (isGameActive) {
            console.log("Stop the timer");
            console.log("Show the answer");
            e.target.style.backgroundColor = "var(--mmWhite)";
            e.target.style.color = "var(--mmDarkRed)";
            e.target.innerText = "Start Game";
            setIsGameActive(!isGameActive);
          } else {
            resetRows();
            StartNewGame(e);
          }
        }}
      >
        Start Game
      </StartButton>
      <footer>
        Designed and developed by Dennis Hart based on Hasbro Game.
      </footer>
    </div>
  );
}

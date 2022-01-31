import "./index.css";

import {
  MManswer,
  activeGame,
  activeRow,
  currentGameHistory,
  listOfMarbles,
  numberOfColumns,
  numberOfRows,
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

  const resetRowNumber = useResetRecoilState(activeRow);
  const setAnswer = useSetRecoilState(MManswer);
  const cols = useRecoilValue(numberOfColumns);
  const rows = useRecoilValue(numberOfRows);
  const marbles = useRecoilValue(listOfMarbles);
  const resetGameHistory = useResetRecoilState(currentGameHistory);

  // const [guessRow, setGuessRow] = useRecoilState(currentGuessRowState);

  useEffect(() => {
    //adds default yellow line of marbles at game start
    if (activeRowNumber > 0 && activeRowNumber <= rows && isGameActive) {
      for (let i = 0; i < cols; i++) {
        document
          .getElementById(`r${activeRowNumber}c${i}`)
          .classList.replace("black", `yellow`);
        document
          .getElementById(`r${activeRowNumber}c${i}`)
          .classList.add("marble");
      }
    }
  }, [activeRowNumber, cols, rows, isGameActive]);

  //enable/disable objects based on if the user is playing
  useEffect(() => {
    if (isGameActive) {
      //game is active
      // console.log(document.querySelector("#footer").position);
      document.querySelector("#infobar").style.display = "none";
      // document.querySelector("#infobar").style.color = "var(--mmDarkRedShade)";
      // document.querySelectorAll("#difficulty").forEach((child) => {
      //   child.theme = "annoying";
      // });
      console.log(document.querySelector("#difficulty"));
      console.log(document.querySelectorAll("#changeCount"));
    } else {
      //game is not active
      document.querySelector("#infobar").style.color = "var(--mmWhite)";
      document.querySelector("#infobar").style.display = "flex";

      document.querySelectorAll("#changeCount").forEach((child) => {
        child.disabled = false;
        // child.style.filter = "none";
        child.style.backgroundColor = "var(--mmWhite)";
      });

      const buttonSwitched = document.querySelector("#startButton");
      buttonSwitched.style.backgroundColor = "var(--mmWhite)";
      buttonSwitched.style.color = "var(--mmDarkRed)";
      buttonSwitched.innerText = "Start Game";

      document.querySelector("#submitButton").style.display = "none";

      resetRowNumber();
    }
  }, [isGameActive, resetRowNumber]);

  //generates a random answer for this round based on the column length
  function GenerateAnswer() {
    let tempAnswer = [];
    for (let i = 0; i < cols; i++) {
      tempAnswer.push(marbles[Math.floor(Math.random() * marbles.length)]);
    }
    setAnswer(tempAnswer);
  }

  function resetRowBackgrounds() {
    for (let i = 1; i <= rows; i++) {
      // console.log(`row ${i}`);

      for (let j = 0; j < cols; j++) {
        // console.log(`col ${j}`);
        document
          .querySelector(`#r${i}c${j}`)
          .classList.replace(
            document.querySelector(`#r${i}c${j}`).classList[1],
            "black"
          );
      }
    }
  }

  //game logic at start
  function StartNewGame(e) {
    //litghtswitch for game elements
    setIsGameActive(true);

    //reset the move history
    resetGameHistory();

    // document.getElementById("submitButton").style.display = "flex";

    GenerateAnswer();

    //changes start button style
    e.target.style.backgroundColor = "var(--mmDarkRed)";
    e.target.style.color = "var(--mmWhite";
    e.target.innerText = "Give Up";

    //Activates the first row
    setActiveRowNumber(1);
    //removes the customization bar
    //shows the submit button
    document.querySelector("#submitButton").style.display = "flex";

    // generateDefaultRow(cols, activeRowNumber);
    // console.log("clear the board");
    // console.log("Start the timer");
    // console.log("Hide the answer");
  }

  // function endGame() {
  //   // document.querySelector("#infobar").style.display = "none";
  //   // document.querySelector("#submitButton").style.display = "none";
  //   resetRowNumber();
  //   // setIsGameActive(false);
  // }

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
        id="startButton"
        onClick={(e) => {
          if (isGameActive) {
            // endGame();
            setIsGameActive(false);
            // console.log("Stop the timer");
            // console.log("Show the answer");
            e.target.style.backgroundColor = "var(--mmWhite)";
            e.target.style.color = "var(--mmDarkRed)";
            e.target.innerText = "Start Game";
          } else {
            resetRowBackgrounds();
            StartNewGame(e);
          }
        }}
      >
        Start New Game
      </StartButton>
      <footer id="footer">
        Designed and developed by Dennis Hart based on Hasbro Game.
      </footer>
    </div>
  );
}

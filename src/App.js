import "./index.css";

import {
  MManswer,
  activeGame,
  activeRow,
  currentGameHistory,
  displayPopUp,
  displayValue,
  listOfMarbles,
  numberOfColumns,
  numberOfRows,
} from "./data/atoms";
import { useEffect, useRef } from "react";
import {
  useRecoilState,
  useRecoilValue,
  useResetRecoilState,
  useSetRecoilState,
} from "recoil";

import { AiOutlineCloseCircle } from "react-icons/ai";
import { BiCog } from "react-icons/bi";
import { BsQuestionCircle } from "react-icons/bs";
import Helmet from "react-helmet";
import MarbleTracking from "./components/MarbleTracking";
// import { GenerateAnswer } from "./components/Infobar";
// import Infobar from "./components/Infobar";
import SwitchPopup from "./components/SwitchPopup";
// import { CreateAnswer } from "./components/CreateAnswer";
import TotalGrid from "./components/TotalGrid";
import styled from "styled-components";

const AppContainer = styled.div`
  // display: sticky;
  width: 100vw;
  // border: 1px solid yellow;
  margin: 0 auto;
`;

const Logo = styled.h1`
  color: white;
  font-family: "Teko", sans-serif;
  font-size: 60px;
  @media (max-width: 800px) {
    font-size: 40px;
  }
`;

const GameMask = styled.div`
  width: inherit;
  // border: 3px solid blue;
  overflow: hidden;
  // padding: 0 20px;
  margin: 0 auto 50px auto;
`;

const FullGameContainer = styled.div`
  display: flex;
  padding: 0 10px;
  flex-flow: row nowrap;
  justify-content: center;
  margin: 0 auto 0 auto;
  width: fit-content;
  transform-origin: top left;
  // border: 1px solid green;
  // transform: scale(0.75);
  // & > div {
  //   // border: 1px solid red;
  // }
`;

const Header = styled.header`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  margin: 0 auto;
  border-bottom: 1px solid var(--mmWhite);
`;

const PopUpContainer = styled.div`
  display: none;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
`;

const PopUpMessage = styled.div`
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
  font-size: 12px;
  & h2 {
    border-bottom: 1px solid var(--mmWhite);
    margin: 20px 0 10px 0;
  }
  z-index: 101;
`;

const BlackLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.65);
  z-index: 100;
`;
const CloseWindowContainer = styled.div`
  width: 100%;
  // border: 1px solid yellow;
  text-align: right;
  margin: 0 0px -30px 0;
`;
const CloseWindowButton = styled.button`
  font-size: 40px;
  background-color: transparent;
  color: var(--mmWhite);
  border: none;
  cursor: pointer;
  margin: -30px 0 0 0;
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

const InfobarButton = styled.button`
  display: flex;
  flex-flow: column nowrap;
  margin: 0px 20px;
  align-items: center;
  color: #ddafa2;
  padding: 10px;
  text-align: center;
  // filter: drop-shadow(0 1mm 1mm black);
  background-color: var(--mmDarkRedShade);
  // border-radius: 10px;
  border: none;
  border-radius: 5px;
  font-size: 20px;
  cursor: pointer;
  @media (max-width: 800px) {
  }
`;

const SpacerDiv = styled.div`
  display: flex;
  width: 60px;
  // border: 1px solid yellow;
  margin: 20px;
  @media (max-width: 800px) {
    display: none;
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
  const [popUp, setPopUp] = useRecoilState(displayPopUp);
  const setPopupDisplayValue = useSetRecoilState(displayValue);

  // const gameBox = document.querySelector("#gameContainer");

  const ref = useRef(null);

  // const [gameWidth, setGameWidth] = useRecoilState(gameWidthState);

  useEffect(() => {
    const windowWidth = window.innerWidth;
    const gameWidth = ref.current.offsetWidth;
    const scaleAmount = windowWidth / gameWidth;
    console.log(windowWidth / gameWidth);
    console.log("width", ref.current.offsetWidth);
    console.log(ref);

    // if window is thinner than game, scale the game to fit
    if (window.innerWidth < ref.current.offsetWidth) {
      document.querySelector(
        "#fullGameContainer"
      ).style.transform = `scale(${scaleAmount})`;
      ref.current.backgroundColor = "red";
      console.log("TOO SMALL!!");
    }

    // gameBox.style.width =
  }, []);

  // const gameRect = gameBox;
  // console.log(gameBox);

  // let scaleFactor =
  //   Window.innerWidth / ;
  // console.log(document.querySelector("#gameContainer").style.width);
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
      console.log(document.querySelector("#difficulty"));
      console.log(document.querySelectorAll("#changeCount"));
    } else {
      //game is inactive
      document.querySelectorAll("#changeCount").forEach((child) => {
        child.disabled = false;
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

  useEffect(() => {
    if (popUp === true) {
      document.querySelector("#popupDisplay").style.display = "flex";
    } else {
      document.querySelector("#popupDisplay").style.display = "none";
    }
  }, [popUp]);

  // useEffect(() => {
  //   console.log("Scale Factor is: " + scaleFactor);
  // });
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
    document.querySelector("#row1").scrollIntoView();
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
    <AppContainer id="App">
      <Helmet></Helmet>
      {/* this container is a popup for rules, settings, and history */}
      <PopUpContainer id="popupDisplay">
        <PopUpMessage>
          <CloseWindowContainer>
            <CloseWindowButton
              onClick={() => {
                setPopUp(false);
              }}
            >
              <AiOutlineCloseCircle />
            </CloseWindowButton>
          </CloseWindowContainer>
          {/* Space where content is loaded in  */}
          <SwitchPopup />
        </PopUpMessage>
        <BlackLayer onClick={() => setPopUp(false)}></BlackLayer>
      </PopUpContainer>

      <Header>
        <InfobarButton
          id="rules"
          onClick={() => {
            setPopupDisplayValue("rules");
            // popupValue = "rules";
            setPopUp(true);
          }}
        >
          <BsQuestionCircle />
        </InfobarButton>
        <Logo>MASTERMIND</Logo>
        <InfobarButton
          id="settings"
          onClick={() => {
            setPopupDisplayValue("settings");

            setPopUp(true);
          }}
        >
          <BiCog />
        </InfobarButton>
      </Header>
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

      {/* <Infobar /> */}
      <GameMask id="gameContainer">
        <FullGameContainer ref={ref} id="fullGameContainer">
          {/* <div>
          <Legend />
        </div> */}
          <SpacerDiv></SpacerDiv>
          <div>
            <TotalGrid />
          </div>
          <div>
            <MarbleTracking id="submitButton" />
          </div>
        </FullGameContainer>
      </GameMask>

      <footer id="footer"></footer>
    </AppContainer>
  );
}

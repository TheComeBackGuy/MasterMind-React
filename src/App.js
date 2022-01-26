import "./index.css";

import { activeGame, activeRow } from "./data/atoms";

import Sidebar from "./components/Sidebar";
// import { CreateAnswer } from "./components/CreateAnswer";
import TotalGrid from "./components/TotalGrid";
import styled from "styled-components";
import { useRecoilState } from "recoil";

const GameContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin: 30px auto 0 auto;
  justify-content: space-between;
  width: fit-content;
  // border:1px solid red;
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

  return (
    <div>
      <header>
        <h1>MASTERMIND</h1>
      </header>
      <GameContainer>
        <Sidebar />
        <TotalGrid />
      </GameContainer>
      <StartButton
        onClick={() => {
          setIsGameActive(true);
          setActiveRowNumber(1);
          console.log(
            `Start the blasted game! Start with row ${activeRowNumber} ${isGameActive}`
          );
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

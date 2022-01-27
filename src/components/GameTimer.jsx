import React from "react";

// import { gameTimerState } from "../data/atoms";
// import { useRecoilState } from "recoil";

export default function GameTimer() {
  //   const [gameTimer, setGameTimer] = useRecoilState(gameTimerState);

  const startTime = new Date();
  //   let round = 0;
  //   const displayTime = ;
  const evaluateTime = setInterval(() => {
    // round++;
    const newTime = new Date();
    const passedTime = newTime - startTime;
    const hours = passedTime / 24;
    const minutes = hours / 60;
    const seconds = minutes / 60;
    // console.log(displayTime);
    return `This : ${seconds}`;
  }, 1000);

  //   return evaluateTime;

  return <h1>{evaluateTime}</h1>;
}

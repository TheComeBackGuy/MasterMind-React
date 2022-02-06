import Legend from "./Legend";
import React from "react";
import Settings from "./Settings";
import { displayValue } from "../data/atoms";
import { useRecoilValue } from "recoil";

export default function SwitchPopup() {
  const popUpValue = useRecoilValue(displayValue);
  console.log(popUpValue);
  switch (popUpValue) {
    case "rules":
      return <Legend />;
    case "settings":
      return <Settings />;
    default:
      break;
  }
}

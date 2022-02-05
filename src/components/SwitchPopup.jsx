import Legend from "./Legend";
import React from "react";

export default function SwitchPopup({ content }) {
  switch (content) {
    case "rules":
      return <Legend />;
    default:
      break;
  }
}

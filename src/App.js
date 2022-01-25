import "./index.css";

import CreateAnswer from "./components/CreateAnswer";
import TotalGrid from "./components/TotalGrid";

export default function App() {
  CreateAnswer();
  return (
    <div>
      <header>
        <h1> MASTERMIND</h1>
      </header>
      <TotalGrid />
    </div>
  );
}

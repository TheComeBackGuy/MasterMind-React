import "./index.css";

// import { CreateAnswer } from "./components/CreateAnswer";
import TotalGrid from "./components/TotalGrid";

export default function App() {
  return (
    <div>
      <header>
        <h1> MASTERMIND</h1>
      </header>
      <TotalGrid />
      <footer>
        Designed and developed by Dennis Hart based on Hasbro Game.
      </footer>
    </div>
  );
}

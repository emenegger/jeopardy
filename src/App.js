import "./App.scss";
import BigBoard from "./components/Board/BigBoard";
import { useSelector } from "react-redux";
import QuestionModal from "./components/QuestionModal/QuestionModal";
import PlayersSelection from "./components/Players/PlayersInput";
import Selection from "./components/Categories/Selection";
import HeroPage from "./components/HeroPage/HeroPage";
import DailyDouble from "./components/DailyDouble/DailyDouble";
import { Routes, Route } from "react-router-dom";
import { showQuestionSelector, showDailyDoubleSelector } from "./selectors/questions";

function App() {
  const showQuestion = useSelector(showQuestionSelector);
  const showDailyDouble = useSelector(showDailyDoubleSelector);

  return (
    <div className="App">
      {showQuestion && <QuestionModal />}
      {showDailyDouble && <DailyDouble />}
      <Routes>
        <Route path="/" element={<HeroPage />} />
        <Route path="player-selection" element={<PlayersSelection />} />
        <Route path="category-selection" element={<Selection />} />
        <Route path="board" element={<BigBoard />} />
      </Routes>
    </div>
  );
}

export default App;

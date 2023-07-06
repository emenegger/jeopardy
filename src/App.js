import "./App.scss";
import { useSelector } from "react-redux";
import BigBoard from "./components/Board/BigBoard";
import QuestionModal from "./components/QuestionModal/QuestionModal";
import PlayersSelection from "./components/Players/PlayersInput";
import Selection from "./components/Categories/Selection";
import HeroPage from "./components/HeroPage/HeroPage";
import DailyDouble from "./components/DailyDouble/DailyDouble";
import DoubleJeopardy from "./components/HeroPage/DoubleJeopardy";
import { Routes, Route } from "react-router-dom";
import {
  showQuestionSelector,
  showDailyDoubleSelector,
} from "./selectors/questions";
import { getIsDoubleJeopardy } from "./selectors/categories";
import { useEffect, useState } from "react";

function App() {
  const showQuestion = useSelector(showQuestionSelector);
  const showDailyDouble = useSelector(showDailyDoubleSelector);
  const doubleJeopardy = useSelector(getIsDoubleJeopardy);
  const [ddToggle, setDdToggle] = useState(true);
  const showDdModal = doubleJeopardy && ddToggle;
  // refactor the show daily double modal?

  useEffect(()=> {
    if (showDdModal) {
      setDdToggle(true)};
  }, [showDdModal])

  return (
    <div className="App">
      {showDdModal && !showQuestion && (
        <DoubleJeopardy setDdToggle={setDdToggle} />
      )}
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

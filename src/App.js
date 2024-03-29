import "./App.scss";
import { useSelector } from "react-redux";
import BigBoard from "./components/Board/BigBoard";
import QuestionModal from "./components/QuestionModal/QuestionModal";
import PlayersSelection from "./components/Players/PlayersSelection";
import Selection from "./components/Categories/Selection";
import HeroPage from "./components/HeroPage/HeroPage";
import DailyDouble from "./components/DailyDouble/DailyDouble";
import RoundModal from "./components/HeroPage/RoundModal";
import FinalJeopardy from "./components/FinalJeopardy/FinalJeopardy";
import User from "./components/User/User";
import Answers from "./components/Admin/Answers";
import { Routes, Route } from "react-router-dom";
import {
  showQuestionSelector,
  showDailyDoubleSelector,
} from "./selectors/questions";
import {
  getIsDoubleJeopardy,
  getIsFinalJeopardy,
} from "./selectors/categories";
import { useState } from "react";

function App() {
  const showQuestion = useSelector(showQuestionSelector);
  const showDailyDouble = useSelector(showDailyDoubleSelector);
  const doubleJeopardy = useSelector(getIsDoubleJeopardy);
  const finalJeopardy = useSelector(getIsFinalJeopardy);
  const [modal, setModal] = useState(true);
  const showDdModal = doubleJeopardy && modal;
  // refactor the show daily double modal?

  const getModal = () => {
    if (!modal && finalJeopardy && !showQuestion)
      return <RoundModal setModal={setModal} round={"Final"} />;
    if (showDdModal && !showQuestion)
      return <RoundModal setModal={setModal} round={"Double"} />;
    if (showQuestion) return <QuestionModal />;
    if (showDailyDouble) return <DailyDouble />;
  };

  return (
    <div className="App">
      {getModal()}
      <Routes>
        <Route path="/" element={<HeroPage />} />
        <Route path="player-selection" element={<PlayersSelection />} />
        <Route path="category-selection" element={<Selection />} />
        <Route path="board" element={<BigBoard />} />
        <Route path="final-jeopardy" element={<FinalJeopardy />} />
        <Route path="user" element={<User />} />
        <Route path="current-answer" element={<Answers />} />
      </Routes>
    </div>
  );
}

export default App;

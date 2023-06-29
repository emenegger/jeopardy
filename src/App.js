import "./App.scss";
import BigBoard from "./components/Board/BigBoard";
import { useDispatch, useSelector } from "react-redux";
import { setAllCategories } from "./components/Board/boardSlice";
import QuestionModal from "./components/QuestionModal/QuestionModal";
// import SelectionWrapper from "./components/Selection/SelectionWrapper";
import PlayersSelection from "./components/Players/PlayersInput";
import Selection from './components/Selection/Selection';
import { useQuery } from "react-query";
import { fetchCategories } from "./api/categories";
import HeroPage from "./components/HeroPage/HeroPage";
import { Routes, Route } from "react-router-dom";

function App() {
  const showQuestionSelector = (state) => state.question.toggleModal; 
  const showDailyDoubleSelector = (state) => state.question.showDailyDouble;// this would be in a separate file in a selectors folder and imported in
  const showQuestion = useSelector(showQuestionSelector);
  const showDailyDouble = useSelector(showDailyDoubleSelector);

  return (
    <div className="App">
      {showQuestion && <QuestionModal />}
      {/* {showDailyDouble && <h1>DAILY DOUBLE!!!!</h1>} */}
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

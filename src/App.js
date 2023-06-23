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
  const dispatch = useDispatch();
  const showQuestionSelector = (state) => state.question.toggleModal; // this would be in a separate file in a selectors folder and imported in
  const showQuestion = useSelector(showQuestionSelector);
  const sortByName = (array) =>
    array.sort((a, b) => (a.title < b.title ? -1 : a.title > b.title ? 1 : 0));

  const { isLoading, error, data } = useQuery(
    "fetchCategories",
    fetchCategories
  );
  if (data) {
    const sortedResponse = sortByName([...data]);
    dispatch(setAllCategories(sortedResponse));
  }

  return (
    <div className="App">
      {showQuestion && <QuestionModal />}
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

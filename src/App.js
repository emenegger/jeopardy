import "./App.scss";
import BigBoard from "./components/Board/BigBoard";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { setAllCategories } from "./components/Board/boardSlice";
import QuestionModal from "./components/QuestionModal/QuestionModal";
import SelectionWrapper from "./components/Selection/SelectionWrapper";
import { useQuery } from 'react-query';
import { fetchCategories } from "./api/categories";
import HeroPage from "./components/HeroPage/HeroPage";

function App() {
  const dispatch = useDispatch();
  const displayBoard = useSelector((state) => state.board.displayBoard);
  const showQuestionSelector = (state) => state.question.toggleModal; // this would be in a separate file in a selectors folder and imported in
  const showQuestion = useSelector(showQuestionSelector);
  const [showSelection, setShowSelection] = useState(false);

  const { isLoading, error, data } = useQuery('fetchCategories', fetchCategories);
  if (data) dispatch(setAllCategories(data));

  return (
    <div className="App">
      {!showSelection && <HeroPage setShowSelection={setShowSelection}/>}
      {displayBoard ? <BigBoard /> : <SelectionWrapper />}
      {showQuestion && <QuestionModal />}
    </div>
  );
}

export default App;

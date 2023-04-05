import "./App.scss";
import BigBoard from "./components/Board/BigBoard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchBoardData } from "./actions/boardActions";
import { setAvailableCategories } from "./components/Board/boardSlice";
import QuestionModal from "./components/QuestionModal/QuestionModal";
import SelectionWrapper from "./components/Selection/SelectionWrapper";
import { useQuery } from 'react-query';
import { useFetch, fetchCategories } from "./api/categories";

function App() {
  const dispatch = useDispatch();
  // const boardData = useSelector((state) => state.board.boardData);
  const displayBoard = useSelector((state) => state.board.displayBoard);
  const showQuestionSelector = (state) => state.question.toggleModal; // this would be in a separate file in a selectors folder and imported in
  const showQuestion = useSelector(showQuestionSelector);

  //* should this async code be put in a separate action folder?

  // this should also be moved to an api folder
  // useEffect(() => {
  //   const fetchCategories = async () => {
  //     const response = await fetch(
  //       "https://jservice.io/api/categories?count=50"
  //     );
  //     if (!response.ok) throw new Error("Couldn't fetch data from jservice");
  //     const data = await response.json();
  //     // you'd pass the fetched data to a parse function before dispatch
  //     // separate this to keep it concise and keep the room clean
  //     const fiveOrMoreClues = data
  //       .filter((d) => d.clues_count >= 5 && d.id)
  //       .slice(0, 25);
  //     dispatch(setAvailableCategories(fiveOrMoreClues));
  //   };
  //   fetchCategories();
  // }, []);


  const { isLoading, error, data } = useQuery('fetchCategories', fetchCategories);
  console.log(isLoading, data);
  if (data) dispatch(setAvailableCategories(data));

  return (
    <div className="App">
      {displayBoard ? <BigBoard /> : <SelectionWrapper />}
      {showQuestion && <QuestionModal />}
    </div>
  );
}

export default App;

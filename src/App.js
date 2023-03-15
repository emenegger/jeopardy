import logo from "./logo.svg";
import "./App.scss";
import BigBoard from "./components/Board/BigBoard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchBoardData } from "./actions/boardActions";
import { setAvailableCategories } from "./components/Board/boardSlice";
import Selection from "./components/Selection/Selection";
import QuestionModal from "./components/QuestionModal/QuestionModal";
import PlayersDisplay from "./components/Players/PlayersDisplay";

function App() {
  const dispatch = useDispatch();
  const boardData = useSelector((state) => state.board.boardData);
  const displayBoard = useSelector((state) => state.board.displayBoard);
  const showQuestion = useSelector((state) => state.question.toggleModal);

  //* should this async code be put in a separate action folder?

  useEffect(() => {
    const fetchCategories = async (i) => {
      const response = await fetch(
        "https://jservice.io/api/categories?count=50"
      );
      if (!response.ok) throw new Error("Couldn't fetch data from jservice");
      const data = await response.json();
      const fiveOrMoreClues = data
        .filter((d) => d.clues_count >= 5 && d.id)
        .slice(0, 25);
      dispatch(setAvailableCategories(fiveOrMoreClues));
    };
    fetchCategories();
  }, []);

  return (
    <div className="App">
      {displayBoard ? <BigBoard /> : <Selection />}
      {showQuestion && <QuestionModal />}
      <PlayersDisplay />
    </div>
  );
}

export default App;

import { useSelector, useDispatch } from "react-redux";
//* update this to make selection its own slice
import styles from "./styles.module.scss";
import CategoryList from "./CategoryList";
import { Link, redirect } from "react-router-dom";
import Pagination from "./Pagination";
import SelectedCategories from "./SelectedCategories";
import { useQuery } from "react-query";
import { fetchCategories, fetchCategoryDataById } from "../../api/categories";
import { setAllCategories, addBoardData } from "../Board/boardSlice";
import { useState } from "react";

// this is doing too much - goes against the single responsiblity principle

const Selection = () => {
  const boardData = useSelector((state) => state.board.boardData);
  const players = useSelector((state) => state.players);
  const [showCategories, setShowCategories] = useState(false);
  const [hasSelected, setHasSelected] = useState(false);
  const dispatch = useDispatch();

  const { isLoading, error, data } = useQuery(
    "fetchCategories",
    fetchCategories
  );

  if (data) {
    dispatch(setAllCategories(data));
  }

  const handleAutoCategories = async () => {
    setShowCategories(false);
    setHasSelected(true);
    for (let i = 0; i < 6; i++) {
      const i = Math.floor(Math.random() * data.length);
      const randomCategory = data[i];
      const response = await fetchCategoryDataById(randomCategory.id);
      dispatch(addBoardData(response));
    }
  };

  const handleChooseCategories = () => {
    setHasSelected(true);
    setShowCategories(true);
  };

  return isLoading ? (
    <h1>loading... </h1> // replace this with a loading component
  ) : (
    <div className={styles.wrapper}>
      <div className={styles.chooseMethod}>
        <button onClick={handleAutoCategories}>
          Generate Random Categories
        </button>
        <button onClick={handleChooseCategories}>Select Your Categories</button>
      </div>
      <div className={styles.selectionContainer}>
        {showCategories && (
          <>
            <CategoryList /> <Pagination />{" "}
          </>
        )}
        {hasSelected && <SelectedCategories />}
        <Link to="../board">
          <button
            disabled={
              boardData.length === 6 && players.length > 0 ? false : true
            } //* refactor this
          >
            Ready to Start?
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Selection;

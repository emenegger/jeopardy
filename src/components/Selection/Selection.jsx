import React from "react";
import { useSelector, useDispatch } from "react-redux";
//* update this to make selection its own slice
import styles from "./styles.module.scss";
import CategoryList from "./CategoryList";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import SelectedCategories from "./SelectedCategories";
import { useQuery } from "react-query";
import { fetchCategories } from "../../api/categories";
import { setAllCategories } from "../Board/boardSlice";

// this is doing too much - goes against the single responsiblity principle

const Selection = () => {
  const boardData = useSelector((state) => state.board.boardData);
  const players = useSelector((state) => state.players);

  const dispatch = useDispatch();
  const { isLoading, error, data } = useQuery(
    "fetchCategories",
    fetchCategories
  );
  if (data) {
    dispatch(setAllCategories(data));
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.selectionContainer}>
        {isLoading ? <h1>loading... </h1> : <CategoryList />}
        <Pagination />
        <SelectedCategories />
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

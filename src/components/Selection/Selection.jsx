import React, { forwardRef } from "react";
import { useSelector } from "react-redux";
//* update this to make selection its own slice
import styles from "./styles.module.scss";
import CategoryList from "./CategoryList";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import SelectedCategories from "./SelectedCategories";

// this is doing too much - goes against the single responsiblity principle

const Selection = forwardRef(function Selection(props, ref) {
  const boardData = useSelector((state) => state.board.boardData);
  const players = useSelector((state) => state.players);

  return (
    <div ref={ref} className={styles.selectionContainer}>
      <CategoryList />
      <Pagination />
      <SelectedCategories />
      <Link to="../board">
        <button
          disabled={boardData.length === 6 && players.length > 0 ? false : true} //* refactor this
        >
          Ready to Start?
        </button>
      </Link>
    </div>
  );
});

export default Selection;

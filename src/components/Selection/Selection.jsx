import React, { forwardRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleBoardDisplay,
  incrementCategoryPage,
  decrementCategoryPage,
} from "../Board/boardSlice"; //* update this to make selection its own slice
import styles from "./styles.module.scss";
// import { CATEGORIES_QUERY } from "./constants";
import CategoryListItem from "./CategoryListItem";
import {
  getCurrentCategories,
  getTotalPagesOfCategories,
} from "../../selectors/categories";

// this is doing too much - goes against the single responsiblity principle

const Selection = forwardRef(function Selection(props, ref) {
  const boardData = useSelector((state) => state.board.boardData);
  const pageNumber = useSelector((state) => state.board.categoryPage);
  const players = useSelector((state) => state.players);
  const dispatch = useDispatch();
  const currentCategories = useSelector(getCurrentCategories);
  const totalPages = useSelector(getTotalPagesOfCategories);

  return (
    <div ref={ref} className={styles.selectionContainer}>
      <div>
        <h2>Select Six Categories</h2>
        {currentCategories?.map((category) => (
          <CategoryListItem
            key={category.id}
            category={category}
            type={"Select"}
          />
        ))}
      </div>
      {/* this should be it's own component */}
      <h3>Page {pageNumber + 1}</h3>
      <button
        disabled={!pageNumber}
        onClick={() => dispatch(decrementCategoryPage())}
      >
        -
      </button>
      <button
        disabled={pageNumber - 1 === totalPages}
        onClick={() => dispatch(incrementCategoryPage())}
      >
        +
      </button>
      {/* this should be its own component */}
      <div>
        <h2>Your Categories</h2>
        {boardData.map((ele) => (
          <CategoryListItem key={ele.id} category={ele} type={"Remove"} />
        ))}
        <li>
          <b>Select {6 - boardData.length} more categories</b>
        </li>
      </div>

      <button
        disabled={boardData.length === 6 && players.length > 0 ? false : true} //* refactor this
        onClick={() => dispatch(toggleBoardDisplay())}
      >
        Ready to Start?
      </button>
    </div>
  );
});

export default Selection;

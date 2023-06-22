import React, { forwardRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleBoardDisplay,
  incrementCategoryPage
} from "../Board/boardSlice"; //* update this to make selection its own slice
import styles from "./styles.module.scss";
// import { CATEGORIES_QUERY } from "./constants";
import CategoryListItem from "./CategoryListItem";
import { getCurrentCategories } from "../../selectors/categories";

// this is doing too much - goes against the single responsiblity principle

const Selection = forwardRef(function Selection(props, ref) {
  const boardData = useSelector((state) => state.board.boardData);
  const pageNumber = useSelector((state) => state.board.categoryPage);
  const players = useSelector((state) => state.players);
  const dispatch = useDispatch();
  const currentCategories = useSelector(getCurrentCategories);
  console.log('curr cat', currentCategories)
  console.log('curr page', pageNumber)

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
        <h3>Page {pageNumber}</h3>
        <button onClick={() => dispatch(incrementCategoryPage())}>+</button>
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

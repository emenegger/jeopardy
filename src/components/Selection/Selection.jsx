import React, { forwardRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleBoardDisplay,
} from "../Board/boardSlice"; //* update this to make selection its own slice
import styles from "./styles.module.scss";
import { CATEGORIES_QUERY } from "./constants";
import CategoryListItem from "./CategoryListItem";

// this is doing too much - goes against the single responsiblity principle

const Selection = forwardRef(function Selection(props, ref) {
  const availableCategories = useSelector(
    (state) => state.board.availableCategories
  );
  const boardData = useSelector((state) => state.board.boardData);
  // const players = useSelector((state) => state.players.players);
  const players = useSelector((state) => state.players);

  const dispatch = useDispatch();

  return (
    <div ref={ref} className={styles.selectionContainer}>
     
        <div>
          <h2>Select Six Categories</h2>
          {availableCategories?.map((category) => (
            <CategoryListItem
              key={category.id}
              category={category}
              type={"Select"}
            />
          ))}
        </div>
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

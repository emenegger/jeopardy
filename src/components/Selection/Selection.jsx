import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addBoardData,
  removeBoardData,
  toggleBoardDisplay,
} from "../Board/boardSlice"; //* update this to make selection its own slice
import styles from "./styles.module.scss";
import { CATEGORIES_QUERY } from "./constants";
import CategoryButton from "../Button/Button";

// this is doing too much - goes against the single responsiblity principle

function Selection() {
  const availableCategories = useSelector(
    (state) => state.board.availableCategories
  );
  const boardData = useSelector((state) => state.board.boardData);
  // const players = useSelector((state) => state.players.players);
  const players = useSelector((state) => state.players);

  const dispatch = useDispatch();

  // dispatch action to set board and categories
  const addCategoryData = async (categoryData) => {
    // fetch the actual data based on the id
    const response = await fetch(`${CATEGORIES_QUERY}${categoryData.id}`);
    const data = await response.json();
    dispatch(addBoardData(data));
  };
  const removeCategoryData = (categoryData) => {
    dispatch(removeBoardData(categoryData));
  };

  return (
    <div>
      <main>
        <div>
          <h2>Select Six Categories</h2>
          {availableCategories?.map((category) => <CategoryButton key={category.id} category={category} type={'Select'} />)}
        </div>
        <div>
          <h2>Your Categories</h2>
            {boardData.map(ele => <CategoryButton key={ele.id} category={ele} type={'Remove'} />)}
            <li>
              <b>Select {6 - boardData.length} more categories</b>
            </li>
        </div>
      </main>
      <button
        disabled={boardData.length === 6 && players.length > 0 ? false : true} //* refactor this
        onClick={() => dispatch(toggleBoardDisplay())}
      >
        Ready to Start?
      </button>
    </div>
  );
}

export default Selection;

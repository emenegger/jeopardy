import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addBoardData,
  removeBoardData,
  toggleBoardDisplay,
} from "../Board/boardSlice"; //* update this to make selection its own slice
// import styles from "./styles.module.scss";
import { CATEGORIES_QUERY } from "./constants";

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
          <ul>
            {availableCategories?.map((category) => {
              return (
                <li key={category.id}>
                  {category.title}{" "}
                  <button onClick={() => addCategoryData(category)}>
                    Select
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <h2>Your Categories</h2>
          <ul>
            {boardData.map((ele) => (
              <li key={ele.id}>
                {ele.title}{" "}
                <button onClick={() => removeCategoryData(ele)}>Remove</button>{" "}
              </li>
            ))}
            <li>
              <b>Select {6 - boardData.length} more categories</b>
            </li>
          </ul>
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

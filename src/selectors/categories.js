import { createSelector } from "@reduxjs/toolkit";

export const selectAllCategories = (state) => state.categories.availableCategories;
export const selectPageNumber = (state) => state.categories.categoryPage;
export const selectBoardData = (state) => state.board.boardData;
export const selectNumAnswers = (state) => state.board.numAnswered;

const perPage = 15;

export const getPaginatedCategories = createSelector(
  selectAllCategories,
  selectPageNumber,
  (categories, pageNumber) => 
    categories.slice(pageNumber * perPage, pageNumber * perPage + perPage)
);

export const getTotalPagesOfCategories = createSelector(
  selectAllCategories,  
  (categories) =>{
    return Math.ceil(categories.length / perPage)
});

export const getIsDoubleJeopardy = createSelector(
  selectNumAnswers,
  (answers) => {
    return answers >= 3;
  }
)

export const getIsFinalJeopardy = createSelector(
  selectNumAnswers,
  (answers) => {
    return answers >= 6;
  }
)


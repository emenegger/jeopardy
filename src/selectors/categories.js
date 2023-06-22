import { createSelector } from "@reduxjs/toolkit";

const selectAllCategories = (state) => state.board.availableCategories;
const selectPageNumber = (state) => state.board.categoryPage;
export const getCurrentCategories = createSelector(
  selectAllCategories,
  selectPageNumber,
  (categories, pageNumber) => categories.slice(pageNumber * 15, pageNumber * 15 + 15)
);

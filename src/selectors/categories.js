import { createSelector } from "@reduxjs/toolkit";

const selectAllCategories = (state) => state.board.availableCategories;
const selectPageNumber = (state) => state.board.categoryPage;

const perPage = 15

export const getCurrentCategories = createSelector(
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
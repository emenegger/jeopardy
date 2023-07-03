import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  availableCategories: [],
  categoryPage: 0,
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setAllCategories: (state, action) => {
      state.availableCategories = action.payload;
    },
    incrementCategoryPage: (state) => {
      state.categoryPage = ++state.categoryPage;
    },
    decrementCategoryPage: (state) => {
      state.categoryPage = --state.categoryPage;
    },
  },
});

export const {
  setAllCategories,
  incrementCategoryPage,
  decrementCategoryPage,
} = categoriesSlice.actions;

export default categoriesSlice.reducer;

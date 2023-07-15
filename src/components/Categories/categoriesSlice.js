import { createSlice, current } from "@reduxjs/toolkit";

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
    addMoreCategories: (state, action) => {
      console.log(current(state.availableCategories));  
      state.availableCategories = [...state.availableCategories, ...action.payload]
    },
    removeAvailableCategory: (state, action) => {
      // this works, but its being reset by the
      state.availableCategories = state.availableCategories.filter(
        (cat) => cat.id !== action.payload.id
      );
    },
    addAvailableCategory: (state, action) => {
      const sorted = [
        ...state.availableCategories,
        action.payload,
      ].sort((a, b) => (a.title < b.title ? -1 : a.title > b.title ? 1 : 0));
      state.availableCategories = sorted;
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
  addMoreCategories,
  incrementCategoryPage,
  decrementCategoryPage,
  removeAvailableCategory,
  addAvailableCategory,
} = categoriesSlice.actions;

export default categoriesSlice.reducer;

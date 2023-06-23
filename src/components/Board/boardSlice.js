import { createSlice, current } from "@reduxjs/toolkit"; // add current here to see current state

const initialState = {
  boardData: [],
  availableCategories: [],
  displayBoard: false,
  categoryPage: 0,
};

export const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    setAllCategories: (state, action) => {
      state.availableCategories = action.payload;
    },
    addBoardData: (state, action) => {
      console.log("action", action.payload);
      if (state.boardData.length < 6)
        state.boardData = [...state.boardData, action.payload];
      const i = state.availableCategories.findIndex(
        (data) => data.id === action.payload.id
      );
      console.log(current(state.availableCategories[i]))
      state.availableCategories = [
        ...state.availableCategories.slice(0, i),
        ...state.availableCategories.slice(i + 1),
      ];
    },
    removeBoardData: (state, action) => {
      // console.log("removing", action.payload);
      const i = state.boardData.findIndex(
        (data) => data.id === action.payload.id
      );
      state.boardData = [
        ...state.boardData.slice(0, i),
        ...state.boardData.slice(i + 1),
      ];
      // you can't find it because it got deleted (ding dong)
      const j = state.availableCategories.findIndex(
        (data) => data.id === action.payload.id
      );
      console.log(j)
      state.availableCategories = [
        ...state.availableCategories.slice(0, j),
        action.payload,
        ...state.availableCategories.slice(j + 1),
      ];
    },
    toggleBoardDisplay: (state) => {
      state.displayBoard = !state.displayBoard;
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
  toggleBoardDisplay,
  setAllCategories,
  addBoardData,
  removeBoardData,
  incrementCategoryPage,
  decrementCategoryPage,
} = boardSlice.actions;

export default boardSlice.reducer;

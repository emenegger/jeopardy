import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  boardData: [],
  availableCategories: [],
  displayBoard: false,
};

export const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    setAvailableCategories: (state, action) => {
      state.availableCategories = action.payload;
      console.log(current(state));
    },
    addBoardData: (state, action) => {
      if (state.boardData.length < 6)
        state.boardData = [...state.boardData, action.payload];
      // console.log(current(state));
    },
    removeBoardData: (state, action) => {
      const i = state.boardData.findIndex(
        (data) => data.id === action.payload.id
      );
      state.boardData = [
        ...state.boardData.slice(0, i),
        ...state.boardData.slice(i + 1),
      ];
    },
    toggleBoardDisplay: (state) => {
      state.displayBoard = !state.displayBoard;
    }
  },
});

export const {
  toggleBoardDisplay,
  setAvailableCategories,
  addBoardData,
  removeBoardData,
} = boardSlice.actions;

export default boardSlice.reducer;

import { createSlice } from "@reduxjs/toolkit"; // add current here to see current state

const dailyDoubleIndices = [
  Math.ceil(Math.random(0, 1) * 5),
  Math.ceil(Math.random(0, 1) * 4),
];
console.log("dailyDoubleIndices", dailyDoubleIndices);

const initialState = {
  boardData: [],
  numAnswered: 0,
  displayBoard: false,
  dailyDouble: dailyDoubleIndices,
};

export const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    addBoardData: (state, action) => {
      if (state.boardData.length < 6)
        state.boardData = [...state.boardData, action.payload];
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
    incrementCountAnswered: (state) => {
      state.numAnswered = ++state.numAnswered;
    },
    toggleBoardDisplay: (state) => {
      state.displayBoard = !state.displayBoard;
    },
    resetBoardData: (state) => {
      state.boardData = [];
      state.numAnswered = 0;
    }
  },
});

export const {
  toggleBoardDisplay,
  addBoardData,
  removeBoardData,
  incrementCountAnswered,
  resetBoardData,
} = boardSlice.actions;

export default boardSlice.reducer;

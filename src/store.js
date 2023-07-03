import { configureStore } from "@reduxjs/toolkit";
import boardReducer from "./components/Board/boardSlice";
import questionReducer from "./components/QuestionModal/questionSlice";
import playersReducer from "./components/Players/playersSlice";
import categoriesReducer from "./components/Categories/categoriesSlice";

export const store = configureStore({
  reducer: {
    board: boardReducer,
    question: questionReducer,
    players: playersReducer,
    categories: categoriesReducer,
  },
});

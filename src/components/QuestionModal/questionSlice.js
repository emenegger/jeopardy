import { createSlice } from "@reduxjs/toolkit";

const questionSlice = createSlice({
  name: "question",
  initialState: {
    currentQuestion: {
      question: null,
      value: null,
      answer: null,
      category: null,
    },
    toggleModal: false,
    showDailyDouble: false
  },
  reducers: {
    setCurrentQuestion: (state, action) => {
      const { question, value, answer, category } = action.payload;
      state.currentQuestion = { question, value, answer, category };
    },
    showQuestion: (state) => {
      state.toggleModal = !state.toggleModal;
    },
    showDailyDouble: (state) => {
      state.showDailyDouble = !state.showDailyDouble;
    }
  },
});

export const { setCurrentQuestion, showQuestion, showDailyDouble } = questionSlice.actions;

export default questionSlice.reducer;

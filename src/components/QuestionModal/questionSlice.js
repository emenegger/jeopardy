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
  },
  reducers: {
    setCurrentQuestion: (state, action) => {
      const { question, value, answer, category } = action.payload;
      state.currentQuestion = { question, value, answer, category };
      console.log(state.currentQuestion);
    },
    showQuestion: (state) => {
      state.toggleModal = !state.toggleModal;
    },
  },
});

export const { setCurrentQuestion, showQuestion } = questionSlice.actions;

export default questionSlice.reducer;

import React from "react";
import styles from "./styles.module.scss";
import { useDispatch } from "react-redux";
import { setCurrentQuestion, showQuestion } from "../QuestionModal/questionSlice";

const Tile = ({ clueData, category }) => {
  // const { answer, question, value} = clueData;
  // console.log(answer, question, value)
  const dispatch = useDispatch();
  // use state locally to determine if this tile is 

  const handleClick = (e) => {
    e.preventDefault();
    console.log("handle click fired");
    // send a payload with the question and answer 
    // dispatch(setCurrentQuestion({question, value, answer, category}));
    dispatch(setCurrentQuestion({question: clueData.question, value: clueData.value, answer: clueData.answer, category}));
    dispatch(showQuestion())
    // dispatch to open a modal with the question
    // modal should contain 
  };

  return (
    <div onClick={handleClick}>
      <h2>${clueData.value}</h2>
    </div>
  );
};

export default Tile;

import React, { useState } from "react";
import styles from "./styles.module.scss";
import { useDispatch } from "react-redux";
import {
  setCurrentQuestion,
  showQuestion,
} from "../QuestionModal/questionSlice";

const Tile = ({ clueData, category }) => {
  // const {question, value, answer, category} = clueData; //* this doesn't destructure during some fetch calls, why?
  const dispatch = useDispatch();
  const [answered, setAnswered] = useState(false);
  console.log(clueData)

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(
      setCurrentQuestion({
        question: clueData?.question,
        value: clueData?.value,
        answer: clueData?.answer,
        category,
      })
    );
    dispatch(showQuestion());
    setAnswered(true);
  };
  if (answered) {
    return (
      <div className={styles.inactive}>
      </div>
    );
  } else {
    return (
      <div onClick={handleClick} className={styles.active}>
        <h2>${clueData?.value}</h2>
      </div>
    );
  }
};

export default Tile;

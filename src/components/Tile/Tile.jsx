import React, { useState } from "react";
import styles from "./styles.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentQuestion,
  showQuestion,
} from "../QuestionModal/questionSlice";

const Tile = ({ clueData, category, pos }) => {
  // const {question, value, answer, category} = clueData; //* this doesn't destructure during some fetch calls, why?
  const dispatch = useDispatch();
  const dailyDouble = useSelector(state =>  state.board.dailyDouble);
  const isDailyDouble = JSON.stringify(dailyDouble) === JSON.stringify(pos);
  const [answered, setAnswered] = useState(false);


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

  return answered ? (
    <div className={styles.inactive}>
    </div>
  ) : (
    <div onClick={handleClick} className={styles.active}>
      <h2>${clueData?.value}</h2>
    </div>
  )
};

export default Tile;

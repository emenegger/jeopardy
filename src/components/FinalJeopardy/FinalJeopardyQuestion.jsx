import React, { useEffect, useState } from "react";
import styles from "./FinalJeopardy.module.scss";
import PlayersDisplay from "../Players/PlayersDisplay";
// import AnswersInput from "./AnswersInput";
import Answers from "./Answers";

const FinalJeopardyQuestion = ({ data, bids }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [countdown, setCountdown] = useState(30);
  console.log(data);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (countdown === 0) setShowAnswer(true)
  },[countdown]);

  // we have access to the bids!!!!
  return (
    <div className={styles.container}>
      {countdown > 0 && <h1>submit your answer in {countdown} seconds</h1>}
      {showAnswer && <h1>{data.answer}</h1>}
      <div className={styles.clueHeaderWrapper}>
        <div className={styles.header}>{data?.category?.title}</div>
        <div className={styles.clue}>{data?.question}</div>
      </div>
      <Answers bids={bids} />
      <PlayersDisplay />
    </div>
  );
};

export default FinalJeopardyQuestion;

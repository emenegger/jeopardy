import React from "react";
import styles from "./FinalJeopardy.module.scss";
import PlayersDisplay from "../Players/PlayersDisplay";
import AnswersInput from "./AnswersInput";
import Answers from "./Answers";

const FinalJeopardyQuestion = ({ data, bids }) => {
  // we have access to the bids!!!!
  return (
    <div className={styles.container}>
      <div className={styles.clueHeaderWrapper}>
        <div className={styles.header}>{data?.category?.title}</div>
        <div className={styles.clue}>{data?.question}</div>
        {/* <div className={styles.clue}>{bids.map(bid => <p>{bid}</p>)}</div> */}
      </div>
      <Answers bids={bids} />
      <PlayersDisplay />
    </div>
  );
};

export default FinalJeopardyQuestion;

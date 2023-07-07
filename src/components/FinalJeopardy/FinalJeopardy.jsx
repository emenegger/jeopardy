import { useEffect, useState } from "react";
import { fetchFinalJeopardy } from "../../api/categories";
import styles from "./FinalJeopardy.module.scss";
import { useQuery } from "react-query";

const FinalJeopardy = () => {
  // const [finalClue, setFinalClue] = useState({})

  const { isLoading, error, data } = useQuery('fetchFinalJeoparydy', fetchFinalJeopardy);
  // const {category, answer, airdate, question} = data;

  return (
    <div className={styles.container}>
      <div className={styles.header}>{data?.category?.title}</div>
      <div className={styles.clue}>{data?.question}</div>
    </div>
  );
};

export default FinalJeopardy; 

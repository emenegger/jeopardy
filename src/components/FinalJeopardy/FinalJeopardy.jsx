import { useEffect, useState } from "react";
import { fetchFinalJeopardy } from "../../api/categories";
import styles from "./FinalJeopardy.module.scss";
import { useQuery } from "react-query";

const FinalJeopardy = () => {
  // const [finalClue, setFinalClue] = useState({})

  const { isLoading, error, data } = useQuery({
    queryKey: "fetchFinalJeoparydy",
    queryFn: fetchFinalJeopardy,
    enabled: false,
  });
  const { category, question } = data[0];
  // const {category, answer, airdate, question} = data;
  return (
    <div className={styles.container}>
      {!data ? (
        <h1>loading</h1>
      ) : (
        <div className={styles.clueHeaderWrapper}>
          <div className={styles.header}>{category?.title}</div>
          <div className={styles.clue}>{question}</div>{" "}
        </div>
      )}
    </div>
  );
};

export default FinalJeopardy;

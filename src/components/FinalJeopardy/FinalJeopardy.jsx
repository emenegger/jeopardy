import { fetchFinalJeopardy } from "../../api/categories";
import styles from "./FinalJeopardy.module.scss";
import { useQuery } from "react-query";
import PlayersDisplay from "../Players/PlayersDisplay";

const FinalJeopardy = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: "fetchFinalJeoparydy",
    queryFn: fetchFinalJeopardy,
    // enabled: false,
  });
  console.log(isLoading, error, data)
  return (
    <div className={styles.container}>
      {!data ? (
        <h1>loading</h1>
      ) : (
        <div className={styles.clueHeaderWrapper}>
          <div className={styles.header}>{data?.category?.title}</div>
          <div className={styles.clue}>{data?.question}</div>{" "}
        </div>
      )}
      <PlayersDisplay />
    </div>
  );
};


export default FinalJeopardy;

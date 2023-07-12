import styles from "./FinalJeopardy.module.scss";
import PlayersDisplay from "../Players/PlayersDisplay";
import FinalJeopardyBids from "./FinalJeopardyBids";

const FinalJeopardyCategory = ({
  data,
  setReadyForQuestion,
  setBids,
  bids,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.categoryContainer}>
        <h1 className={styles.categoryOnTV}>{data?.category?.title}</h1>
      </div>
      <FinalJeopardyBids setReadyForQuestion={setReadyForQuestion} setBids={setBids} bids={bids} />
      <PlayersDisplay />
    </div>
  );
};

export default FinalJeopardyCategory;

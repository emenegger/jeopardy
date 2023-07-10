import styles from "./FinalJeopardy.module.scss";
import PlayersDisplay from "../Players/PlayersDisplay";
import FinalJeopardyBids from "./FinalJeopardyBids";

const FinalJeopardyCategory = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.categoryContainer}>
        <h1 className={styles.categoryOnTV}>
          {data?.category?.title} 
        </h1>
      </div>
      <FinalJeopardyBids />
      <PlayersDisplay />
    </div>
  );
};

export default FinalJeopardyCategory;

import { useSelector } from "react-redux";
import styles from "./styles.module.scss";

const Wager = ({ handleSubmitWager, setWager, wager }) => {
  const showDailyDoubleSelector = (state) => state.question.showDailyDouble;
  const showDailyDouble = useSelector(showDailyDoubleSelector);

  return (
    <div className={`${styles.wagerContainer} ${styles['flip']}`}>
      <h1>What would you like to wager?</h1>
      <form className={styles.wagerForm}>
        <input
          type="text"
          value={wager}
          onChange={(e) => setWager(Number(e.target.value))}
        ></input>
        <button onClick={handleSubmitWager}>submit</button>
      </form>
    </div>
  );
};

export default Wager;

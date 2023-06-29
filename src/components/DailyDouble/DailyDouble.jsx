import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.scss";

const DailyDouble = () => {
  const question = useSelector((state) => state.question.currentQuestion);
  const players = useSelector((state) => state.players);
  const [showAnswer, setShowAnswer] = useState(false);
  const [wager, setWager] = useState(0);
  const [showQuestion, setShowQuestion] = useState(false);
  const dispatch = useDispatch();
  console.log(wager, showQuestion);

  return (
    <div className={styles.container}>
      <div>
        <h1>What would you like to wager?</h1>
        <form>
          <input
            type="text"
            value={wager}
            onChange={(e) => setWager(e.target.value)}
          ></input>
        </form>
        <button onClick={(e) => setShowAnswer((showQuestion) => !showQuestion)}>
          submit
        </button>
      </div>
    </div>
  );
};

export default DailyDouble;

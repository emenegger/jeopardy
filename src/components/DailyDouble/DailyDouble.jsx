import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import QuestionModal from "../QuestionModal/QuestionModal";
import styles from "./styles.module.scss";
import Wager from "./Wager";

const DailyDouble = () => {
  const players = useSelector((state) => state.players);
  const [wager, setWager] = useState(0);
  const [showQuestion, setShowQuestion] = useState(false);

  const handleSubmitWager = () =>
    setShowQuestion((prevShowQuestion) => !prevShowQuestion);

  return (
    <div className={`${styles.container} ${styles['flip-animation']}`}>
      {showQuestion ? (
        <QuestionModal wager={wager}/>
      ) : (
        <Wager
          handleSubmitWager={handleSubmitWager}
          setWager={setWager}
          wager={wager}
        />
      )}
    </div>
  );
};

export default DailyDouble;

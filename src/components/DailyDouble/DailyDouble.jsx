import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import QuestionModal from "../QuestionModal/QuestionModal";
import styles from "./styles.module.scss";
import Wager from "./Wager";

const DailyDouble = () => {
  const question = useSelector((state) => state.question.currentQuestion);
  const players = useSelector((state) => state.players);
  const [showAnswer, setShowAnswer] = useState(false);
  const [wager, setWager] = useState(0);
  const [showQuestion, setShowQuestion] = useState(false);
  const dispatch = useDispatch();

  const handleSubmitWager = () =>
    setShowQuestion((prevShowQuestion) => !prevShowQuestion);

  return (
    <div className={styles.container}>
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

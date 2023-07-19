import { useSelector } from "react-redux";
import styles from "./Answers.module.scss";

const Answers = () => {
  const boardData = useSelector((state) => state.board.boardData);
  const currentQuestion = useSelector(
    (state) => state.question.currentQuestion
  );
  console.log('## currentQuestion', currentQuestion )
  console.log('## boarddata', boardData )
  return (
    <div className={styles.wrapper}>
      <div className={styles.answer}>{currentQuestion.answer}</div>
    </div>
  );
};

export default Answers;

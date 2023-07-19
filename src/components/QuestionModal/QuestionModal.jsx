import React, { useState } from "react";
import styles from "./Question.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { showQuestion, showDailyDouble } from "./questionSlice";
import CloseIcon from "@mui/icons-material/Close";
// import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import PointsActions from "./PointsActions";

const QuestionModal = ({ wager }) => {
  const question = useSelector((state) => state.question.currentQuestion);
  const [showAnswer, setShowAnswer] = useState(false);
  const dispatch = useDispatch();

  const value = wager || question.value;
  const handleClose = () =>
    wager ? dispatch(showDailyDouble()) : dispatch(showQuestion());

  return (
    <>
      <div className={styles.darkBG} />
      <div className={styles.centered}> 
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>{question.category} <span style={{textTransform: 'none'}}>for</span> {question.value}</h5>
          <button className={styles.closeBtn} onClick={handleClose}>
            <CloseIcon />
          </button>
          </div>
          <div className={styles.modalContent}>{question.question}</div>
          <div className={styles.answer}>
            {showAnswer ? (
              <h2>{question.answer}</h2>
            ) : (
              <VisibilityIcon onClick={() => setShowAnswer(!showAnswer)} />
            )}
          </div>
          <PointsActions value={value}/>
        </div>
      </div>
    </>
  );
};

export default QuestionModal;

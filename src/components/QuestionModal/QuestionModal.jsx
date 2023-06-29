import React, { useState } from "react";
import styles from "./styles.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { showQuestion, showDailyDouble } from "./questionSlice";
// import { addPointsToPlayer } from "../Players/playersSlice";
import AddPointsButton from "./AddPointsButton";

const QuestionModal = ({wager}) => {
  const question = useSelector((state) => state.question.currentQuestion);
  const players = useSelector((state) => state.players);
  const [showAnswer, setShowAnswer] = useState(false);
  // const [showAddedPoints, setShowAddedPoints] = useState(false)
  const dispatch = useDispatch();

  const value = wager || question.value;
  console.log(value)
  console.log(typeof value)
  const handleClose = () => wager ? dispatch(showDailyDouble()) : showQuestion()

  return (
    <>
      <div className={styles.darkBG} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>{question.category}</h5>
          </div>
          <button
            className={styles.closeBtn}
            // onClick={() => dispatch(showQuestion())}
            onClick={handleClose}
          >
            {" "}
            close
          </button>
          <div className={styles.modalContent}>{question.question}</div>
          <div className={styles.answer}>
            {showAnswer ? (
              <h2>{question.answer}</h2>
            ) : (
              <button onClick={() => setShowAnswer(!showAnswer)}>
                Reveal Answer
              </button>
            )}
          </div>
          <div className={styles.modalActions}>
            <h2>Add {value} points to:</h2>
            <div className={styles.actionsContainer}>
              {players.map((player) => {
                return (
                  <AddPointsButton
                    id={player.id}
                    name={player.name}
                    value={value}
                    key={player.id}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestionModal;

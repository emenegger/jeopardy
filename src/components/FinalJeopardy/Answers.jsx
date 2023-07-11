import { useSelector } from "react-redux";
import styles from "./FinalJeopardy.module.scss";
import { useState } from "react";
import AnswersInput from "./AnswersInput";

const Answers = () => {
  const data = useSelector((state) => state.players);
  // test data so you don't have to start the whole app over when testing
  const test = [
    { name: "Evan", points: 300, id: 1, answer: "" },
    { name: "Frank", points: 700, id: 2, answer: "" },
    { name: "John", points: 700, id: 3, answer: "" },
  ];
  const players = data.length > 0 ? data : test;

  const [answers, setAnswers] = useState(players);

  return (
    <div className={styles.bidsContainer}>
      <div className={styles.bidsForm}>
        {players.map((player, i) => {
          const handleChange = (e) => {
            console.log(e.target.value);
            setAnswers([
              ...answers.slice(0, i),
              Number(e.target.value),
              ...answers.slice(i + 1),
            ]);
          };
          const handleSubmit = (e) => {
            e.preventDefault();
          };
          return (
            <AnswersInput
              player={player}
              key={player.id}
              i={i}
              handleChange={handleChange}
              state={answers[i]}
              handleSubmit={handleSubmit}
              button={true}
            />
          );
        })}
      </div>
      {/* <button onClick={() => setReadyForQuestion(true)}>
        Go to Final Jeopardy Clue
      </button> */}
    </div>
  );
};

export default Answers;

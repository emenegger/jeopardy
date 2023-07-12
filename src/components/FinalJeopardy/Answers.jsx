import { useSelector, useDispatch } from "react-redux";
import styles from "./FinalJeopardy.module.scss";
import { useEffect, useState } from "react";
import AnswersInput from "./AnswersInput";
import { addPlayer } from "../Players/playersSlice";

const Answers = ({bids}) => {
  const players = useSelector((state) => state.players);
  const dispatch = useDispatch();
  // test data so you don't have to start the whole app over when testing
  const test = [
    { name: "Evan", points: 300, id: 1 },
    { name: "Frank", points: 700, id: 2 },
    { name: "John", points: 700, id: 3 },
  ];

  if (players.length === 0 && !players.includes(test[0])) {
    dispatch(addPlayer(test[0]));
    dispatch(addPlayer(test[1]));
  }

  const [answers, setAnswers] = useState(["", "", ""]);
  console.log(bids)

  return (
    <div className={styles.bidsContainer}>
      <div className={styles.bidsForm}>
        {players.map((player, i) => {
          const handleChange = (e) => {
            console.log(e.target.value);
            setAnswers([
              ...answers.slice(0, i),
              e.target.value,
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
              bid={bids[i]}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Answers;

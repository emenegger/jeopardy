import { useDispatch, useSelector } from "react-redux";
import styles from "./FinalJeopardy.module.scss";
import BidForm from "./BidForm";
import { useState } from "react";
import AnswersInput from "./AnswersInput";
import { addPlayer } from "../Players/playersSlice";
// import { Link } from "react-router-dom";

const FinalJeopardyBids = ({ setReadyForQuestion, setBids, bids }) => {
  const players = useSelector((state) => state.players);

  // const [bids, setBids] = useState(initState);
  console.log(bids)

  return (
    <div className={styles.bidsContainer}>
      <div className={styles.bidsForm}>
        {bids && players.map((player, i) => {
          const handleChange = (e) => {
            console.log(e.target.value);
            setBids([
              ...bids.slice(0, i),
              Number(e.target.value),
              ...bids.slice(i + 1),
            ]);
          };
          return (
            <AnswersInput
              player={player}
              type={"category"}
              handleChange={handleChange}
              state={bids[i]}
              handleSubmit={() => {}}
            />
          );
        })}
      </div>
      <button onClick={() => setReadyForQuestion(true)}>
        Go to Final Jeopardy Clue
      </button>
    </div>
  );
};

export default FinalJeopardyBids;

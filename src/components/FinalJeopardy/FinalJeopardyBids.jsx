import { useSelector } from "react-redux";
import styles from "./FinalJeopardy.module.scss";
import BidForm from "./BidForm";

const FinalJeopardyBids = () => {
  // const players = useSelector(state => state.players);
  // input forms for each player
  // set the bids in local state?
  const players = [
    { name: "Evan", points: 300, id: 1 },
    { name: "Frank", points: 700, id: 2 },
    { name: "John", points: 700, id: 3 },
  ];

  return (
    <div className={styles.bidsContainer}>
      <div className={styles.bidsForm}>
      {players.map((player) => (
        <BidForm player={player} key={player.id} />
      ))}
      </div>
      <button>Go to Final Jeopardy Clue</button>
    </div>
  );
};

export default FinalJeopardyBids;

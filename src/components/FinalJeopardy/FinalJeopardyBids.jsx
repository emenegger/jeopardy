import { useSelector } from "react-redux";
import styles from "./FinalJeopardy.module.scss";
import BidForm from "./BidForm";
import { useState } from "react";

const FinalJeopardyBids = () => {
  const data = useSelector((state) => state.players);
  // test data so you don't have to start the whole app over when testing
  const test = [
    { name: "Evan", points: 300, id: 1 },
    { name: "Frank", points: 700, id: 2 },
    { name: "John", points: 700, id: 3 },
  ];
  const players = data.length > 0 ? data : test;
  
  const initState = Array(Number(players.length)).fill(0);
  const [bids, setBids] = useState(initState);

  return (
    <div className={styles.bidsContainer}>
      <div className={styles.bidsForm}>
        {players.map((player, i) => (
          <BidForm
            player={player}
            key={player.id}
            i={i}
            setBids={setBids}
            bids={bids}
          />
        ))}
      </div>
      <button>Go to Final Jeopardy Clue</button>
    </div>
  );
};

export default FinalJeopardyBids;

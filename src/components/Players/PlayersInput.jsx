import React, { useState } from "react";
import PlayerForm from "./PlayerForm";
import styles from "./styles.module.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const PlayersSelection = () => {
  const [numPlayers, setNumPlayers] = useState([]);
  const players = useSelector((state) => state.players);
  const disabledButton =
    players.length > 0 && players.length === numPlayers.length;

  return (
    <div className={styles.wrapper}>
      <div className={styles.playerContainer}>
        <h2>
          Choose Number of Players: <b>{numPlayers.length}</b>
        </h2>
        <select
          name="players"
          id="players-select"
          onChange={(e) => setNumPlayers(Array(Number(e.target.value)).fill(1))}
        >
          <option value={0}>Select the number of players</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
        </select>
        <div>
          <form>
            {numPlayers &&
              numPlayers.map((player, i) => {
                return <PlayerForm key={i} playerNum={i + 1} />;
              })}
            <Link to={"../category-selection"}>
              <button disabled={!disabledButton}>Choose Categories</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PlayersSelection;

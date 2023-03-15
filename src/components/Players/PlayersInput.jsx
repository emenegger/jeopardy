import React, { useState } from "react";
import PlayerForm from "./PlayerForm";
import styles from './styles.module.scss'

const PlayersSelection = () => {
  const [numPlayers, setNumPlayers] = useState([]);

  return (
    <>
      <div>
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
              {/* <button>submit</button> */}
          </form>
        </div>
      </div>
    </>
  );
};

export default PlayersSelection;

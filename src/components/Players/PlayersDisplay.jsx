import React from "react";
import { useSelector } from "react-redux";
import styles from "./Players.module.scss";

const PlayersDisplay = () => {
  const players = useSelector((state) => state.players);
  console.log(players);

  return (
    <div className={styles.playerTable}>
      <table>
        <thead>
          <tr className={styles.points}>
            {players &&
              players.map((player) => (
                <th key={player.id}>${player.points}</th>
              ))}
          </tr>
        </thead>
        <tbody>
          <tr className={styles.playerName}>
            {players &&
              players.map((player) => <td key={player.id}>{player.name}</td>)}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PlayersDisplay;

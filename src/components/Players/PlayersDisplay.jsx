import React from "react";
import { useSelector } from "react-redux";
import styles from "./styles.module.scss";

const PlayersDisplay = () => {
  const players = useSelector((state) => state.players);

  return (
    <div className={styles.playerTable}>
      {/* <h1>Player Points</h1> */}
      <table>
        <thead>
        <tr className={styles.points}>
          {players &&
            players.map((player) => {
              return <th key={player.id}>${player.points}</th>;
            })}
        </tr>
        </thead>
        <tbody>
        <tr className={styles.playerName}>
          {players &&
            players.map((player) => {
              return <td key={player.id}>{player.name}</td>;
            })}
        </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PlayersDisplay;

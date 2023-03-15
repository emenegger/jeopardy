import React from "react";
import { useSelector } from "react-redux";
import styles from "./styles.module.scss";

const PlayersDisplay = () => {
  const players = useSelector((state) => state.players.players);

  return (
    <div className={styles.playerTable}>
      <h1>Player Points</h1>
      <table>
        <thead>
        <tr>
          {players &&
            players.map((player) => {
              return <th key={player.id}>{player.name}</th>;
            })}
        </tr>
        </thead>
        <tbody>
        <tr>
          {players &&
            players.map((player) => {
              return <td key={player.id}>{player.points}</td>;
            })}
        </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PlayersDisplay;

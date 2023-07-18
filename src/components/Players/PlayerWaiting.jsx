import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import io from "socket.io-client";
import { addPlayer } from "./playersSlice";

import styles from "./Players.module.scss";

const socket = io.connect("http://localhost:5001");

const PlayerWaiting = () => {
  const players = useSelector((state) => state.players);
  const dispatch = useDispatch();
  console.log("##players", players);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    console.log("## useEffecting");
    socket.on("receive_user", (playerData) => {
      console.log("## playerData", playerData);
      // setSocketData(data);
      dispatch(addPlayer(playerData));
    });
  }, [socket]);

  return (
    <>
      <div className={styles.playerSelect}>
        <h2>Welcome to Jeopardy!</h2>
        <h3>Go to http://192.168.0.64:3000/user to join</h3>
      </div>
      <div className={styles.playerSelect}>
        <h2>Players</h2>
        <div className={styles.playerNames}>
          {players.map((player) => (
            <p>{player.name}</p>
          ))}
        </div>
        <Link to={"../category-selection"}>
          <button className={styles.goToCategoryBtn}>Ready? Start Game</button>
        </Link>
      </div>
    </>
  );
};

export default PlayerWaiting;

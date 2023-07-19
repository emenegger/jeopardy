import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import io from "socket.io-client";
import { addPlayer } from "./playersSlice";

import styles from "./Players.module.scss";
import { setGameToReady } from "../Board/boardSlice";
import { ipAddress, port } from "../../public/constants";

// const socket = io.connect("http://localhost:5001");
const socket = io.connect(`${ipAddress}${port}`);

const PlayerWaiting = () => {
  const players = useSelector((state) => state.players);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log("##players", players);

  const handleSubmit = () => {
    console.log("##clicked");
    dispatch(setGameToReady(true));
    socket.emit('setting_game_to_ready', { ready: true });
    navigate("../category-selection");
  };

  useEffect(() => {
    socket.on("receive_user", (playerData) => {
      console.log("## playerData", playerData);
      // setSocketData(data);
      dispatch(addPlayer(playerData));
    });
  }, [socket, dispatch]);

  return (
    <>
      <div className={styles.playerSelect}>
        <h2>Welcome to Jeopardy!</h2>
        <h3>Go to {ipAddress}3000/user to join</h3>
      </div>
      <div className={styles.playerSelect}>
        <h2>Players</h2>
        <div className={styles.playerNames}>
          {players.map((player) => (
            <p>{player.name}</p>
          ))}
        </div>
        <button className={styles.goToCategoryBtn} onClick={handleSubmit}>
          Ready? Start Game
        </button>
      </div>
    </>
  );
};

export default PlayerWaiting;

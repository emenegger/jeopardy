import React, { useEffect, useState } from "react";
import UserSignUp from "./UserSignUp";
import NavBar from "../NavBar/NavBar";
import Buzzer from "./Buzzer";
import { useDispatch, useSelector } from "react-redux";
import io from "socket.io-client";
import styles from "./User.module.scss";
import { setGameToReady } from "../Board/boardSlice";

const socket = io.connect("http://localhost:5001");

const User = () => {
  const players = useSelector((state) => state.players);
  const gameReady = useSelector((state) => state.board.playersReady);
  const [showInput, setShowInput] = useState(true);
  const [localPlayer, setLocalPlayer] = useState({});
  const dispatch = useDispatch();

  console.log("## localPlayer", localPlayer);
  console.log("## players", players);

  useEffect(() => {
    socket.on("game_ready", (data) => {
      dispatch(setGameToReady(data));
    });
  }, [socket, dispatch]);

  return (
    <div className={styles.userContainer}>
      <NavBar isUser={true} />
      <div>
        {players.map((player) => (
          <p>
            {player.name} {player.id}
          </p>
        ))}
      </div>
      {showInput ? (
        <UserSignUp
          setShowInput={setShowInput}
          setLocalPlayer={setLocalPlayer}
        />
      ) : gameReady ? (
        <Buzzer localPlayer={localPlayer} />
      ) : (
        <h3>waiting for host to start game...</h3>
      )}
      {/* {gameReady && <Buzzer localPlayer={localPlayer}/>} */}
    </div>
  );
};

export default User;

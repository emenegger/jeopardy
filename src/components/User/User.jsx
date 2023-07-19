import React, { useEffect, useState } from "react";
import UserSignUp from "./UserSignUp";
import NavBar from "../NavBar/NavBar";
import Buzzer from "./Buzzer";
import { useDispatch, useSelector } from "react-redux";
import io from "socket.io-client";
import styles from "./User.module.scss";
import { setGameToReady } from "../Board/boardSlice";
import { ipAddress, port } from "../../public/constants";

const socket = io.connect(`${ipAddress}${port}`);

const User = () => {
  const gameReady = useSelector((state) => state.board.playersReady);
  const [showInput, setShowInput] = useState(true);
  const [localPlayer, setLocalPlayer] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    socket.on("game_ready", (data) => {
      dispatch(setGameToReady(data));
    });
  }, [socket, dispatch]);

  return (
    <div className={styles.userContainer}>
      <NavBar isUser={true} />
      {showInput ? (
        <UserSignUp
          setShowInput={setShowInput}
          setLocalPlayer={setLocalPlayer}
        />
      ) : gameReady ? (
        <Buzzer localPlayer={localPlayer} />
      ) : (
        <h3>Welcome {localPlayer?.name}! <br/> Waiting for host to start game...</h3>
      )}
      {/* {gameReady && <Buzzer localPlayer={localPlayer}/>} */}
    </div>
  );
};

export default User;

import React, { useState } from "react";
import { useSelector } from "react-redux";

import PlayerForm from "./PlayerForm";
import NavBar from "../NavBar/NavBar";
// import Button from "../Button/Button";
// import EnterPlayer from "./EnterPlayer";

import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import classNames from "classnames";

import styles from "./Players.module.scss";
import PlayerInput from "./PlayerInput";
import PlayerWaiting from "./PlayerWaiting";

const PlayersSelection = () => {
  const [numPlayers, setNumPlayers] = useState([]);
  const players = useSelector((state) => state.players);
  const disabledButton =
    players.length > 0 && players.length === numPlayers.length;

  const optionValues = ["Select the number of players", 1, 2, 3, 4, 5, 6];

  // console.log(disabledButton);

  return (
    <div className={styles.wrapper}>
      <div className={styles.playerContainer}>
      <NavBar />
      {/* <PlayerInput /> */}
      <PlayerWaiting />
      </div>
    </div>
  );
};

export default PlayersSelection;

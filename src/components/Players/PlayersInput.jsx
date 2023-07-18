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

const PlayersSelection = () => {
  const [numPlayers, setNumPlayers] = useState([]);
  const players = useSelector((state) => state.players);
  const disabledButton =
    players.length > 0 && players.length === numPlayers.length;

  const optionValues = ["Select the number of players", 1, 2, 3, 4, 5, 6];

  // console.log(disabledButton);

  return (
    <div className={styles.wrapper}>
      <NavBar />
      <div className={styles.playerContainer}>
        <div className={styles.playerSelect}>
          <h2>Enter your Players</h2>
          <h4>
            Number of Players: <b>{numPlayers.length}</b>
          </h4>
          <select
            name="players"
            id="players-select"
            onChange={(e) =>
              setNumPlayers(Array(Number(e.target.value)).fill(1))
            }
          >
            {optionValues.map((option, i) => (
              <option value={i} key={uuidv4()}>
                {option}
              </option>
            ))}
          </select>
          <form>
            {numPlayers &&
              numPlayers.map((player, i) => {
                return <PlayerForm key={i} playerNum={i + 1} />;
              })}
          </form>
          <Link to={disabledButton && "../category-selection"}>
            <button
              disabled={!disabledButton}
              className={classNames(styles.goToCategoryBtn, {
                [styles.disabled]: !disabledButton
              })}
            >
              Choose Categories
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlayersSelection;

import React, { useState } from "react";
import PlayerForm from "./PlayerForm";
import styles from "./Players.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import classNames from "classnames";
import { v4 as uuidv4 } from 'uuid';

// import { toggleReady } from "./playersSlice";

const PlayersSelection = () => {
  const [numPlayers, setNumPlayers] = useState([]);
  const dispatch = useDispatch()
  const players = useSelector((state) => state.players);
  const disabledButton =
    players.length > 0 && players.length === numPlayers.length;

  const optionValues = ['Select the number of players', 1, 2, 3, 4, 5, 6]

  return (
    <div className={styles.wrapper}>
    <NavBar />
      <div className={styles.playerContainer}>
        <h2>
          Choose Number of Players: <b>{numPlayers.length}</b>
        </h2>
        <select
          name="players"
          id="players-select"
          onChange={(e) => setNumPlayers(Array(Number(e.target.value)).fill(1))}
        >
          {optionValues.map((option, i) => <option value={i} key={uuidv4()}>{option}</option>)}
        </select>
        {/* <div className={classNames(styles.playerForm, {
          [styles.hidden]: numPlayers.length > 1
        })}> */}
        <div>
          <form>
            {numPlayers &&
              numPlayers.map((player, i) => {
                return <PlayerForm key={i} playerNum={i + 1} />;
              })}
            <Link to={"../category-selection"}>
              <button disabled={!disabledButton}>Choose Categories</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PlayersSelection;

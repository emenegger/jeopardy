import React from "react";
import { useSelector } from "react-redux";
import Column from "../Column/Column";
import NavBar from "../NavBar/NavBar";
import PlayersDisplay from "../Players/PlayersDisplay";
import styles from './styles.module.scss'

const BigBoard = () => {
  const boardData = useSelector(state => state.board.boardData);

  return (
    <div className={styles.container}>
      <NavBar/>
      <div className={styles.board}>
        {boardData.length && boardData.map((col, i) => {
          return <Column columnData={col} key={`column${i}`} column={i}/>;
        })}
      </div>
      <PlayersDisplay />
    </div>
  );
};

export default BigBoard;

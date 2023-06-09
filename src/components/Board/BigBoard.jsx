import React from "react";
import { useSelector } from "react-redux";
import Column from "../Column/Column";
import PlayersDisplay from "../Players/PlayersDisplay";
import styles from './styles.module.scss'

const BigBoard = () => {
  const boardData = useSelector(state => state.board.boardData);

  return (
    <div className={styles.board}>
      <h1>Jeopardy!</h1>
      <ul>
        {boardData.length && boardData.map((col, i) => {
          return <Column columnData={col} key={`column${i}`}/>;
        })}
      </ul>
      <PlayersDisplay />
    </div>
  );
};

export default BigBoard;

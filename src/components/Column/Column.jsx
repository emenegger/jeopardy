import React from "react";
import Tile from "../Tile/Tile";
import styles from "./styles.module.scss";

const Column = ({ columnData }) => {
  const clueWithValue = (val) => columnData.clues.find(clue => clue.value === val)
  

  return (
    <div className={styles.column}>
      <h4>{columnData.title}</h4>
      <Tile clueData={clueWithValue(100)} key={clueWithValue(100)?.id} category={columnData.title} />
      <Tile clueData={clueWithValue(200)} key={clueWithValue(200)?.id} category={columnData.title} />
      <Tile clueData={clueWithValue(300)} key={clueWithValue(300)?.id} category={columnData.title} />
      <Tile clueData={clueWithValue(400)} key={clueWithValue(400)?.id} category={columnData.title} />
      <Tile clueData={clueWithValue(500)} key={clueWithValue(500)?.id} category={columnData.title} />
    </div>
  );
};

export default Column;

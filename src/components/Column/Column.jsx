import React from "react";
import Tile from "../Tile/Tile";
import styles from "./styles.module.scss";

const Column = ({ columnData, column }) => {
  return (
    <div className={styles.column}>
      <div className={styles.header}>
        <h4> {columnData.title}</h4>
      </div>
      {columnData.clues.map((col, row) => {
        return (
          <Tile
            clueData={col}
            key={col.id}
            category={columnData.title}
            pos={[column, row]}
          />
        );
      })}
    </div>
  );
};

export default Column;

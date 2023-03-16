import React from "react";
import PlayersSelection from "../Players/PlayersInput";
import Selection from "./Selection";
import styles from "./styles.module.scss";

const SelectionWrapper = () => {
  return (
      <div className={styles.wrapper}>
        <PlayersSelection />
        <Selection />
      </div> 
    )
}

export default SelectionWrapper;
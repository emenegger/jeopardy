import React, { useRef } from "react";
import PlayersSelection from "../Players/PlayersInput";
// import Selection from "./Selection";
import styles from "./styles.module.scss";

const SelectionWrapper = () => {
  const selectionRef = useRef(null);
  return (
    <div className={styles.wrapper}>
      <PlayersSelection/>
      {/* <Selection ref={selectionRef}/> */}
    </div>
  );
};

export default SelectionWrapper;

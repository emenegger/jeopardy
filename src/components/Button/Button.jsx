import React from "react";
import styles from "./styles.module.scss";

const Button = ({ id, clickHandler, type, className, label }) => {
  return (
    <button onClick={clickHandler} className={styles[className]}>
      {label}
    </button>
  );
};

export default Button;

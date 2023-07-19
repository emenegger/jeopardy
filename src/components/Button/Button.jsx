import React from "react";
import styles from "./Button.module.scss";

const Button = ({ clickHandler, type, className, label }) => {
  return (
    <button onClick={clickHandler} className={styles[className]}>
      {label}
    </button>
  );
};

export default Button;

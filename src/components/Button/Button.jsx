import React from "react";
import styles from "./Button.module.scss";
import classNames from "classnames";

const Button = ({ clickHandler, type, className, label }) => {
  return (
    <button onClick={clickHandler} className={styles[className]}>
      {label}
    </button>
  );
};

export default Button;

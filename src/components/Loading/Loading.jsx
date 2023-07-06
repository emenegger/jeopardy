import React from "react";
import styles from "./Loading.module.scss";

const Loading = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.circle}> loading categories  </div>
    </div>
  );
};

export default Loading;

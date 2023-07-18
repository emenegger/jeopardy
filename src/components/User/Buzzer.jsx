import styles from "./User.module.scss";

const Buzzer = () => {
  return (
    <div className={styles.buttonContainer}>
      <div className={styles.button}>
        <div className={styles.button__content}>
          <p className={styles.text__content}>Buzz</p>
        </div>
      </div>
    </div>
  );
};

export default Buzzer;

/*
      <div className={styles.buzzer}>
        // <div className={styles.buzzerInner}></div>
      </div>
*/
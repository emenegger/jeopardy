import styles from "./FinalJeopardy.module.scss";

const FinalJeopardy = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>Category</div>
      <div className={styles.clue}>this would be your final jeopardy clue</div>
    </div>
  );
};

export default FinalJeopardy; 

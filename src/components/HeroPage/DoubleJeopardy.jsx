import styles from "./styles.module.scss";

const DoubleJeopardy = () => {

  const handleClick = () => {
    
  }

  return (
    <div className={styles.container}>
      <div className={styles.ddContainer}>
       <h1>Are you ready for Double Jeopardy?!</h1>
        <button onClick={handleClick}>
          Yes!
        </button>
      </div>
    </div>
  );
};

export default DoubleJeopardy;

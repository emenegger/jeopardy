import io from "socket.io-client";

import styles from "./User.module.scss";

const socket = io.connect("http://localhost:5001");

const Buzzer = ({ localPlayer }) => {
  const handleClick = () => {
    console.log("## clicking");
    // emit to the server the user's id and time
    socket.emit("buzzing", { ...localPlayer, buzzTime: Date.now() });
  };

  return (
    <div className={styles.buttonContainer}>
      <div className={styles.button} onClick={handleClick}>
        <div className={styles.button__content}>
          <p className={styles.text__content}>Buzz</p>
        </div>
      </div>
    </div>
  );
};

export default Buzzer;

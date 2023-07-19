import styles from "./Question.module.scss";
import { useSelector } from "react-redux";
import { Divider } from "@mui/material";
import PointsBtnWrapper from "./PointsBtnWrapper";
import { useState } from "react";


const PointsActions = ({ value }) => {
  const players = useSelector((state) => state.players);
  const [queue, setQueue] = useState([]);
  console.log('## queue', queue)

  return (
    <div className={styles.modalActions}>
      <Divider /> 
      <div className={styles.actionsContainer}>
        {players.map((player) => {
          const { id, name } = player;
          return (
            <PointsBtnWrapper 
              value={value}
              id={id}
              name={name}
              key={id}
              queue={queue}
              setQueue={setQueue}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PointsActions;

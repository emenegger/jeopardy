import styles from "./Question.module.scss";
import PointsButton from "./PointsButton";
import { useSelector } from "react-redux";
import { Divider } from "@mui/material";
import { useState } from "react";

const PointsActions = ({ value }) => {
  const players = useSelector((state) => state.players);
  const [showDiv, setShowDiv] = useState(false);

  return (
    <div className={styles.modalActions}>
      <Divider /> 
      <div className={styles.actionsContainer}>
        {players.map((player, i) => {
          const { id, name } = player;
          return (
            <div>
              {showDiv && <div className={styles.valuePop}>+{value}</div>}
              <p>{player.name}</p>
              <div className={styles.buttons}>
                <div className={styles.ptsBtn}>
                  <PointsButton
                    type={"increment"}
                    id={id}
                    name={name}
                    value={value}
                    key={id}
                    setShowDiv={setShowDiv}
                  />
                </div>
                <div className={styles.ptsBtn}>
                  <PointsButton
                    type={"decrement"}
                    id={id}
                    name={name}
                    value={value}
                    key={name + id}
                    // setShowDiv={setShowDiv}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PointsActions;

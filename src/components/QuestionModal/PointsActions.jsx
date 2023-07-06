import styles from "./Question.module.scss";
import PointsButton from "./PointsButton";
import { useSelector } from "react-redux";
import { Divider } from "@mui/material";
import { useState } from "react";

const PointsActions = ({ value }) => {
  const players = useSelector((state) => state.players);
  const [showPosValue, setShowPosValue] = useState(false);
  const [showNegValue, setShowNegValue] = useState(false);

  return (
    <div className={styles.modalActions}>
      <Divider /> 
      <div className={styles.actionsContainer}>
        {players.map((player) => {
          const { id, name } = player;
          return (
            <div>
              {showPosValue && <div className={styles.valuePop}>+{value}</div>}
              {showNegValue && <div className={styles.negValuePop}>-{value}</div>}
              <p>{player.name}</p>
              <div className={styles.buttons} key={id}>
                <div className={styles.ptsBtn}>
                  <PointsButton
                    type={"increment"}
                    id={id}
                    name={name}
                    value={value}
                    key={id}
                    setShowDiv={setShowPosValue}
                  />
                </div>
                <div className={styles.ptsBtn}>
                  <PointsButton
                    type={"decrement"}
                    id={id}
                    name={name}
                    value={value}
                    key={name + id}
                    setShowDiv={setShowNegValue}
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

import React, { useState } from "react";
import PointsButton from "./PointsButton";
import styles from "./Question.module.scss";
import {
  addPointsToPlayer,
  removePointsFromPlayer,
} from "../Players/playersSlice";
import { useDispatch } from "react-redux";

const PointsBtnWrapper = ({ value, id, name }) => {
  const [showPosValue, setShowPosValue] = useState(false);
  const [showNegValue, setShowNegValue] = useState(false);
  const [showAddedPoints, setShowAddedPoints] = useState({increment: false, decrement: false});
  const dispatch = useDispatch();

  const handleClick = (id, points, type) => {
    if (type === 'increment') {
      dispatch(addPointsToPlayer({ id, points }))
      setShowPosValue(true);
      setShowAddedPoints({...showAddedPoints, increment: true});
      setTimeout(() => {
        setShowPosValue(false);
      }, 2000);
    } else {
      dispatch(removePointsFromPlayer({ id, points }));
      setShowNegValue(true);
      setShowAddedPoints({...showAddedPoints, decrement: true});
      setTimeout(() => {
        setShowNegValue(false);
      }, 2000);
    }
  }

  return (
    <div>
      {showPosValue && <div className={styles.valuePop}>+{value}</div>}
      {showNegValue && <div className={styles.negValuePop}>-{value}</div>}
      <p>{name}</p>
      <div className={styles.buttons} key={id}>
        <div
          className={styles.ptsBtn}
          onClick={() => handleClick(id, value, "increment")}
        >
          <PointsButton
            type={"increment"}
            id={id}
            name={name}
            value={value}
            key={id}
            showAddedPoints={showAddedPoints}
          />
        </div>
        <div
          className={styles.ptsBtn}
          onClick={() => handleClick(id, value, "decrement")}
        >
          <PointsButton
            type={"decrement"}
            id={id}
            name={name}
            value={value}
            key={name + id}
            showAddedPoints={showAddedPoints}
          />
        </div>
      </div>
    </div>
  );
};

export default PointsBtnWrapper;

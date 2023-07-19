import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import PointsButton from "./PointsButton";
import {
  addPointsToPlayer,
  removePointsFromPlayer,
} from "../Players/playersSlice";
import io from "socket.io-client";
import { ipAddress, port } from "../../public/constants";

import styles from "./Question.module.scss";

const socket = io.connect(`${ipAddress}${port}`);

const PointsBtnWrapper = ({ value, id, name, queue, setQueue }) => {
  // should we use a useReducer here?
  const [showPosValue, setShowPosValue] = useState(false);
  const [showNegValue, setShowNegValue] = useState(false);
  const [showAddedPoints, setShowAddedPoints] = useState({
    increment: false,
    decrement: false,
  });
  const dispatch = useDispatch();

  useEffect(() => {
    socket.on("buzzed_in", (data) => {
      console.log("## someone buzzed", data);
      if (!queue.some((obj) => obj.id === data.id))
        setQueue((prev) => [...prev, data]);
      else console.log("## already in queue", queue);
    });
    return () => {
      socket.off("buzzed_in");
    };
  }, [queue, setQueue]);

  const handleClick = (id, points, type) => {
    console.log(`${type}ing ${points}`);
    if (type === "increment") {
      dispatch(addPointsToPlayer({ id, points }));
      setShowPosValue(true);
      setShowAddedPoints({ ...showAddedPoints, increment: true });
      setTimeout(() => {
        setShowPosValue(false);
      }, 2000);
      // if we award points, we should clear the queue
      setQueue([]);
    } else {
      dispatch(removePointsFromPlayer({ id, points }));
      setShowNegValue(true);
      setShowAddedPoints({ ...showAddedPoints, decrement: true });
      setTimeout(() => {
        setShowNegValue(false);
      }, 2000);
      // if we subtract points, we should move to the next person in the queue
      setQueue(prev => prev.filter(player => player.id !== id));
    }
  };

  const isAnswering = queue[0]?.id === id;
  console.log("## isAnswering", isAnswering, queue[0]?.name);

  return (
    <div>
      <div className={styles.valuePop}>{showPosValue && `+${value}`}</div>
      <div className={styles.negValuePop}>{showNegValue && `-${value}`}</div>
      <div className={isAnswering && styles.playerNameContainer}>
        <p>{name}</p>
      </div>
      <div className={styles.buttons} key={id}>
        <div
          className={styles.ptsBtn}
          onClick={() =>
            !showAddedPoints.increment && handleClick(id, value, "increment")
          }
        >
          <PointsButton
            type={"increment"}
            id={id}
            key={id}
            showAddedPoints={showAddedPoints}
          />
        </div>
        <div
          className={styles.ptsBtn}
          onClick={() =>
            !showAddedPoints.decrement && handleClick(id, value, "decrement")
          }
        >
          <PointsButton
            type={"decrement"}
            id={id}
            key={name + id}
            showAddedPoints={showAddedPoints}
          />
        </div>
      </div>
    </div>
  );
};

export default PointsBtnWrapper;

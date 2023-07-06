import { useState } from "react";
import React from "react";
import { useDispatch } from "react-redux";
import {
  addPointsToPlayer,
  removePointsFromPlayer,
} from "../Players/playersSlice";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import styles from "./Question.module.scss";

const PointsButton = ({ type, id, name, value, setShowDiv }) => {
  const [showAddedPoints, setShowAddedPoints] = useState(false);
  const dispatch = useDispatch();

  const handleClick = (id, points, type) => {
    console.log('clicking', type)
    type === "increment"
      ? dispatch(addPointsToPlayer({ id, points }))
      : dispatch(removePointsFromPlayer({ id, points }));
    setShowAddedPoints(true);
    setShowDiv(true);
    setTimeout(() => {
      setShowDiv(false);
    }, 2000);
  };

  return type === "increment" ? (
    showAddedPoints ? (
      <CheckOutlinedIcon className={styles.checkmark} />
    ) : (
      <AddIcon key={id} onClick={() => handleClick(id, value, type)} />
    )
  ) : showAddedPoints ? (
    <CheckOutlinedIcon className={styles.SubCheckmark} />
  ) : (
    <RemoveIcon key={id} onClick={() => handleClick(id, value, type)} />
  );
};

export default PointsButton;

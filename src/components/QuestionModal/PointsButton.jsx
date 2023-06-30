import { useState } from "react";
import React from "react";
import { useDispatch } from "react-redux";
import {
  addPointsToPlayer,
  removePointsFromPlayer,
} from "../Players/playersSlice";

const PointsButton = ({ type, id, name, value }) => {
  const [showAddedPoints, setShowAddedPoints] = useState(false);
  const dispatch = useDispatch();

  const handleClick = (id, points, type) => {
    type === 'increment' ? dispatch(addPointsToPlayer({id,points})) : dispatch(removePointsFromPlayer({id, points}))
    setShowAddedPoints(true);
  };

  return type === "increment" ? (
    <button key={id} onClick={() => handleClick(id, value, type)}>
      {showAddedPoints ? `${value} added to ${name} ⬆️` : `➕`}
    </button>
  ) : (
    <button key={id} onClick={() => handleClick(id, value, type)}>
      {showAddedPoints ? `${value} removed from ${name} ⬇️` : `➖`}
    </button>
  );
};

export default PointsButton;

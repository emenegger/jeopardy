import { useState } from "react";
import React from "react"
import { useDispatch } from "react-redux";
import { addPointsToPlayer } from "../Players/playersSlice";

const AddPointsButton = ({id, name, value}) => {
  const [showAddedPoints, setShowAddedPoints] = useState(false);
  const dispatch = useDispatch();

  const handleClick = (id, points) => {
    dispatch(
      addPointsToPlayer({
        id,
        points,
      })
    )
    setShowAddedPoints(true); //* fix by making a button component?
  }

  return (
    <button
      key={id}
      onClick={() => handleClick(id, value)}
    >
      {showAddedPoints ? `Added to ${name} ✅` : name}
    </button>
  )
}

export default AddPointsButton;
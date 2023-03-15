import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPlayer } from "./playersSlice";

const PlayerForm = ({ playerNum }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [buttonSubmit, setButtonSubmit] = useState(false)

  const handleAddPlayer = (e) => {
    e.preventDefault()
    dispatch(
      addPlayer({
        name: name,
        points: 0,
        id: playerNum,
      })
    );
    setButtonSubmit(true)
  };

  const handleChange = (e) => setName(e.target.value);
  

  return (
    <div>
      <label>Enter Player {playerNum}'s name: </label>
      <input
        type="text"
        value={name}
        onChange={handleChange}
      ></input>{" "}
      {buttonSubmit ? <button disabled>✅</button> : <button onClick={handleAddPlayer}>submit</button>}
    </div>
  );
};

export default PlayerForm;

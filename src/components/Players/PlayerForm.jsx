import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addPlayer } from "./playersSlice";
import io from "socket.io-client";
import styles from "./Players.module.scss";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";

const socket = io.connect("http://localhost:5001");

const PlayerForm = ({ playerNum }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [buttonSubmit, setButtonSubmit] = useState(false);
  const [socketData, setSocketData] = useState({})

  useEffect(()=> {
    socket.on('receive_user', (data) => {
      console.log('data', data);
      setSocketData(data);
    })
  }, [])

  const handleAddPlayer = (e) => {
    e.preventDefault();
    dispatch(
      addPlayer({
        name: name,
        points: 0,
        id: playerNum,
      })
    );
    setButtonSubmit(true);
    socket.emit('sending_user', {
      name: name,
      points: 0,
      id: playerNum,
    });
  };

  const handleChange = (e) => setName(e.target.value);

  return (
    <div className={styles.playerForm}>
      <label>Enter Player {playerNum}'s name: {socketData?.name}</label>
      <input type="text" value={name} onChange={handleChange}></input>{" "}
      {buttonSubmit ? (
        <button disabled>
          <CheckCircleOutlineOutlinedIcon color="success" fontSize="small" />
        </button>
      ) : (
        <button onClick={handleAddPlayer}>submit</button>
      )}
    </div>
  );
};

export default PlayerForm;

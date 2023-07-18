import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addPlayer } from "../Players/playersSlice";
import io from "socket.io-client";

import styles from "./User.module.scss";

const socket = io.connect("http://localhost:5001");

const UserSignUp = ({setShowInput}) => {
  const [name, setName] = useState("");
  const [socketData, setSocketData] = useState({});
  const dispatch = useDispatch()


  const handleChange = (e) => setName(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('## name', name)
    socket.emit("sending_user", { name });
    setShowInput(prev => !prev);
  };

  return (
    <div className={styles.signUpBox}>
      <form>
        <label>Enter your name</label>
        <input type="text" value={name} onChange={handleChange}></input>
        <button onClick={handleSubmit}>submit</button>
      </form>
    </div>
  );
};

export default UserSignUp;

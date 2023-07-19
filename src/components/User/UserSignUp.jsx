import React, { useState } from "react";
import io from "socket.io-client";
import { v4 as uuidv4 } from "uuid";
import { ipAddress, port } from "../../public/constants";

import styles from "./User.module.scss";

// const socket = io.connect("http://localhost:5001");
const socket = io.connect(`${ipAddress}${port}`);

const UserSignUp = ({ setShowInput, setLocalPlayer }) => {
  const [name, setName] = useState("");

  const handleChange = (e) => setName(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    const player = { name, id: uuidv4() };
    console.log('## saving player as', player)
    socket.emit("sending_user", player);
    setLocalPlayer(player);
    setShowInput((prev) => !prev);
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

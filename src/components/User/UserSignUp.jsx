import React, { useEffect, useState } from "react";
import io from "socket.io-client";

import styles from "./User.module.scss";

const socket = io.connect("http://localhost:5001");

const UserSignUp = () => {
  const [name, setName] = useState("");
  const [socketData, setSocketData] = useState({});

  useEffect(() => {
    // console.log('socketData', socketData);
    socket.on("receive_user", (data) => {
      console.log("data", data);
      setSocketData(data);
    });
  }, []);

  const handleChange = (e) => setName(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("sending_user", { name });
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

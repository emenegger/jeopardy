import React, { useEffect, useState } from 'react'
import UserSignUp from './UserSignUp'
import NavBar from '../NavBar/NavBar'
import Buzzer from './Buzzer';
import { useDispatch, useSelector } from 'react-redux';
import io from "socket.io-client";
import styles from "./User.module.scss";
import { setGameToReady } from '../Board/boardSlice';

const socket = io.connect("http://localhost:5001");

const User = () => {
  const players = useSelector((state) => state.players);
  const gameReady = useSelector((state)=> state.board.playersReady)
  const [showInput, setShowInput] = useState(true);
  const dispatch = useDispatch();
  console.log('## players', players);
  console.log('## gameReady', gameReady);
  // enter game pin
  // enter your name
  // loading / waiting display
  // button
  // display for who is answering

  useEffect(() => {
    socket.on("game_ready", (data) => {
      console.log('## in useffect')
      // setSocketData(data);
      dispatch(setGameToReady(data));
    });
  }, [socket, dispatch]);

  const handleBuzz = () => {
    console.log('## buzz');

  }

  return (
    <div className={styles.userContainer}>
      <NavBar isUser={true}/>
      <div>{players.map(player => <p>{player.name} {player.id}</p>)}</div>
      {showInput ? <UserSignUp setShowInput={setShowInput}/> : <h3>waiting for host to start game...</h3>}
      {gameReady && <Buzzer />}
    </div>
  )
}

export default User
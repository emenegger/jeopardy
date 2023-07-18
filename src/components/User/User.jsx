import React, { useState } from 'react'
import UserSignUp from './UserSignUp'
import NavBar from '../NavBar/NavBar'
import styles from "./User.module.scss";
import Buzzer from './Buzzer';
import { useSelector } from 'react-redux';

const User = () => {
  const players = useSelector((state) => state.players);
  const [showInput, setShowInput] = useState(true)
  console.log('## players', players);
  // enter game pin
  // enter your name
  // loading / waiting display
  // button
  // display for who is answering

  const handleBuzz = () => {
    console.log('## buzz');

  }

  return (
    <div className={styles.userContainer}>
      <NavBar isUser={true}/>
      <div>{players.map(player => <p>{player.name} {player.id}</p>)}</div>
      {showInput ? <UserSignUp setShowInput={setShowInput}/> : <h3>waiting for host to start game...</h3>}
      <Buzzer />
    </div>
  )
}

export default User
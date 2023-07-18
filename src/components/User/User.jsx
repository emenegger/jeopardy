import React from 'react'
import UserSignUp from './UserSignUp'
import NavBar from '../NavBar/NavBar'
import styles from "./User.module.scss";
import Buzzer from './Buzzer';
import { useSelector } from 'react-redux';

const User = () => {
  const players = useSelector((state) => state.players);
  console.log('## players', players)
  // enter game pin
  // enter your name
  // loading / waiting display
  // button
  // display for who is answering
  const mockPlayers = ['Kendall', 'Roman', 'Shiv', 'Connor'];

  return (
    <div className={styles.userContainer}>
      <NavBar />
      <div>{players.map(player => <p>{player.name} {player.id}</p>)}</div>
      <UserSignUp />
      <Buzzer />
    </div>
  )
}

export default User
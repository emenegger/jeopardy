import React from 'react'
import UserSignUp from './UserSignUp'
import NavBar from '../NavBar/NavBar'
import styles from "./User.module.scss";
import Buzzer from './Buzzer';

const User = () => {
  // enter game pin
  // enter your name
  // loading / waiting display
  // button
  // display for who is answering
  const mockPlayers = ['Kendall', 'Roman', 'Shiv', 'Connor'];

  return (
    <div className={styles.userContainer}>
      <NavBar />
      {/* <div>{mockPlayers.map(player => <p>{player}</p>)}</div> */}
      <UserSignUp />
      <Buzzer />
    </div>
  )
}

export default User
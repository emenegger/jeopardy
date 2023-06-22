// single responsibility - display the home page?
import React from "react";
import styles from "./styles.module.scss";
import Button from "../Button/Button";

const HeroPage = ({setShowSelection}) => {

  return (
    <div className={styles.heroContainer}>
      <div className={styles.hero}>
        <h1>Play Jeopardy</h1>
        <h3>
          Free online Jeopardy game. Play with your choice of hundreds of
          categories from previous Jeopardy! games.
        </h3>
        <Button className={'getStartedBtn'} label={'Get Started'} clickHandler={setShowSelection}/>
      </div>
    </div>
  );
};

export default HeroPage;

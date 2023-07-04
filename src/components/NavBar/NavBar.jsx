import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

const NavBar = () => {
  return (
    <div className={styles.wrapper}>
      <header>JEOPARDY!</header>
      <nav>
        <ol>
          <Link to="/player-selection">1. Choose Players</Link>
        </ol>
        <ol>
          <Link to="/category-selection ">2. Choose Categories</Link>
        </ol>
        <ol>
          <Link to="/board ">3. Start Game</Link>
        </ol>
      </nav>  
    </div>
  );
};

export default NavBar;

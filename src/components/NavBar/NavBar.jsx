import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.scss";

const NavBar = () => {
  const players = useSelector((state) => state.players);
  // add choose categories check mark once category selection has started again

  return (
    <div className={styles.wrapper}>
      <Link to="/">
        <header>JEOPARDY!</header>
      </Link>
      <nav>
        <ol>
          <Link to="/player-selection">
            1. Choose Players {players.length > 0 && "✔️"}
          </Link>
        </ol>
        <ol>
          <Link to="/category-selection ">2. Choose Categories</Link>
        </ol>
        <ol>
          <Link to="/board ">3. Start Game</Link>
        </ol>
        {/* <ol>
          <Link to="/final-jeopardy ">4. Final Jeopardy</Link>
        </ol> */}
      </nav>
    </div>
  );
};

export default NavBar;

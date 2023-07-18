import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import styles from "./NavBar.module.scss";

const NavBar = () => {
  // const players = useSelector((state) => state.players);
  // add choose categories check mark once category selection has started again

  return (
    <div className={styles.wrapper}>
      <NavLink exact to="/">
        <header>JEOPARDY!</header>
      </NavLink>
      <nav>
        <ol>
          <NavLink to="/player-selection" activeClassName="active">
            1. Choose Players
          </NavLink>
        </ol>
        <ol>
          <NavLink to="/category-selection " activeClassName="active">
            2. Choose Categories
          </NavLink>
        </ol>
        <ol>
          <NavLink to="/board " activeClassName="active">
            3. Start Game
          </NavLink>
        </ol>
      </nav>
    </div>
  );
};

export default NavBar;

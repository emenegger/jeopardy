import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import DownloadBtn from "../Admin/DownloadBtn";
import styles from "./NavBar.module.scss";

const NavBar = ({isUser}) => {
  // const players = useSelector((state) => state.players);
  // add choose categories check mark once category selection has started again

  return (
    <div className={styles.wrapper}>
      <NavLink exact to="/">
        <header>JEOPARDY!</header>
      </NavLink>
      {!isUser &&<nav>
        <ol>
          <NavLink to="/player-selection">
            1. Choose Players
          </NavLink>
        </ol>
        <ol>
          <NavLink to="/category-selection">
            2. Choose Categories
          </NavLink>
        </ol>
        <ol>
          <NavLink to="/board ">
            3. Start Game
          </NavLink>
        </ol>
        <ol>
          <DownloadBtn/>
        </ol>
      </nav>}
    </div>
  );
};

export default NavBar;

import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { resetBoardData } from "../Board/boardSlice";
import styles from "./styles.module.scss";

const DoubleJeopardy = ({setDdToggle}) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(resetBoardData());
    setDdToggle(false)
  };

  return (
    <div className={styles.container}>
      <div className={styles.ddContainer}>
        <h1>Are you ready for Double Jeopardy?!</h1>
        <Link to="category-selection">
          <button onClick={handleClick}>Yes!</button>
        </Link>
      </div>
    </div>
  );
};

export default DoubleJeopardy;

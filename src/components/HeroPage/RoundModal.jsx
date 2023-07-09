import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { resetBoardData } from "../Board/boardSlice";
import styles from "./styles.module.scss";

const RoundModal = ({ setModal, round }) => {
  const dispatch = useDispatch();
  const link = round === "Double" ? "category-selection" : "final-jeopardy";

  const handleClick = () => {
    dispatch(resetBoardData());
    setModal(modal => !modal);
  };

  return (
    <div className={styles.container}>
      <div className={styles.ddContainer}>
        <h1>Are you ready for {round} Jeopardy?!</h1>
        <Link to={link}>
          <button onClick={handleClick}>Yes!</button>
        </Link>
      </div>
    </div>
  );
};

export default RoundModal;

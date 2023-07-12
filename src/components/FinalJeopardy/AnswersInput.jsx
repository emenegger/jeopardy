import { useState } from "react";
import styles from "./FinalJeopardy.module.scss";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import PointsBtnWrapper from "../QuestionModal/PointsBtnWrapper";


const AnswersInput = ({
  player,
  handleChange,
  state,
  type,
  handleSubmit,
  bid,
}) => {
  // this is essentially the same as the bids component - lets refactor and reuse
  const [showVal, setShowVal] = useState(false);
  const {name, id, points } = player;
  console.log(bid)

  const handleToggleVisibility = () => {
    setShowVal((prevShowNumber) => !prevShowNumber);
  };

  return (
    <form className={styles.textForm}>
      <label>{player.name}'s answer: </label>
      <div className={styles.inputAndIcon}>
        <input
          type={showVal ? "text" : "password"}
          value={state}
          onChange={handleChange}
          name="Final Jeopardy Answer"
        ></input>
        {showVal ? (
          <VisibilityIcon onClick={handleToggleVisibility} />
        ) : (
          <VisibilityOffIcon onClick={handleToggleVisibility} />
        )}
      </div>
      {type !== 'category' &&  <PointsBtnWrapper value={bid} id={id} name={null}/>}
    </form>
  );
};
export default AnswersInput;

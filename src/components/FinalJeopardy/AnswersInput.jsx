import { useState } from "react";
import styles from "./FinalJeopardy.module.scss";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";

const AnswersInput = ({ player, i, handleChange, state, button, handleSubmit }) => {
  // this is essentially the same as the bids component - lets refactor and reuse
  const [showVal, setShowVal] = useState(false);
  console.log(state)

  const handleToggleVisibility = () => {
    setShowVal((prevShowNumber) => !prevShowNumber);
  };

  return (
    <form className={styles.textForm}>
      <label>{player.name}'s answer: </label>
      <div className={styles.inputAndIcon}>
        <input
          type={showVal ? "text" : "password"}
          value={state.answer}
          onChange={handleChange}
          name="Final Jeopardy Answer"
        ></input>
        {/* <div className={styles.visibilityIcons}></div> */}
        {showVal ? (
          <VisibilityIcon onClick={handleToggleVisibility} />
        ) : (
          <VisibilityOffIcon onClick={handleToggleVisibility} />
        )}
      </div>
      <button className={styles.btn} onClick={handleSubmit}>submit</button>
    </form>
  );
};
export default AnswersInput;

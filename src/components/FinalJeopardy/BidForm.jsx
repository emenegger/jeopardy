import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useState } from "react";
import styles from "./FinalJeopardy.module.scss";

const BidForm = ({ player, i, setBids, bids }) => {
  const [showVal, setShowVal] = useState(false);

  const handleToggleVisibility = () => {
    setShowVal((prevShowNumber) => !prevShowNumber);
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    setBids([
      ...bids.slice(0, i),
      Number(e.target.value),
      ...bids.slice(i + 1),
    ]);
  };

  return (
    <form>
      <label>{player.name}'s bid: </label>
      <div className={styles.input}>
        <input
          type={showVal ? "number" : "password"}
          value={!bids[i] ? "" : bids[i]}
          onChange={handleChange}
        ></input>
        {showVal ? (
          <VisibilityIcon onClick={handleToggleVisibility} className={styles.visibilityIcons}/>
        ) : (
          <VisibilityOffIcon onClick={handleToggleVisibility} className={styles.visibilityIcons}/>
        )}
      </div>
    </form>
  );
};

export default BidForm;

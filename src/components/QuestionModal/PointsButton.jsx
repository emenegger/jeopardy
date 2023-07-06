import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import styles from "./Question.module.scss";

const PointsButton = ({ type, id, showAddedPoints }) => {

  return type === "increment" ? (
    showAddedPoints.increment ? (
      <CheckOutlinedIcon className={styles.checkmark} />
    ) : (
      <AddIcon key={id}/>
    )
  ) : showAddedPoints.decrement ? (
    <CheckOutlinedIcon className={styles.SubCheckmark} />
  ) : (
    <RemoveIcon key={id} />
  );
};

export default PointsButton;

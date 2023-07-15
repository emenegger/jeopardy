import CategoryListItem from "./CategoryListItem";
import { useSelector } from "react-redux";
import styles from "./Selection.module.scss";

const SelectedCategories = () => {
  const boardData = useSelector((state) => state.board.boardData);

  return (
    <div className={styles.selectedCategories}>
      <h3>Your Categories</h3>
      {boardData.map((ele) => (
        <CategoryListItem key={ele.id} category={ele} type={"Remove"} />
      ))}
      <h4>
        <b>Select {6 - boardData.length} more categories</b>
      </h4>
    </div>
  );
};

export default SelectedCategories;

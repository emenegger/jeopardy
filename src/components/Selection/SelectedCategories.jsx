import CategoryListItem from "./CategoryListItem";
import { useSelector } from "react-redux";


const SelectedCategories = () => {
  const boardData = useSelector((state) => state.board.boardData);

  return (
    <div>
      <h2>Your Categories</h2>
      {boardData.map((ele) => (
        <CategoryListItem key={ele.id} category={ele} type={"Remove"} />
      ))}
      <li>
        <b>Select {6 - boardData.length} more categories</b>
      </li>
    </div>
  );
};

export default SelectedCategories;
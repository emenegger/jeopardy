import {
  incrementCategoryPage,
  decrementCategoryPage,
} from "../Board/boardSlice";
import { useSelector, useDispatch } from "react-redux";
import { getTotalPagesOfCategories } from "../../selectors/categories";

const Pagination = () => {
  const pageNumber = useSelector((state) => state.board.categoryPage);
  const totalPages = useSelector(getTotalPagesOfCategories);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Page {pageNumber + 1}</h3>
      <button
        disabled={!pageNumber}
        onClick={() => dispatch(decrementCategoryPage())}
      >
        ⬅️
      </button>
      <button
        disabled={pageNumber - 1 === totalPages}
        onClick={() => dispatch(incrementCategoryPage())}
      >
        ➡️
      </button>
    </div>
  );
};

export default Pagination;

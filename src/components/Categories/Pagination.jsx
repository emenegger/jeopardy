import { incrementCategoryPage, decrementCategoryPage } from "./categoriesSlice";
import { useSelector, useDispatch } from "react-redux";
import { getTotalPagesOfCategories } from "../../selectors/categories";

import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

import styles from "./Selection.module.scss";

const Pagination = () => {
  const pageNumber = useSelector((state) => state.categories.categoryPage);
  const totalPages = useSelector(getTotalPagesOfCategories);
  const dispatch = useDispatch();

  return (
    <div className={styles.pagination}>
      <button
        disabled={!pageNumber}
        onClick={() => dispatch(decrementCategoryPage())}
      >
        <ArrowBackIosOutlinedIcon />
      </button>
      <h3>Page {pageNumber + 1} / {totalPages} </h3>
      <button
        disabled={pageNumber + 1 === totalPages}
        onClick={() => dispatch(incrementCategoryPage())}
      >
        <ArrowForwardIosOutlinedIcon />
      </button>
    </div>
  );
};

export default Pagination;

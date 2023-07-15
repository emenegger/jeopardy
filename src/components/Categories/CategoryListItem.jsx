import React from "react";
import { addBoardData, removeBoardData } from "../Board/boardSlice";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Selection.module.scss";
import { selectBoardData } from "../../selectors/categories";
import { fetchCategoryDataById } from "../../api/categories";
import {
  removeAvailableCategory,
  addAvailableCategory,
} from "./categoriesSlice";
import { getIsDoubleJeopardy } from "../../selectors/categories";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import classNames from "classnames";

const CategoryListItem = ({ category, type }) => {
  const dispatch = useDispatch();
  // const addedCategories = useSelector(selectBoardData);
  const isDailyDouble = useSelector(getIsDoubleJeopardy);
  // const isSelected = addedCategories.some((c) => c.id === category.id);
  console.log(category);

  const addCategoryData = async (categoryData) => {
    const data = await fetchCategoryDataById(categoryData.id, isDailyDouble);
    dispatch(addBoardData(data));
    dispatch(removeAvailableCategory(categoryData));
  };

  const removeCategoryData = (categoryData) => {
    dispatch(removeBoardData(categoryData));
    dispatch(addAvailableCategory(categoryData));
  };

  const handleClick = () =>
    type === "Select"
      ? addCategoryData(category)
      : removeCategoryData(category);

  return (
    <li className={styles.selectListItem}>
      {category.title}
      <div className={styles.clueBarContainer}>
        {/* {type === "Select" && ( */}
          <>
            <p> Clues Quality:</p>
            <div className={styles.clueStrengthBar}>
              <div
                className={classNames(styles.bar, {
                  [styles.strong]: category.clues_count > 15,
                  [styles.medium]:
                    category.clues_count >= 7 && category.clues_count <= 15,
                  [styles.weak]: category.clues_count < 7,
                })}
                // style={{width: '20px'} }
              ></div>
            </div>
          </>
        {/* )} */}
        {type === "Select" ? (
          <AddCircleOutlineOutlinedIcon
            className={styles.addCategoryBtn}
            onClick={handleClick}
          />
        ) : (
          <RemoveCircleOutlineOutlinedIcon
            color={"error"}
            onClick={handleClick}
          />
        )}
      </div>
    </li>
  );
};

export default CategoryListItem;

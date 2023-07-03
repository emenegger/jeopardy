import React from "react";
import { addBoardData, removeBoardData } from "../Board/boardSlice";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.scss";
import { selectBoardData } from "../../selectors/categories";
import { fetchCategoryDataById } from "../../api/categories";
import { removeAvailableCategory, addAvailableCategory } from "./categoriesSlice";

const CategoryListItem = ({ category, type }) => {
  const dispatch = useDispatch();
  const addedCategories = useSelector(selectBoardData);
  const isSelected = addedCategories.some((c) => c.id === category.id);

  const addCategoryData = async (categoryData) => {
    const data = await fetchCategoryDataById(categoryData.id);
    dispatch(addBoardData(data));
    dispatch(removeAvailableCategory(categoryData));
  };

  const removeCategoryData = (categoryData) => {
    dispatch(removeBoardData(categoryData));
    dispatch(addAvailableCategory(categoryData))
  };

  return (
    <li className={styles.selectListItem}>
      {category.title} {isSelected && type === "Select" && <>✅</>}
      <button
        disabled={isSelected && type === "Select"}
        onClick={
          type === "Select"
            ? () => addCategoryData(category)
            : () => removeCategoryData(category)
        }
      >
        {type}
      </button>
    </li>
  );
};

export default CategoryListItem;

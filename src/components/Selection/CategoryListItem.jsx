import React from "react";
import { addBoardData, removeBoardData } from "../Board/boardSlice";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.scss";
import { selectBoardData } from "../../selectors/categories";

const CATEGORIES_QUERY = "https://jservice.io/api/category?id=";

const CategoryListItem = ({ category, type }) => {
  const dispatch = useDispatch();
  const addedCategories = useSelector(selectBoardData);
  const isSelected = addedCategories.some(c => c.id === category.id);

  const addCategoryData = async (categoryData) => {
    // fetch the actual data based on the id
    const response = await fetch(`${CATEGORIES_QUERY}${categoryData.id}`);
    const data = await response.json();
    dispatch(addBoardData(data));
  };

  const removeCategoryData = (categoryData) => {
    dispatch(removeBoardData(categoryData));
  };

  return (
    <li className={styles.selectListItem}>
      {category.title} {isSelected && type === 'Select' && <>✅</>}
      <button
        disabled={isSelected && type === 'Select'}
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

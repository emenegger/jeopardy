import React from "react";
import { addBoardData, removeBoardData } from "../Board/boardSlice";
import { useDispatch } from "react-redux";
import styles from "./styles.module.scss";

const CATEGORIES_QUERY = "https://jservice.io/api/category?id=";

const CategoryListItem = ({ category, type }) => {
  const dispatch = useDispatch();

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
      {category.title.slice(0, 1).toUpperCase() + category.title.slice(1)}
      <button
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

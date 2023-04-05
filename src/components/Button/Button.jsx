import React from 'react';
import { addBoardData } from "../Board/boardSlice";
import { useSelector, useDispatch } from "react-redux";
import styles from "./styles.module.scss";


const CATEGORIES_QUERY = 'https://jservice.io/api/category?id='

const CategoryButton = ({ category, type }) => {
  const dispatch = useDispatch()

  const addCategoryData = async (categoryData) => {
    // fetch the actual data based on the id
    const response = await fetch(`${CATEGORIES_QUERY}${categoryData.id}`);
    const data = await response.json();
    dispatch(addBoardData(data));
  };

  return (
    <li className={styles.selectListItem}>{category.title.slice(0, 1).toUpperCase() + category.title.slice(1)}
      <button onClick={() => addCategoryData(category)}>{type}</button>
    </li>
  )


}

export default CategoryButton;
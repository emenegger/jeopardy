import CategoryListItem from "./CategoryListItem";
import { getPaginatedCategories } from "../../selectors/categories";
import { useSelector } from "react-redux";
import styles from "./Selection.module.scss";


const CategoryList = () => {
  const paginatedCategories = useSelector(getPaginatedCategories);
  
  return (
    <div className={styles.categoryList}>
      <h3>Select Six Categories</h3>
      {paginatedCategories?.map((category) => (
        <CategoryListItem
          key={category.id}
          category={category}
          type={"Select"}
        />
      ))}
    </div>
  );
};

export default CategoryList;

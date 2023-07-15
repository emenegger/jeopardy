import CategoryListItem from "./CategoryListItem";
import { getPaginatedCategories } from "../../selectors/categories";
import { useSelector } from "react-redux";

const CategoryList = () => {
  const paginatedCategories = useSelector(getPaginatedCategories);
  
  return (
    <div>
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

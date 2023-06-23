import CategoryListItem from "./CategoryListItem";
import { getCurrentCategories } from "../../selectors/categories";
import { useSelector, useDispatch } from "react-redux";


const CategoryList = () => {
  const currentCategories = useSelector(getCurrentCategories);

  return (
    <div>
      <h2>Select Six Categories</h2>
      {currentCategories?.map((category) => (
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

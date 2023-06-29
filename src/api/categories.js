export const fetchCategories = async () => {
  const response = await fetch("https://jservice.io/api/categories?count=100");
  const data = await response.json();
  const fiveOrMoreClues = data
    .filter((d) => d.clues_count >= 5 && d.id)
    .sort((a, b) => (a.title < b.title ? -1 : a.title > b.title ? 1 : 0));
  return fiveOrMoreClues;
};

const CATEGORIES_QUERY = "https://jservice.io/api/category?id=";

export const fetchCategoryDataById = async (categoryId) => {
  const response = await fetch(`${CATEGORIES_QUERY}${categoryId}`);
  const data = await response.json();
  const firstRoundVals = [100, 200, 300, 400, 500];
  // for each of the round vals, find one and add
  const getFilteredClues = (data, requiredVals) => {
    const returnArr = [];
    for (let val of requiredVals) {
      const matchedVal = data.clues.find(clue => clue.value === val) || []
      returnArr.push(matchedVal);
    } 
    return returnArr;
  };
  const filteredVals = getFilteredClues(data, firstRoundVals);
  data.clues = filteredVals;
  return data;
};

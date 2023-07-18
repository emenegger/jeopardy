export const fetchCategories = async () => {
  console.log("fetching categories");
  const count = 99;
  const offset = Math.floor(Math.random(0, 1) * 25000);
  const response = await fetch(
    `https://jservice.io/api/categories?count=${count}&offset=${offset}`
  );
  const data = await response.json();
  const fiveOrMoreClues = data
    .filter((d) => d.clues_count >= 10 && d.id)
    .sort((a, b) => (a.title < b.title ? -1 : a.title > b.title ? 1 : 0));
  return fiveOrMoreClues;
};

export const fetchFinalJeopardy = async () => {
  const response = await fetch("https://jservice.io/api/final");
  const data = await response.json();
  console.log(data);
  return data[0];
};

const CATEGORIES_QUERY = "https://jservice.io/api/category?id=";


export const fetchCategoryDataById = async (categoryId, isDoubleJeopardy) => {
  const response = await fetch(`${CATEGORIES_QUERY}${categoryId}`);
  const data = await response.json();

  const initClues = data.clues.sort((a, b) => a.value - b.value); // I don't know if this needs to be sorted

  const firstRoundVals = [200, 400, 600, 800, 1000];
  const secondRoundVals = [400, 800, 1200, 1600, 2000];

  const findClosestValue = (arr, num) => {
    let closest = null;
    let minDifference = Infinity;

    for (const obj of arr) {
      const difference = Math.abs(obj.value - num);
      if (difference < minDifference) {
        closest = obj;
        minDifference = difference;
      }
    }
    return closest;
  }

  // this could use some syntactic sugar!
  const getFullArrOfValues = (requiredVals, clues) => {
    let availableClues = [...clues];
    const returnArr = [];
    // iterate through required vals
    for (let val of requiredVals) {
      // find the clue with the closest value
      const clueWithClosestVal = findClosestValue(availableClues, val);
      // remove the clue to avoid duplicate clues
      const clueIndex = availableClues.indexOf(clueWithClosestVal);
      if (clueIndex !== -1) {
        availableClues.splice(clueIndex, 1); // Remove the clue in-place
      }
      // add the clue to the final array
      returnArr.push(clueWithClosestVal);
    }
    return returnArr;
  };

  const vals = isDoubleJeopardy ? secondRoundVals : firstRoundVals;
  const filteredVals = getFullArrOfValues(vals, initClues);
  const updatedData = {...data, clues: filteredVals}
  return updatedData;
};

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

// this needs serious refactoring!

export const fetchCategoryDataById = async (categoryId, isDoubleJeopardy) => {
  const response = await fetch(`${CATEGORIES_QUERY}${categoryId}`);
  const data = await response.json();

  const initClues = data.clues.sort((a, b) => a.value - b.value);
  // console.log("initClues", initClues);

  const firstRoundVals = [200, 400, 600, 800, 1000];
  const secondRoundVals = [400, 800, 1200, 1600, 2000];

  const getFullArrOfValues = (requiredVals, clues) => {
    // console.log(clues);
    const returnArr = [];
    // iterate through required vals
    for (let val of requiredVals) {
      // iterate through the initial clues
      for (let clue of clues) {
        // if there is a match add it to finalArr
        if (clue.value === val) {
          returnArr.push(clue);
          break;
        }
        // if no match, get clue that is closest in value
        if (clue.value > val) {
          returnArr.push(clue);
          break;
        }
      }
    }
    // console.log(returnArr);
    return returnArr;
  };

  const vals = isDoubleJeopardy ? secondRoundVals : firstRoundVals;
  const filteredVals = getFullArrOfValues(vals, initClues);
  data.clues = filteredVals;
  console.log(data.clues);
  return data;
};

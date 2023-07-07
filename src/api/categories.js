export const fetchCategories = async () => {
  const response = await fetch("https://jservice.io/api/categories?count=50");
  const data = await response.json();
  const fiveOrMoreClues = data
    .filter((d) => d.clues_count >= 5 && d.id)
    .sort((a, b) => (a.title < b.title ? -1 : a.title > b.title ? 1 : 0));
  return fiveOrMoreClues;
};

const CATEGORIES_QUERY = "https://jservice.io/api/category?id=";

// this needs serious refactoring!

export const fetchCategoryDataById = async (categoryId, isDoubleJeopardy) => {
  const response = await fetch(`${CATEGORIES_QUERY}${categoryId}`);
  const data = await response.json();
  // console.log("data", data);
  const initClues = data.clues; 
  // console.log("initClues", initClues);
  const modifiedValsForFirstRound = initClues.map((clue) => ({
    ...clue,
    value: clue.value * 2,
  }));
  // console.log("modifiedValsForFirstRound", modifiedValsForFirstRound);
  const modifiedValsForSecondRound = initClues.map((clue)=> ({
    ...clue,
    value: clue.value * 4,
  }))
  // console.log("modifiedValsForSecondRound", modifiedValsForSecondRound);
  const firstRoundVals = [200, 400, 600, 800, 1000];
  const secondRoundVals = [400, 800, 1200, 1600, 2000];
  // for each of the round vals, find one and add
  const getFilteredClues = (clues, requiredVals) => {
    const returnArr = [];
    for (let val of requiredVals) {
      const matchedVal = clues.find((clue) => clue.value === val) || [];
      returnArr.push(matchedVal);
    }
    return returnArr;
  };
  const vals = isDoubleJeopardy ? secondRoundVals : firstRoundVals;
  const finalClues = isDoubleJeopardy ? modifiedValsForSecondRound : modifiedValsForFirstRound;
  const filteredVals = getFilteredClues(finalClues, vals);
  data.clues = filteredVals;
  // console.log(data.clues);
  return data;
};


export const fetchFinalJeopardy = async () => {
  const response = await fetch('https://jservice.io/api/final');
  const data = await response.json()
  return data;
}
import { useQuery } from 'react-query';

export const useFetch = (name, url) => {
  return useQuery(name, () =>
    fetch(url).then(res =>
      res.json()
    )
  )
}

export const fetchCategories = async () => {
  const response = await fetch('https://jservice.io/api/categories?count=100');
  const data = await response.json();
  const fiveOrMoreClues = data
    .filter((d) => d.clues_count >= 5 && d.id)
    .sort((a, b) => (a.title < b.title ? -1 : a.title > b.title ? 1 : 0))
    // .slice(0, 25);
  return fiveOrMoreClues;
}

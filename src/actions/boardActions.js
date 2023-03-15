import boardSlice from "../components/Board/boardSlice";
// import { addCategory } from "../components/Board/boardSlice";

// export const fetchBoardData = () => {
//   return async (dispatch) => {
//     const fetchData = async () => {
//       const response = await fetch(`https://jservice.io/api/category?id=${Math.floor(Math.random() * 2000)}`);
//       if (!response.ok) throw new Error("Couldn't fetch data from jservice")
//       const data = response.json();
//       return data;
//     }
//     try {
//       const boardData = await fetchData();
//       dispatch(addCategory(boardData))
//     } catch (error) {
//       console.log('error', error)
//     }
//   }
// }
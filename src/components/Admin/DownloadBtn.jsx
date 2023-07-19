import React from "react";
import { useSelector } from "react-redux";

// function convertToCSV(data) {
//   console.log('##data', data)
//   // const headers = Object.keys(data[0]).join(",") + "\n";
//   const headers = data[0]?.clues.map(clue => clue.value).join(",") + "\n"
//   console.log('## headers', headers);
//   // const csvRows = data.map((row) => Object.values(row).join(",")).join("\n");
//   // const csvRows = data[0]?.clues.map(clue => clue.answer).join(",") + "\n"
//   const csvRows = data.map(category => {
//     category.clues.map(clue => clue.answer)
//   }).join(",") + "\n"

//   console.log('## csvRows', csvRows);
//   return headers + csvRows;
// }

// function convertToCSV(data) {
//   // Get the distinct values (200, 400, 600, 800, 1000) from all categories
//   const distinctValues = data.reduce((acc, category) => {
//     category.clues.forEach((clue) => {
//       if (!acc.includes(clue.value)) {
//         acc.push(clue.value);
//       }
//     });
//     return acc;
//   }, []);

//   // Sort the distinct values in ascending order
//   const sortedDistinctValues = distinctValues.sort((a, b) => a - b);

//   // Create the headers for the CSV
//   const headers = ['category', ...sortedDistinctValues].join(',') + '\n';

//   // Create the rows for the CSV
//   const rows = data.map((category) => {
//     // Extract the title of the category
//     const title = category.title;

//     // Extract the answers for each value in the sortedDistinctValues array
//     const answers = sortedDistinctValues.map((value) => {
//       const clue = category.clues.find((clue) => clue.value === value);
//       return clue ? clue.answer : '';
//     });

//     return [title, ...answers].join(',');
//   });

//   // Combine the headers and rows and return the final CSV data
//   return headers + rows.join('\n');
// }

function convertToCSV(data) {
  // Get the distinct values (200, 400, 600, 800, 1000) from all categories
  const distinctValues = data.reduce((acc, category) => {
    category.clues.forEach((clue) => {
      if (!acc.includes(clue.value)) {
        acc.push(clue.value);
      }
    });
    return acc;
  }, []);

  // Sort the distinct values in ascending order
  const sortedDistinctValues = distinctValues.sort((a, b) => a - b);

  // Create the headers for the CSV with categories as headers
  const headers = ['value', ...data.map((category) => category.title)].join(',') + '\n';

  // Create the rows for the CSV
  const rows = sortedDistinctValues.map((value) => {
    // Extract the answers for each category and value
    const answers = data.map((category) => {
      const clue = category.clues.find((clue) => clue.value === value);
      return clue ? clue.answer : '';
    });

    return [value, ...answers].join(',');
  });

  // Combine the headers and rows and return the final CSV data
  return headers + rows.join('\n');
}


const DownloadBtn = () => {
  const data = useSelector((state) => state.board.boardData);

  const handleDownload = () => {
    const csvData = convertToCSV(data);
    console.log('## csvData', csvData)
    const blob = new Blob([csvData], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "data.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return <div onClick={handleDownload}>Download CSV</div>;
};

export default DownloadBtn;

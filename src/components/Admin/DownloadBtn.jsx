import React from "react";
import { useSelector } from "react-redux";


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
    a.download = `answers_${Date.now()}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return <div onClick={handleDownload}>Download CSV</div>;
};

export default DownloadBtn;

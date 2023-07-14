export function convertDateFormat(dateString) {
  // Create a new Date object from the input string
  const date = new Date(dateString);

  // Extract the day, month, and year components from the Date object
  const day = date.getDate();
  const month = date.getMonth() + 1; // Months are zero-based
  const year = date.getFullYear();

  // Construct the formatted date string in "MM/DD/YYYY" format
  const formattedDate = `${month}/${day}/${year}`;

  return formattedDate;
}

// Example usage:
const inputDate = "2001-10-15T19:00:00.000Z";
console.log(convertDateFormat(inputDate)); // Output: 10/15/2001

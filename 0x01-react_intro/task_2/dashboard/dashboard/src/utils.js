//getFullYear function
const getFullYear = () => {
  const current_year = new Date();
  return current_year.getFullYear();
}
const year = getFullYear();
console.log(year);

//getFooterCopy function
const getFooterCopy = (isIndex) => {
  if (isIndex === true) {
    return "Holberton School";
  } else {
    "Holberton School main dashboard";
  }
}
const result = getFooterCopy(true);
console.log(result)

//exporting the functions to be used later
module.exports = {
	getFooterCopy,
	getFullYear,
};

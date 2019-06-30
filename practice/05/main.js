
const countTotalSalary = (salaries) => {
  const values = Object.values(salaries);
  let sumSalary = 0;
  for (const value of values) {
    sumSalary += value;
  } return sumSalary;
};

// const countTotalSalary = (salaries) => {
//   const keys = Object.keys(salaries);
//   let sumSalary = 0;
//   for (const key of keys) {
//     sumSalary += salaries[key];
//   } return sumSalary;
// };

console.log(
  countTotalSalary({}),
); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330

const values = document.querySelectorAll('.size-filter input[type="checkbox"]');

function collectInputData(inputs) {
  const checked = [...values].filter(e => e.checked);
  console.log(checked.map(e => e.value));
}
collectInputData(values);

// =======еще вариант============================================================

// const collectInputData = (inputs) => {
//   const arrayInputs = [...inputs];
//   return arrayInputs.map(e => e.value);
// };
// const inputs = document.querySelectorAll('input[type=checkbox]:checked');
// console.log(collectInputData(inputs));

// =======еще вариант============================================================

// const inputs = document.querySelectorAll('.size-filter input[type="checkbox"]');

// function collectInputData(inputs) {
//   console.log([...inputs].filter(e => e.checked).map(e => e.value));
// }
// collectInputData(inputs);

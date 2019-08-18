const values = document.querySelectorAll('.size-filter input[type="checkbox"]');

function collectInputData(inputs) {
  const checked = [...values].filter(e => e.checked);
  console.log(checked.map(e => e.value));
}

collectInputData(values);


// const inputs = document.querySelectorAll('.size-filter input[type="checkbox"]');

// function collectInputData(inputs) {
//   console.log([...inputs].filter(e => e.checked).map(e => e.value));
// }
// collectInputData(inputs);

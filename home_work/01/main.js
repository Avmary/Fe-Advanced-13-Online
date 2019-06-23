const numbers = [];
let total = 0;
let input;
while (input !== null) {
  input = prompt('Введите число', '');
  if (isNaN(input)) {
    alert('Было введено не число, попробуйте еще раз');
  } else {
    numbers.push(input);
  }
}
if (numbers.length > 0) {
  for (const value of numbers) {
    total += Number(value);
  }
}
console.log('Общая сумма чисел равна - ', total);

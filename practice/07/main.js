const numbers = [12, 15, 25, 37, 41, 62, 74, 83];
const minNumber = numbers[0];
const maxNumber = numbers[numbers.length - 1];
const userInput = prompt(`Введите число от ${minNumber} до ${maxNumber}`, '');
const value = Number(userInput);
const isInArray = numbers.includes(value);
if (isInArray) {
  alert('Поздравляем, Вы угадали!');
} else {
  alert('Сожалеем, Вы не угадали!');
}

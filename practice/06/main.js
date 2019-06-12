const userInput = prompt('Введите произвольное целое число', '');
if (userInput === null) {
  console.log('Ну и ладно, пока!');
} else if (userInput - Math.floor(userInput) === 0 && userInput > 0) {
  console.log('Спасибо!');
} else {
  console.log('Необходимо было ввести целое число!');
}

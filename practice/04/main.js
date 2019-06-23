let userInput = prompt('Введите число больше 100', ' ');
while (userInput < 100) {
  if (userInput === null) {
    break;
  }
  userInput = prompt('Введите число еще раз', ' ');
}

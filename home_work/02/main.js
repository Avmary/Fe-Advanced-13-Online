const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let attemptsLeft = 3;
let userInput;
do {
  userInput = prompt('Введите Ваш пароль', '');
  if (userInput === null) {
    break;
  } else if (!passwords.includes(userInput)) {
    attemptsLeft -= 1;
    alert(`Неверный пароль, у вас осталось ${attemptsLeft} попыток`);
    if (attemptsLeft === 0) { alert('У вас закончились попытки, аккаунт заблокирован!'); }
  } else if (passwords.includes(userInput)) {
    alert('Добро пожаловать!');
    break;
  }
} while (attemptsLeft > 0 && userInput !== null);

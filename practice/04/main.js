const correctPassword = 'jqueryismyjam';
const yourPassword = prompt('Введите пароль доступа', '');
if (yourPassword === correctPassword) {
  console.log('Доступ в секретный бункер разрешен!');
} else if (yourPassword === null) {
  console.log('Была нажата отмена!');
} else {
  console.log('Неверный пароль, активирована система защиты!');
}

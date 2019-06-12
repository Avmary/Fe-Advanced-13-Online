const ADMIN_PASSWORD = 'm4ng0h4ckz';
const message = prompt('Введите пароль', '');
if (message === null) {
  alert('Отменено пользователем!');
} else if (message === ADMIN_PASSWORD) {
  alert('Добро пожаловать!');
} else {
  alert('Доступ запрещен!');
}

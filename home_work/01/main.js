const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
const newLogin = prompt('Введите логин!');
function isLoginValid(login) {
  return login.length >= 4 && login.length <= 16;
}

function isLoginUnique(allLogins, login) {
  return allLogins.includes(login);
}

function addLogin(allLogins, login) {
  isLoginValid(login);
  console.log(isLoginValid(newLogin));
  isLoginUnique(logins, login);
  if (isLoginValid) {
    alert('Ошибка! Логин должен быть от 4 до 16 символов');
  } else if (!isLoginUnique) {
    alert('Такой логин уже используется!');
  } else if (isLoginUnique) {
    logins.push(login);
    alert('Логин успешно добавлен!');
  }
}


addLogin(logins, 'Ajax'); // 'Логин успешно добавлен!'
addLogin(logins, 'robotGoogles'); // 'Такой логин уже используется!'
addLogin(logins, 'Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin(logins, 'jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'

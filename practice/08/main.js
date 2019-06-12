/* eslint-disable no-alert */
const catalog = prompt('Введите номер интересующей Вас категории: 1 - Каталог хостелов, 2 - Каталог бюджетных отелей, 3 - Каталог отелей ***", 4 - Каталог отелей ****", 5 - Каталог лучших отелей');
switch (catalog) {
  case null:
    alert('Очень жаль, приходите еще!');
    break;
  case '1':
    alert('Каталог хостелов');
    break;
  case '2':
    alert('Каталог бюджетных отелей');
    break;
  case '3':
    alert('Каталог отелей ***');
    break;
  case '4':
    alert('Каталог отелей ****');
    break;
  case '5':
    alert('Каталог лучших отелей');
    break;
  default:
    alert('Неверный ввод');
}

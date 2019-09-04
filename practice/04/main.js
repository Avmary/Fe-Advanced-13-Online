/*
  Есть форма с набором радиокнопок. Пользователь выбирает вариант ответа,
  после чего нажимает кнопку "Submit" и происходит отправка формы.

  При отправке формы:
    - не должна перезагружаться страница
    - необходимо получить выбранную опцию и вывести в параграф с классом .result
*/
const refs = {
  inputs: document.querySelectorAll('.options input'),
  result: document.querySelector('.result'),
  submit: document.querySelector('.btn'),
};

function userSelect(event) {
  event.preventDefault();
  const value = [...refs.inputs].find(e => e.checked).value;
  refs.result.textContent = `Result: ${value}`;
}


refs.submit.addEventListener('click', userSelect);

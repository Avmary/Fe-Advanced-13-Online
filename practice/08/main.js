const refs = {
  message: document.querySelector('.message'),
  input: document.querySelector('.input'),
  value: document.querySelector('.input-value'),
};
refs.input.addEventListener('focus', createString);
function createString(event) {
  refs.message.textContent = 'Input is in focus!';
  // console.log(refs.message);
}
refs.input.addEventListener('input', showInputValue);
function showInputValue(event) {
  const inputValue = refs.input.value;
  refs.value.textContent = `Current input value: ${inputValue}`;
  // console.log(refs.value);
}

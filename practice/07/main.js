const inputs = document.querySelectorAll('.input-list input');
[...inputs].map(e => e.addEventListener('blur', validation));

function validation(e) {
  e.preventDefault();
  [...inputs].map((e) => {
    if (+e.dataset.length === e.value.length) {
      e.classList.add('valid');
      e.classList.remove('invalid');
    } else {
      e.classList.add('invalid');
      e.classList.remove('valid');
    }
  });
}

const refs = {
  inputs: document.querySelectorAll('input[type="text"]'),
  result: document.querySelector('.result'),
  btn: document.querySelector('button[data-action="add"]'),
};

refs.btn.addEventListener('click', calc);
function calc(event) {
  event.preventDefault();
  refs.result.textContent = [...refs.inputs].reduce(
    (a, e) => parseFloat(e.value) + a,
    0,
  );
}
// 2 вариант (ментора) ======================================================
// const refs = {
//     result: document.querySelector(".result"),
//     reset: document.querySelector('button[type="reset"]'),
//     inputs: document.querySelectorAll(".expression input")
//   };

//   refs.inputs[1].addEventListener("input", calc);
//   refs.reset.addEventListener("click", reset);

//   function calc(event) {
//     event.preventDefault();
//     refs.result.textContent = Array.from(refs.inputs).reduce(
//       (a, e) => parseFloat(e.value) + a,
//       0
//     );
//   }

//   function reset(event) {
//     event.preventDefault();
//     refs.result.textContent = 0;
//   }


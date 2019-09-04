const btn = document.querySelector('.button');
let count = 0;
btn.addEventListener('click', setCount);


function setCount(event) {
  console.log(btn);
  btn.textContent = ++count;
}


// 2 вариант (ментора)=========================================================
// const state = {
//   button: document.querySelector(".button"),
//   periodElement: document.querySelector(".period"),
//   count: 0,
//   period: 10
// };

// state.button.addEventListener("click", setCount);
// state.periodElement.addEventListener("input", setPeriod);

// function setCount(event) {
//   state.button.textContent = ++state.count % state.period;
// }

// function setPeriod({ target }) {
//   if (Number.isInteger(+target.textContent)) {
//     state.period = +target.textContent;
//   } else {
//     state.period = 10;
//     state.periodElement.textContent = state.period;
//   }
//   state.count = 0;
//   state.button.textContent = state.count;
// }

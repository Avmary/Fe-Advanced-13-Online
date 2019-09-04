const refs = {
  add: document.querySelector('button[data-action="add"]'),
  sub: document.querySelector('button[data-action="sub"]'),
  result: document.querySelector('.value'),
};

function onChange(num) {
  refs.result.textContent = num;
}

class Counter {
  constructor(onChange) {
    this.value = 0;
    this._onChange = onChange.bind(this);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.value += 1;
    this._onChange(this.value);
  }

  decrement() {
    this.value -= 1;
    this._onChange(this.value);
  }
}
// 2 вариант =============================================
// class Counter {
//   constructor(onChange) {
//     this.value = 0;
//     this._onChange = onChange.bind(this);
//   }

//   increment = () => {
//     this.value += 1;
//     this._onChange(this.value);
//   }

//   decrement = () => {
//     this.value -= 1;
//     this._onChange(this.value);
//   }
// }
const counter = new Counter(onChange);

refs.add.addEventListener('click', counter.increment);
refs.sub.addEventListener('click', counter.decrement);

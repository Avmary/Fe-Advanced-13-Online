const filterFromArray = function (arr, ...args) {
  for (let i = arr.length - 1; i >= 0; i -= 1) {
    for (let j = 0; j < args.length; j += 1) {
      if (arr[i] === args[j]) {
        arr.splice(i, 1);
      }
    }
  }
  return arr;
};
// Вызовы функции для проверки
console.log(
  filterFromArray([1, 2, 3, 4, 5], 2, 4),
); // [1, 3, 5]

console.log(
  filterFromArray([12, 4, 3, 8, 17], 3, 29, 18, 4),
); // [12, 8, 17]

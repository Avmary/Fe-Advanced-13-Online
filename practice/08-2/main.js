const filterFromArray = function (arr, ...args) {
  for (let i = 0; i < args.length; i += 1) {
    if (arr.includes(args[i])) {
      const index = arr.indexOf(args[i]);
      arr.splice(index, 1);
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

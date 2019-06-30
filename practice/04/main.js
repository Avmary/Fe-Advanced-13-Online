const isObjectEmpty = obj => Object.keys(obj).length === 0;
console.log(
  isObjectEmpty({}),
); // true

console.log(
  isObjectEmpty({ a: 1 }),
); // false

console.log(
  isObjectEmpty({ a: 1, b: 2 }),
); // false

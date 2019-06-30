/* eslint-disable no-restricted-syntax */
const users = [
  { name: 'Poly', age: 7, mood: 'happy' },
  { name: 'Mango', age: 4, mood: 'blissful' },
  { name: 'Ajax', age: 3, mood: 'tired' },
];

const getAllPropValues = (arr, prop) => {
  const output = [];
  for (const key of arr) {
    if (prop in key) {
      output.push(key[prop]);
    }
  }
  return output;
};

console.log(
  getAllPropValues(users, 'name'),
); // ['Poly', 'Mango', 'Ajax']

console.log(
  getAllPropValues(users, 'mood'),
); // ['happy', 'blissful', 'tired']

console.log(
  getAllPropValues(users, 'active'),
); // []

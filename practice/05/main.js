const numbers = [1, 3, 17, 5, 9, 14, 8, 14, 34, 18, 26];
const num = 10;
const matched = [];
for (const value of numbers) {
  if (value > num) {
    matched.push(value);
  }
}
console.log(matched);

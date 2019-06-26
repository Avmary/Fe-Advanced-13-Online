function findLargestNumber(numbers) {
  let maxNumber = numbers[0];
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > maxNumber) {
      maxNumber = numbers[i];
    }
  }
  return maxNumber;
}
console.log(
  findLargestNumber([1, 2, 3]),
); // 3

console.log(
  findLargestNumber([27, 12, 18, 5]),
); // 27

console.log(
  findLargestNumber([31, 128, 14, 74]),
); // 128

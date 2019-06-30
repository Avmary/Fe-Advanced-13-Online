// const countProps = (obj) => {
//   const key = Object.keys(obj);
//   if (key.length > 0) {
//     return key.length;
//   } return 0;
// };
const countProps = obj => Object.keys(obj).length;
console.log(
  countProps({}),
); // 0

console.log(
  countProps({ a: 1, b: 3, c: 'hello' }),
); // 3

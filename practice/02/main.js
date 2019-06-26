function formatString(str) {
  if (str.length > 40) {
    str = str.substr(0, 40);
    return `${str}...`;
  }
  return str;
}
console.log(
  formatString('Curabitur ligula sapien, tincidunt non.'),
); // вернется оригинальная строка

console.log(
  formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'),
); // вернется форматированная строка

console.log(
  formatString('Curabitur ligula sapien.'),
); // вернется оригинальная строка

console.log(
  formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'),
); // вернется форматированная строка

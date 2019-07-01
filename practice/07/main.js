const names = ['Радар', 'Сканер', 'Дроид', 'Захват', 'Двигатель', 'Топливный бак'];
const prices = [1000, 2000, 1500, 2700, 1600, 8000];
const combine = (names, prices) => {
  const result = [];
  for (const i in names) {
    result.push({ [names[i]]: prices[i] });
  } return result;
};

console.log(combine(names, prices)); // массив объектов со свойствами name и price

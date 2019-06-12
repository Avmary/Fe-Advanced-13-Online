const name = 'Генератор защитного поля';
let price = 1000;
price = 2000;
const result = `"Выбран «${name}», цена за штуку ${price} кредитов"`;
const test = '"Выбран «Генератор защитного поля», цена за штуку 2000 кредитов"';
console.assert(result === test, 'Error in result');
console.log(result);

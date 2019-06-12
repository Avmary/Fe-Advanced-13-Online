const day = 17;
const month = 10;
const year = 2048;
const date = `${day}\\${month}\\${year}`;
const message = `"Доброе утро, cегодня ${date}, за бортом отличная погода!"`;
const test = '"Доброе утро, cегодня 17\\10\\2048, за бортом отличная погода!"';
console.assert(message === test, 'Error in message');
console.log(message);

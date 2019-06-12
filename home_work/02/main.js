const credits = 23580;
const pricePerDroid = 3000;
const droidQuantity = prompt('Укажите необходимое количество', '');
const totalPrice = pricePerDroid * droidQuantity;
const remainCredits = credits - totalPrice;
let droidEnd;


// окончания сделал с помощью ветвлений, но если credits будет увеличиваться - нужно писать функцию.

if (droidQuantity === '1') {
  droidEnd = 'дроид';
} else if (droidQuantity >= 2 && droidQuantity <= 4) {
  droidEnd = 'дроида';
} else {
  droidEnd = 'дроидов';
}

if (droidQuantity === null) {
  console.log('Отменено пользователем!');
} else if (totalPrice > credits) {
  console.log('Недостаточно средств!');
} else {
  console.log(`Вы купили ${droidQuantity} ${droidEnd}, на счету осталось ${remainCredits} кредитов`);
}

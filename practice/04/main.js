const getActiveGuests = guests => guests.filter(guest => guest.isActive);
const guests = [
  { name: 'Mango', age: 20, isActive: true },
  { name: 'Poly', age: 18, isActive: false },
  { name: 'Ajax', age: 30, isActive: true },
  { name: 'Chelsey', age: 45, isActive: false },
];

  // Вызовы функции для проверки
console.log(getActiveGuests(guests)); // массив из 2-х объектов Mango и Ajax

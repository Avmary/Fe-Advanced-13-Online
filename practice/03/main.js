const setGuestState = (guests, period) => guests.map(guest => (guest.inactiveDays > period
  ? { ...guest, isActive: false } : { ...guest, isActive: true }));
const guests = [
  { name: 'Mango', inactiveDays: 15, isActive: true },
  { name: 'Poly', inactiveDays: 8, isActive: false },
  { name: 'Ajax', inactiveDays: 32, isActive: false },
  { name: 'Chelsey', inactiveDays: 85, isActive: true },
];

// Вызовы функции для проверки
console.log(
  setGuestState(guests, 10),
); // Объекты Mango, Ajax, Chelsey получат isActive false, а Poly наоборот true

console.log(
  setGuestState(guests, 20),
); // Объекты Ajax, Chelsey получат isActive false, а Mango и Poly наоборот true

console.log(
  setGuestState(guests, 50),
); // Объект Chelsey получит isActive false, а Mango, Poly и Ajax наоборот true

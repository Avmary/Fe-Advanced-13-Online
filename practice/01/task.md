/*
* Есть массив имен пользователей
* Используя методы массива, последовательно выполнить указанные операции
*/

const users = ["Mango", "Poly", "Ajax", "Chelsey"];

// Удалить первый элемент массива
console.log(users); // ["Poly", "Ajax", "Chelsey"]

// Удалить последний элемент массива
console.log(users); // ["Poly", "Ajax"]

// Добавить в начало массива пользователя "Lux"
console.log(users); // ["Lux", "Poly", "Ajax"]

// Добавить в конец массива два пользователя ("Jay" и "Kiwi") за одну операцию
console.log(users); //  ["Lux", "Poly", "Ajax", "Jay", "Kiwi"]

// Удалить из массива элемент хранящийся в переменной userToDelete
const userToDelete = "Ajax";
console.log(users); //  ["Lux", "Poly", "Jay", "Kiwi"]

// Добавить в массив пользователя "Kong", перед пользователем хранящейся в переменной userToInsertBefore
const userToInsertBefore = "Jay";
console.log(users); //  ["Lux", "Poly", "Kong", "Jay", "Kiwi"]

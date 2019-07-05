const Storage = function (items) {
  this.items = items,
  this.getItems = function () {
    return this.items;
  },
  this.addItem = function (item) {
    items.push(item);
  },
  this.removeItem = function (item) {
    for (const i of this.items) {
      if (i === item) {
        const index = this.items.indexOf(i);
        this.items.splice(index, 1);
      }
    }
  };
};
const storage = new Storage([
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
]);

const items = storage.getItems();
console.log(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');
console.log(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Пролонгер');
console.log(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]

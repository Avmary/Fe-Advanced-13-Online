const User = function (name, age, friends) {
  this.name = name,
  this.age = age;
  this.friends = friends,

  this.getInfo = function () {
    console.log(`User ${name} is ${age} years old and has ${friends} friends`);
  };
};

const mango = new User('Mango', 2, 20);
mango.getInfo(); // User Mango is 2 years old and has 20 friends

const poly = new User('Poly', 3, 17);
poly.getInfo(); // User Poly is 3 years old and has 17 friends


let user = {
  data: [
    { name: 'T. Woods', age: 37 },
    { name: 'P. Mickelson', age: 43 },
  ],
  clickHandler (event) {
      var randomNum = ((Math.random () * 2 | 0) + 1) - 1; 
//  Случайное число от 0 до 1.        
//  Эта строка добавляет случайного человека из массива данных в текстовое поле.        
$("input").val(this.data[randomNum].name + " " + this.data[randomNum].age);
  },
};
//  Назначаем eventHandler на событие по клику на кнопку$ ("button").click (user.clickHandler);

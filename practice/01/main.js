const Account = function Account(login, email) {
  this.login = login;
  this.email = email;
};
Account.prototype.getInfo = function () {
  console.log(`Login: ${this.login}, Email: ${this.email}`);
};


const account = new Account('Mangozedog', 'mango@dog.woof');

console.log(Account.prototype.getInfo); // function
account.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

const user = new Account('user', 'user@mail.com');
user.getInfo();

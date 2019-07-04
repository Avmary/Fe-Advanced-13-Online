/*  
 * Расставь отсутствующие this в конструкторе Account
*/

function Account(login, password, type = "regular") {
  login = login;
  password = password;
  type = type;

  changePassword = function(newPassword) {
    password = newPassword;
  };

  getInfo = function() {
    console.log(`
      Login: ${login}, 
      Pass: ${password}, 
      Type: ${type}
    `);
  };
}

const account = new Account("Mango", "qwe123", "premium");

console.log(account.login); // 'Mango'
console.log(account.password); // 'qwe123'
console.log(account.type); // 'premium'

account.changePassword("asdzxc");
console.log(account.password); // 'asdzxc'

account.getInfo(); // Login: 'Mango', Pass: 'asdzxc', Type: 'premium'

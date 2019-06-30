const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

user.mood = 'happy';
user.hobby = 'javascript';
user.premium = false;
console.log(user);

const outputByKeyes = function (obj) {
  let output = '\n';
  const keys = Object.keys(user);
  for (const key of keys) {
    output += `${key}: ${typeof obj[key] === 'string' ? `'${obj[key]}'` : obj[key]}\n`;
  } return output;
};
console.log(outputByKeyes(user));

const outputByEntries = function (obj) {
  let output = '\n';
  const entries = Object.entries(user);
  for (const entry of entries) {
    const key = entry[0];
    const value = entry[1];
    output += `${key}: ${typeof value === 'string' ? `'${value}'` : value}\n`;
  } return output;
};
console.log(outputByEntries(user));

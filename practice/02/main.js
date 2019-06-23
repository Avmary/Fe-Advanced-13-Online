const users = ['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'];
let i = 0;

while (i < users.length) {
  const index = 1 + users.indexOf(users[i]);
  const name = users[i];
  const elem = `${index} - ${name}`;
  console.log(elem);
  i += 1;
}

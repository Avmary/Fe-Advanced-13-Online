const elements = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];
const list = document.querySelector('.list');
function setListContent(arr) {
  const item = arr.map((e) => {
    const li = document.createElement('li');
    li.textContent = e;
    return li;
  });
  list.append(...item);
}
setListContent(elements);

//= ============= 2 Вариант =====================================
// const elements = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];
// const ref = {
//   list: document.querySelector('.list'),
// };
// function setListContent(arr, parent) {
//   const list = document.createElement('ul');
//   list.classList.add('list');
//   arr.map((e) => {
//     const li = document.createElement('li');
//     li.textContent = e;
//     list.appendChild(li);
//   });
//   parent.replaceWith(list);
// }
// setListContent(elements, ref.list);
//= ============= 3 Вариант =====================================

// const elements = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];
// const ref = {
//   list: document.querySelector('.list'),
// };
// function setListContent(arr, parent) {
//   parent.innerHTML = '';
//   const list = arr.map((e) => {
//     const li = document.createElement('li');
//     li.textContent = e;
//     return li;
//   });
//   parent.append(...list);
// }
// setListContent(elements, ref.list);

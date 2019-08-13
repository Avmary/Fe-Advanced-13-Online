const categories = document.querySelectorAll('.categories > li');
console.log(categories);
function getData(list) {
  return [...list].map(
    e => `Категория : ${e.firstChild.textContent.trim()}
Количество вложенных li : ${e.querySelectorAll('ul > li').length}`,
  ).join('\n');
}
console.log(getData(categories));

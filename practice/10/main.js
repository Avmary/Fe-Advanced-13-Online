const refs = {
  menu: document.querySelector('.js-menu'),
};
refs.menu.addEventListener('click', addActiveClass);
function addActiveClass(event) {
  event.preventDefault();
  const target = event.target;
  if (target.nodeName !== 'A') return;
  setActiveClass(target);
}
function setActiveClass(nextActiveClass) {
  const currentActiveClass = refs.menu.querySelector('a.active');
  if (currentActiveClass) {
    currentActiveClass.classList.remove('active');
  }
  nextActiveClass.classList.add('active');
}

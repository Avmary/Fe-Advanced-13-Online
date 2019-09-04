function createElem(tag, className, url = null, alt = null) {
  const element = document.createElement(tag);
  className.split(' ').map(e => element.classList.add(e));
  if (url) {
    element.src = url;
  }
  if (alt) {
    element.alt = alt;
  }
  return element;
}
function createItem({ url, alt }) {
  const li = createElem('li', 'gallery-item');
  const img = createElem('img', 'gallery-img', url, alt);
  li.append(img);
  return li;
}

function renderNoteList(ref, arr) {
  const elem = ref.cloneNode(false);
  elem.append(...arr.map(e => createItem(e)));
  ref.replaceWith(elem);
}

renderNoteList(document.querySelector('.gallery'), galleryItems);

import createListItem from './createListItem';

function renderNoteList(listRef, notes) {
  listRef.innerHTML = '';
  const note = notes.map(item => createListItem(item));
  listRef.append(...note);
  return note;
}

export default renderNoteList;
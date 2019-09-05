refs.search.addEventListener('input', filterNotes);

function filterNotes({ target }) {
  renderNoteList(refs.listRef, notepad.filterNotesByQuery(target.value));
}

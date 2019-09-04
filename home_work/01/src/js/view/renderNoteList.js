function renderNoteList(listRef, notes) {
  const note = notes.map(item => createListItem(item));
  listRef.append(...note);
  return note;
}

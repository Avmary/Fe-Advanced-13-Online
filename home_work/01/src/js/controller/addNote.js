refs.submit.addEventListener('submit', addNote);

function addNote(event) {
  event.preventDefault();
  if (refs.title.value.length === 0 || refs.body.value.length === 0) {
    alert('Необходимо заполнить все поля!');
    event.target.reset();
    return;
  }
  addListItem(refs.listRef, notepad.saveNote({
    id: generateUniqueId(),
    title: refs.title.value,
    body: refs.body.value,
  }));
  event.target.reset();
}

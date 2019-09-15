import notepad from '../app';
import addListItem from '../view/addListItem'
import refs from '../view/refs';

function addNote(event) {
  const shortid = require('shortid');
  event.preventDefault();
  if (refs.title.value.length === 0 || refs.body.value.length === 0) {
    alert('Необходимо заполнить все поля!');
    event.target.reset();
    return;
  }
  addListItem(refs.listRef, notepad.saveNote({
    id: shortid.generate(),
    title: refs.title.value,
    body: refs.body.value,
  }));
  event.target.reset();
}

export default addNote;

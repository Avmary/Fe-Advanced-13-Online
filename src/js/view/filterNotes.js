import renderNoteList from './renderNoteList';
import notepad from '../app';
import refs from './refs';

function filterNotes({ target }) {
  renderNoteList(refs.listRef, notepad.filterNotesByQuery(target.value));
}

export default filterNotes;
import Notepad from './Notepad';
import initialNotes from './db';
import renderNoteList from './view/renderNoteList';
import refs from './view/refs';
import addNote from './controller/addNote';
import removeListItem from './controller/removeListItem';
import filterNotes from './view/filterNotes';

const notepad = new Notepad(initialNotes);
renderNoteList(refs.listRef, notepad.notes);


refs.submit.addEventListener('submit', addNote);
refs.search.addEventListener('input', filterNotes);
refs.listRef.addEventListener('click', removeListItem);

export default notepad;
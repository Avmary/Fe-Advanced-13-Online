import notepad from '../app';

function removeListItem({ target }) {
  if (target.nodeName !== 'I') return;
  if (target.textContent === 'delete') {
    const li = target.closest('.note-list__item');
    // const id = li.dataset.id;
    const { id } = li.dataset;
    li.remove();
    notepad.deleteNote(id);
    // console.log(notepad.notes);
  }
}

export default removeListItem;
function createElem(
  tag,
  className,
  text = null,
  id = null,
) {
  const element = document.createElement(tag);
  className.split(' ').map(e => element.classList.add(e));
  if (text) {
    element.textContent = text;
  }
  if (id) {
    element.setAttribute('data-id', id);
  }
  return element;
}

function createNoteContent(title, body) {
  const noteContent = createElem('div', 'note__content');
  noteContent.append(createElem('h2', 'note__title', title));
  noteContent.append(createElem('p', 'note__body', body));
  return noteContent;
}

function createActionButton(action, text) {
  const button = createElem('button', 'action');
  button.setAttribute('data-action', 'action');
  const i = createElem('i', 'material-icons action__icon', text);
  button.append(i);
  return button;
}

function createNoteFooter(priority) {
  const footerContent = createElem('footer', 'note__footer');
  const leftSection = createElem('section', 'note__section');
  const rightSection = createElem('section', 'note__section');
  leftSection.append(createActionButton(NOTE_ACTIONS.INCREASE_PRIORITY, ICON_TYPES.ARROW_DOWN));
  leftSection.append(createActionButton(NOTE_ACTIONS.DECREASE_PRIORITY, ICON_TYPES.ARROW_UP));
  leftSection.append(createElem('span', 'note__priority', `Priority: ${priority}`));
  rightSection.append(createActionButton(NOTE_ACTIONS.EDIT, ICON_TYPES.EDIT));
  rightSection.append(createActionButton(NOTE_ACTIONS.DELETE, ICON_TYPES.DELETE));
  footerContent.append(leftSection);
  footerContent.append(rightSection);
  return footerContent;
}

function createListItem({
  id, title, body, priority,
}) {
  const li = createElem('li', 'note-list__item', null, id);
  const note = createElem('div', 'note');
  li.append(note);
  note.append(createNoteContent(title, body));
  note.append(createNoteFooter(priority));
  return li;
}

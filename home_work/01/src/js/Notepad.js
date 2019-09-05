class Notepad {
  constructor(notes = []) {
    this._notes = notes;
  }

  get notes() {
    return this._notes;
  }

  findNoteById(id) {
    const result = this._notes.find(e => e.id === id);
    return result;
  }

  saveNote(note) {
    note.priority = PRIORITY_TYPES.LOW;
    this._notes.push(note);
    return note;
  }

  deleteNote(id) {
    for (const index in this._notes) {
      if (this._notes[index].id === id) {
        this._notes.splice(index, 1);
      }
    }
  }

  updateNoteContent(id, updatedContent) {
    return Object.assign(this.findNoteById(id), updatedContent);
  }

  updateNotePriority(id, priority) {
    for (const obj of this._notes) {
      this.findNoteById(id).priority = priority;
      return obj;
    }
  }

  filterNotesByQuery(query) {
    const newArray = [];
    for (const obj of this._notes) {
      const titleLowCase = obj.title.toLowerCase();
      const bodyLowCase = obj.body.toLowerCase();
      if (titleLowCase.includes(query) || bodyLowCase.includes(query)) { newArray.push(obj); }
    } return newArray;
  }

  filterNotesByPriority(priority) {
    const newArray = [];
    for (const obj of this._notes) {
      if (obj.priority === priority) {
        newArray.push(obj);
      }
    } return newArray;
  }
}

import React from 'react';

const NoteForm = props => {
  let note;
  props.notesData.map(noteData => {
    if (noteData.id == props.selectedNoteId) {
      note = noteData;
    }
  });

  let handleUpdate = (event) => {
    event.preventDefault();
    alert("Note updated");
  };

  let handleDelete = (event) => {
    event.preventDefault();
    alert("Note deleted");
  };

  return (
    <div>
      <div className="note-form-header">
        <h5>Updated on {note.updatedAt}</h5>
        <button type="button" className="button" onClick={handleUpdate}>Update</button>
        <button type="button" className="button" onClick={handleDelete}>Delete</button>
      </div>
      <textarea defaultValue={note.body}></textarea>
    </div>
  )
};

export default NoteForm;

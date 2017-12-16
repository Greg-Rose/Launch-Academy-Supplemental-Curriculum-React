import React from 'react';

const NoteForm = props => {
  let noteDate;
  let noteBody;
  props.notes.map(noteData => {
    if (noteData.id == props.selectedNoteId) {
      noteDate = noteData.updatedAt;
      noteBody = noteData.body;
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
  if (props.notes.length) {
    return (
      <div>
        <div className="note-form-header">
          <h5>Updated on {noteDate}</h5>
          <button type="button" className="button" onClick={handleUpdate}>Update</button>
          <button type="button" className="button" onClick={handleDelete}>Delete</button>
        </div>
        <textarea defaultValue={noteBody}></textarea>
      </div>
    )
  } else {
    return (<div />)
  }
};

export default NoteForm;

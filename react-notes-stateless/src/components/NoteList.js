import React from 'react';
import Note from './Note';

const NoteList = props => {
  let notes = props.notesData.map(noteData => {
    let className;
    if (noteData.id == props.selectedNoteId) {
      className = "selected";
    }

    let handleClick = () => {
      alert("Note clicked");
    };

    return (
      <Note
        key={noteData.id}
        note={noteData}
        className={className}
        handler={handleClick}
      />
    )
  });

  return (
    <div className="row note-list">
      {notes}
    </div>
  )
};

export default NoteList;

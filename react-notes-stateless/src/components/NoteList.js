import React from 'react';
import Note from './Note';

const NoteList = props => {
  let notes = props.notesData.map(noteData => {
    return (
      <Note
        key={noteData.id}
        note={noteData}
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

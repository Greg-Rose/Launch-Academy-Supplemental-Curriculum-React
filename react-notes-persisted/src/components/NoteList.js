import React from 'react';
import Note from './Note';

const NoteList = props => {

  let notes = props.notes;

  if(props.searchText.length > 0) {
    notes = notes.filter(noteData => noteData.body.toLowerCase().includes(props.searchText));
  }

  let outputNotes = notes.map(noteData => {
    let className;
    if (noteData.id == props.selectedNoteId) {
      className = "selected";
    }

    let handleClick = () => {
      props.selectNoteHandler(noteData.id);
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
      {outputNotes}
    </div>
  )
};

export default NoteList;

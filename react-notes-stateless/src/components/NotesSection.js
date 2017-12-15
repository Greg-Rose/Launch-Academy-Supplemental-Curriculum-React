import React from 'react';
import NoteList from './NoteList';
import NoteForm from './NoteForm';
import NoteListControls from './NoteListControls';

const NotesSection = props => {

  return (
    <div className="row notes-section">
      <div className="large-6 columns" id="notes-list-pane">
        <NoteListControls />
        <NoteList notesData={props.notesData} selectedNoteId={props.selectedNoteId} />
      </div>
      <div className="large-6 columns" id="note-form-pane">
        <NoteForm notesData={props.notesData} selectedNoteId={props.selectedNoteId} />
      </div>
    </div>
  )
};

export default NotesSection;

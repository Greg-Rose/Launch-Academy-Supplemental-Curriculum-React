import React from 'react';
import NoteList from './NoteList';
import NoteForm from './NoteForm';

const NotesSection = props => {

  return (
    <div className="row test">
      <div className="large-6 columns" id="notes-list-pane">
        <NoteList notesData={props.notesData} />
      </div>
      <div className="large-6 columns" id="note-form-pane">
        <NoteForm />
      </div>
    </div>
  )
};

export default NotesSection;
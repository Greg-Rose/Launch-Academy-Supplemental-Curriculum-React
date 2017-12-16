import React from 'react';
import NoteList from './NoteList';
import NoteForm from './NoteForm';
import NoteListControls from './NoteListControls';

class NotesSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      selectedNoteId: null
    };
  }

  render() {
    return (
      <div className="row notes-section">
        <div className="large-6 columns" id="notes-list-pane">
          <NoteListControls />
          <NoteList notes={this.props.notes} selectedNoteId={this.props.selectedNoteId} />
        </div>
        <div className="large-6 columns" id="note-form-pane">
          <NoteForm notes={this.props.notes} selectedNoteId={this.props.selectedNoteId} />
        </div>
      </div>
    )
  }
};

export default NotesSection;

import React from 'react';
import NoteList from './NoteList';
import NoteForm from './NoteForm';
import NoteListControls from './NoteListControls';

class NotesSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      selectedNoteId: null,
      searchText: ''
    };
  }

  render() {
    let addNote = () => {
      let id;
      if (this.state.notes.length) {
        id = this.state.notes[0].id++;
      } else {
        id = 1;
      }

      let date = new Date();
      let formattedDated = (date.getMonth()+1) + '/' + date.getDate() + '/' + date.getYear().toString().substr(-2);

      let newNote = {
        id: id,
        body: '',
        updatedAt: formattedDated
      };

      let notes = this.state.notes;
      notes.push(newNote);

      this.setState({
        notes: notes,
        selectedNoteId: newNote.id
      });

      this.props.addNoteToFolder(id);
    };

    let selectNoteHandler = (noteId) => {
      this.setState({selectedNoteId: noteId});
    };

    let updateNoteHandler = (noteBody) => {
      let index = this.state.notes.findIndex((note) => {
        return note.id === this.state.selectedNoteId;
      });
      let notes = this.state.notes;
      notes[index].body = noteBody;
      this.setState({notes: notes});
    };

    let deleteNoteHandler = () => {
      let newNotes = this.state.notes.filter(note => note.id != this.state.selectedNoteId);
      let noteId = this.state.selectedNoteId;
      this.setState({
        notes: newNotes,
        selectedNoteId: null
      });
      this.props.removeNoteFromFolder(noteId);
    };

    let handleSearch = (searchText) => {
      this.setState({
        searchText: searchText.toLowerCase()
      });

      if(this.state.searchText.length > 0) {
        notes = notes.filter(noteData => noteData.body.toLowerCase().includes(this.state.searchText));
        if(notes.length) {
          this.setState({selectedNoteId: notes[0].id});
        } else {
          this.setState({selectedNoteId: null});
        }
      }
    };

    let notes = this.state.notes.filter(noteData => this.props.notes.includes(noteData.id));

    let selectedNote = notes.find(noteData => noteData.id == this.state.selectedNoteId);

    return (
      <div className="row notes-section">
        <div className="large-6 columns" id="notes-list-pane">
          <NoteListControls addNote={addNote} searchHandler={handleSearch} />
          <NoteList
            notes={notes}
            selectedNoteId={this.state.selectedNoteId}
            selectNoteHandler={selectNoteHandler}
            searchText={this.state.searchText}
          />
        </div>
        <div className="large-6 columns" id="note-form-pane">
          <NoteForm
            note={selectedNote}
            selectedNoteId={this.state.selectedNoteId}
            updateNoteHandler={updateNoteHandler}
            deleteNoteHandler={deleteNoteHandler}
          />
        </div>
      </div>
    )
  }
};

export default NotesSection;

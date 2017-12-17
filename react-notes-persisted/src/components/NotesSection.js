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

  componentWillReceiveProps(nextProps) {
    let folderId = nextProps.selectedFolderId;
    if(folderId != null) {
      fetch('http://localhost:4567/folders/' + folderId + '/notes.json')
        .then(response => {
          if (response.ok) {
            return response;
          } else {
            let errorMessage = `${response.status} (${response.statusText})`,
                error = new Error(errorMessage);
            throw(error);
          }
        })
        .then(response => response.json())
        .then(body => {
          this.setState({
            notes: body.notes,
            selectedNote: null
          });
        })
        .catch(error => console.error(`Error in fetch: ${error.message}`));
    }
  }

  render() {
    let addNote = () => {
      let folderId = this.props.selectedFolderId;
      let newNote = {
        note: {
          body: 'New Note'
        }
      };

      let jsonStringData = JSON.stringify(newNote);

      fetch('http://localhost:4567/folders/' + folderId + '/notes.json', {
        method: 'post',
        body: jsonStringData
      })
        .then(response => {
          if (response.ok) {
            return response;
          } else {
            let errorMessage = `${response.status} (${response.statusText})`,
                error = new Error(errorMessage);
            throw(error);
          }
        })
        .then(response => response.json())
        .then(body => {
          this.setState({
            notes: [...this.state.notes, body.note],
            selectedNoteId: body.note.id
          });
        })
        .catch(error => console.error(`Error in fetch: ${error.message}`));
    };

    let selectNoteHandler = (noteId) => {
      this.setState({selectedNoteId: noteId});
    };

    let updateNoteHandler = (noteBody) => {
      let note = {
        note: {
          body: noteBody
        }
      };

      let jsonStringData = JSON.stringify(note);

      fetch('http://localhost:4567/notes/' + this.state.selectedNoteId + '.json', {
        method: 'PATCH',
        body: jsonStringData
      })
        .then(response => {
          if (response.ok) {
            let index = this.state.notes.findIndex((noteData) => {
              return noteData.id === this.state.selectedNoteId;
            });
            let notes = this.state.notes;
            notes[index].body = noteBody;
            this.setState({notes: notes});
          } else {
            let errorMessage = `${response.status} (${response.statusText})`,
                error = new Error(errorMessage);
            throw(error);
          }
        })
        .catch(error => console.error(`Error in fetch: ${error.message}`));
    };

    let deleteNoteHandler = () => {
      fetch('http://localhost:4567/notes/' + this.state.selectedNoteId + '.json', {
        method: 'DELETE'
      })
        .then(response => {
          if (response.ok) {
            let newNotes = this.state.notes.filter(note => note.id != this.state.selectedNoteId);
            this.setState({
              notes: newNotes,
              selectedNoteId: null
            });
          } else {
            let errorMessage = `${response.status} (${response.statusText})`,
                error = new Error(errorMessage);
            throw(error);
          }
        })
        .catch(error => console.error(`Error in fetch: ${error.message}`));
    };

    let handleSearch = (searchText) => {
      this.setState({
        searchText: searchText.toLowerCase()
      });

      if(this.state.searchText.length > 0) {
        notes = this.state.notes.filter(noteData => noteData.body.toLowerCase().includes(this.state.searchText));
        if(notes.length) {
          this.setState({selectedNoteId: notes[0].id});
        } else {
          this.setState({selectedNoteId: null});
        }
      }
    };

    let notes = this.state.notes;
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
            updateNoteHandler={updateNoteHandler}
            deleteNoteHandler={deleteNoteHandler}
          />
        </div>
      </div>
    )
  }
};

export default NotesSection;

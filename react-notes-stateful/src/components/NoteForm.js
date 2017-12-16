import React from 'react';

class NoteForm extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    if(this.props.note != undefined) {
      document.getElementById('note-textarea').value = this.props.note.body;
      document.getElementById('form-date').innerHTML = this.props.note.updatedAt;
    }
  }

  render() {
    let noteDate;
    let noteBody;
    if(this.props.note != undefined) {
      noteDate = this.props.note.updatedAt;
      noteBody = this.props.note.body;
    }

    let handleUpdate = (event) => {
      event.preventDefault();
      let updatedNoteBody = document.getElementById('note-textarea').value;
      this.props.updateNoteHandler(updatedNoteBody);
    };

    let handleDelete = (event) => {
      event.preventDefault();
      this.props.deleteNoteHandler();
    };
    if (this.props.note != undefined) {
      return (
        <div>
          <div className="note-form-header">
            <h5>Updated on <span id="form-date">{noteDate}</span></h5>
            <button type="button" className="button" onClick={handleUpdate}>Update</button>
            <button type="button" className="button" onClick={handleDelete}>Delete</button>
          </div>
          <textarea defaultValue={noteBody} id="note-textarea"></textarea>
        </div>
      )
    } else {
      return (<div />)
    }
  }
};

export default NoteForm;

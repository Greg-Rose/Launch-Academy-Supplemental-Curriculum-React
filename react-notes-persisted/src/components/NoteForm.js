import React from 'react';

class NoteForm extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    if(this.props.note != undefined) {
      document.getElementById('note-textarea').value = this.props.note.body;
      document.getElementById('form-date').innerHTML = this.props.note.updated_at;
    }
  }

  render() {
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
            <h6>Updated on <span id="form-date">{this.props.note.updated_at}</span></h6>
            <button type="button" className="button" onClick={handleUpdate}>Update</button>
            <button type="button" className="button" onClick={handleDelete}>Delete</button>
          </div>
          <textarea defaultValue={this.props.note.body} id="note-textarea"></textarea>
        </div>
      )
    } else {
      return (<div />)
    }
  }
};

export default NoteForm;

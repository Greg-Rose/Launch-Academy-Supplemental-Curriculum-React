import React from 'react';

const NoteListControls = props => {

  return (
    <div className="row">
      <div className="note-list-controls">
        <a className="button" href="#">
          <i className="fa fa-sticky-note-o" aria-hidden="true"></i>
          New Note
        </a>
        <div className="search-form">
          <div className="input-group">
            <span className="input-group-label">
              <i className="fa fa-search" aria-hidden="true"></i>
            </span>
            <input className="input-group-field" type="text"></input>
          </div>
        </div>
      </div>
    </div>
  )
};

export default NoteListControls;

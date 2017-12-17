import React from 'react';

const NoteListControls = props => {
  let handleClick = (event) => {
    event.preventDefault();
    props.addNote();
  };

  let handleSearch = () => {
    let text = document.getElementById('searchInput').value;
    props.searchHandler(text);
  };

  return (
    <div className="row">
      <div className="note-list-controls">
        <a className="button" href="#" onClick={handleClick}>
          <i className="fa fa-sticky-note-o" aria-hidden="true"></i>
          New Note
        </a>
        <div className="search-form">
          <div className="input-group">
            <span className="input-group-label">
              <i className="fa fa-search" aria-hidden="true"></i>
            </span>
            <input
              className="input-group-field"
              id="searchInput"
              type="text"
              onChange={handleSearch}
            >
            </input>
          </div>
        </div>
      </div>
    </div>
  )
};

export default NoteListControls;

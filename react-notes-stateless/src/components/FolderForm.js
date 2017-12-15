import React from 'react';

const FolderForm = props => {
  let handleClick = (event) => {
    event.preventDefault();
    alert("Folder created");
  };

  return (
    <div className="row folder-form-div">
      <form onSubmit={handleClick}>
        <div className="large-12 columns">
          <div className="input-group">
            <div className="input-group-button">
              <button type="submit">
                <i className="fa fa-plus-circle" aria-hidden="true"></i>
              </button>
            </div>
            <input className="input-group-field" type="text"></input>
          </div>
        </div>
      </form>
    </div>
  )
};

export default FolderForm;

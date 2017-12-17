import React from 'react';

const FolderForm = props => {
  let handleClick = (event) => {
    event.preventDefault();
    let newName = document.getElementById('new-folder-input');
    if(newName.value.trim().length) {
      props.addFolder(newName.value);
      newName.value = '';
    }
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
            <input className="input-group-field" id="new-folder-input" type="text"></input>
          </div>
        </div>
      </form>
    </div>
  )
};

export default FolderForm;

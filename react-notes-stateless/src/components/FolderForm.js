import React from 'react';

const FolderForm = props => {
  return (
    <div className="row folder-form-div">
      <form>
        <div className="large-12 columns">
          <div className="input-group">
            <div className="input-group-button">
              <i className="fa fa-plus-circle" aria-hidden="true"></i>
            </div>
            <input className="input-group-field" type="text"></input>
          </div>
        </div>
      </form>
    </div>
  )
};

export default FolderForm;

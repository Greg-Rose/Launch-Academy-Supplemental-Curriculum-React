import React from 'react';

const Folder = props => {
  let name = props.folder.name;
  let notes = props.folder.notes;

  return (
    <div>
      <div className="large-12 columns">
        <h5>{name}</h5>
      </div>
    </div>
  )
};

export default Folder;

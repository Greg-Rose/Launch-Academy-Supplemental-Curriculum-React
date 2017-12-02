import React from 'react';
import Folder from './Folder';

const FolderList = props => {
  let folders = props.folders.map(folderData => {
    return (
      <Folder
        key={folderData.id}
        folder={folderData}
      />
    )
  });

  return (
    <div className="row">
      {folders}
    </div>
  )
};

export default FolderList;

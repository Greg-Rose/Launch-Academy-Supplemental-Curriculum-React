import React from 'react';
import Folder from './Folder';

const FolderList = props => {
  let folders = props.folders.map(folderData => {
    let className;
    if (folderData.id == props.selectedFolderId) {
      className = "selected";
    }

    let handleClick = () => {
      props.selectFolderHandler(folderData.id);
    };

    return (
      <Folder
        key={folderData.id}
        folder={folderData}
        className={className}
        handler={handleClick}
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

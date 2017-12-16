import React from 'react';
import FolderList from './FolderList';
import FolderForm from './FolderForm';
import NotesSection from './NotesSection';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      folders: [],
      selectedFolderId: null
    };
  }

  render() {
    let addFolder = (folderName) => {
      let id;
      if (this.state.folders.length) {
        id = this.state.folders[0].id++;
      } else {
        id = 1;
      }

      let newFolder = {
        id: id,
        name: folderName,
        notes: []
      };

      this.setState({
        folders: [...this.state.folders, newFolder],
        selectedFolderId: newFolder.id
      });
    };

    let selectFolderHandler = (folderId) => {
      this.setState({
        selectedFolderId: folderId
      });
    };

    let selectedFoldersNotes = [];
    if (this.state.selectedFolderId != null) {
      selectedFoldersNotes = this.state.folders.find(folder => folder.id === this.state.selectedFolderId).notes;
    }

    return (
      <div className="main-div">
        <div className="row">
          <div className="large-4 columns" id="left-pane">
            <FolderList folders={this.state.folders} selectedFolderId={this.state.selectedFolderId} selectFolderHandler={selectFolderHandler} />
            <FolderForm addFolder={addFolder} />
          </div>
          <div className="large-8 columns" id="right-pane">
            <NotesSection notes={selectedFoldersNotes} />
          </div>
        </div>
      </div>
    );
  }
};

export default App;

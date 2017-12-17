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

  componentDidMount() {
    fetch('http://localhost:4567/folders.json')
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
              error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => response.json())
      .then(body => {
        this.setState({
          folders: body.folders
        });
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    let addFolder = (folderName) => {
      let newFolder = {
        folder: {
          name: folderName
        }
      };

      let jsonStringData = JSON.stringify(newFolder);

      fetch('http://localhost:4567/folders.json', {
        method: 'post',
        body: jsonStringData
      })
        .then(response => {
          if (response.ok) {
            return response;
          } else {
            let errorMessage = `${response.status} (${response.statusText})`,
                error = new Error(errorMessage);
            throw(error);
          }
        })
        .then(response => response.json())
        .then(body => {
          this.setState({
            folders: [...this.state.folders, body.folder],
            selectedFolderId: body.folder.id
          });
        })
        .catch(error => console.error(`Error in fetch: ${error.message}`));
    };

    let selectFolderHandler = (folderId) => {
      this.setState({
        selectedFolderId: folderId
      });
    };

    return (
      <div className="main-div">
        <div className="row">
          <div className="large-4 columns" id="left-pane">
            <FolderList
              folders={this.state.folders}
              selectedFolderId={this.state.selectedFolderId}
              selectFolderHandler={selectFolderHandler}
            />
            <FolderForm addFolder={addFolder} />
          </div>
          <div className="large-8 columns" id="right-pane">
            <NotesSection
              selectedFolderId={this.state.selectedFolderId}
            />
          </div>
        </div>
      </div>
    );
  }
};

export default App;

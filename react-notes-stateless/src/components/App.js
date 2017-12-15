import React from 'react';
import FolderList from './FolderList';
import FolderForm from './FolderForm';
import NotesSection from './NotesSection';

const data = {
  folders: [ {
      id: 1,
      name: 'Useful Regular Expressions',
      notes: []
    },
    {
      id: 2,
      name: 'App Ideas',
      notes: [1, 2, 3]
    }
  ],
  notes: [
    {
      id: 1,
      body: 'InstaWoof - Instagram for dogs',
      updatedAt: '2/1/16',
    },
    {
      id: 2,
      body: "Whiskr - it's like Tinder but for cats",
      updatedAt: '12/25/15',
    },
    {
      id: 3,
      body: 'Ka-Yak - travel site for yaks',
      updatedAt: '6/22/15',
    }

  ],
  selectedFolderId: 2,
  selectedNoteId: 2
};

const App = props => {
  return (
    <div className="main-div">
      <div className="row">
        <div className="large-4 columns" id="left-pane">
          <FolderList folders={data.folders} selectedFolderId={data.selectedFolderId} />
          <FolderForm />
        </div>
        <div className="large-8 columns" id="right-pane">
          <NotesSection notesData={data.notes} selectedNoteId={data.selectedNoteId} />
        </div>
      </div>
    </div>
  );
};

export default App;

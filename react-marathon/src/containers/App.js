import React from 'react';
import PlaylistCollection from '../components/PlaylistCollection';
import SongCollection from '../components/SongCollection';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let data = this.props.data;

    return (
      <ul className="App row">
        <PlaylistCollection playlists={data.playlists} selectedPlaylistId={data.selectedPlaylistId} />
        <SongCollection songs={data.songs} />
      </ul>
    );
  }
}

export default App;

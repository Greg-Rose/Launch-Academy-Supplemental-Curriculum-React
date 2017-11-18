import React from 'react';
import PlaylistCollection from '../components/PlaylistCollection';
import SongCollection from '../components/SongCollection';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let data = this.props.data;
    let selectedPlaylist = data.playlists.find(playlist => {
      return playlist.id == data.selectedPlaylistId;
    });
    let currentSongs = data.songs.filter(song => {
      return selectedPlaylist.songs.includes(song.id);
    });

    return (
      <ul className="App row">
        <PlaylistCollection playlists={data.playlists} selectedPlaylistId={data.selectedPlaylistId} />
        <SongCollection songs={currentSongs} />
      </ul>
    );
  }
}

export default App;

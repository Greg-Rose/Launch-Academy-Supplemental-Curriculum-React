import React from 'react';
import PlaylistCollection from '../components/PlaylistCollection';
import SongCollection from '../components/SongCollection';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPlaylistId: props.data.selectedPlaylistId,
      selectedSongId: null
    };
  }

  render() {
    let data = this.props.data;
    let selectedPlaylist = data.playlists.find(playlist => {
      return playlist.id == this.state.selectedPlaylistId;
    });
    let currentSongs = data.songs.filter(song => {
      return selectedPlaylist.songs.includes(song.id);
    });

    let selectPlaylist = (id) => {
      this.setState({ selectedPlaylistId: id });
    };

    let selectSong = (id) => {
      this.setState({ selectedSongId : id });
    };

    return (
      <ul className="App row">
        <PlaylistCollection
          playlists={data.playlists}
          selectedPlaylistId={this.state.selectedPlaylistId}
          handleSelect={selectPlaylist}
        />
        <SongCollection
          songs={currentSongs}
          selectedSongId={this.state.selectedSongId}
          handleSelect={selectSong}
        />
      </ul>
    );
  }
}

export default App;

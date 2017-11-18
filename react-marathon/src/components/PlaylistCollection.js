import React from 'react';
import Playlist from './Playlist';

const PlaylistCollection = props => {
  let playlistComponents = props.playlists.map(playlist => {
    let className;

    let playlistSelect = () => {
      props.handleSelect(playlist.id);
    };

    if (playlist.id == props.selectedPlaylistId) {
      className = "selected";
    }
    return (
      <Playlist
        key={playlist.id}
        name={playlist.name}
        description={playlist.description}
        className={className}
        handlePlaylistSelect={playlistSelect}
      />
    )
  })

  return (
    <div className="small-6 columns">
      <h1>Playlists:</h1>
      {playlistComponents}
    </div>
  )
}

export default PlaylistCollection;

import React from 'react';
import Playlist from './Playlist';

const PlaylistCollection = props => {
  let playlistComponents = props.playlists.map(playlist => {
    return (
      <Playlist
        key={playlist.id}
        name={playlist.name}
        description={playlist.description}
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

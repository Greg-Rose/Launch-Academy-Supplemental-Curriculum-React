import React from 'react';
import Song from './Song';

const SongCollection = props => {
  let songComponents = props.songs.map(song => {
    return (
      <Song
        key={song.id}
        name={song.name}
        artist={song.artist}
      />
    )
  })
  return (
    <div className="small-6 columns">
      <h1>Songs:</h1>
      {songComponents}
    </div>
  )
}

export default SongCollection;

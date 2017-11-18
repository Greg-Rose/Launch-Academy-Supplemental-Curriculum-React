import React from 'react';
import Song from './Song';

const SongCollection = props => {
  let songComponents = props.songs.map(song => {
    let songSelect = () => {
      props.handleSelect(song.id);
    };

    let className;
    
    if (song.id == props.selectedSongId) {
      className = "selected";
    }

    return (
      <Song
        key={song.id}
        name={song.name}
        artist={song.artist}
        className={className}
        handleSongSelect={songSelect}
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

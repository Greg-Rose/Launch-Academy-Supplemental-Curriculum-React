import React from 'react';

const Playlist = props => {
  let handleClick = () => {
    props.handlePlaylistSelect();
  };

  return (
    <li className={props.className} onClick={handleClick}>
      <h2>{props.name}</h2>
      <h3>{props.description}</h3>
    </li>
  )
}

export default Playlist;

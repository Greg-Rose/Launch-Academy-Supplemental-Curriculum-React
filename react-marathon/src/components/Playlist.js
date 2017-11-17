import React from 'react';

const Playlist = props => {
  return (
    <li>
      <h2>{props.name}</h2>
      <h3>{props.description}</h3>
    </li>
  )
}

export default Playlist;

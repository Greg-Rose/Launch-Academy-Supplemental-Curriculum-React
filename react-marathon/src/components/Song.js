import React from 'react';

const Song = props => {
  return (
    <li>
      <h2>{props.name}</h2>
      <h3>{props.artist}</h3>
    </li>
  )
}

export default Song;

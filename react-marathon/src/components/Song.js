import React from 'react';

const Song = props => {
  let handleClick = () => {
    props.handleSongSelect();
  };
  return (
    <li className={props.className} onClick={handleClick}>
      <h2>{props.name}</h2>
      <h3>{props.artist}</h3>
    </li>
  )
}

export default Song;

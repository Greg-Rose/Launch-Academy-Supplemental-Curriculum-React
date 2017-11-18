import React from 'react';

const Playlist = props => {
  let handleClick = () => {
    alert(`You've clicked ${props.name}`);
  };

  return (
    <li className={props.className} onClick={handleClick}>
      <h2>{props.name}</h2>
      <h3>{props.description}</h3>
    </li>
  )
}

export default Playlist;

import React from 'react';

const Grocery = props => {
  let name = props.name;
  let handler = props.handler;

  return(
    <li>
      {name}
      <button type="button" onClick={handler}>Delete</button>
    </li>
  )
};

export default Grocery;

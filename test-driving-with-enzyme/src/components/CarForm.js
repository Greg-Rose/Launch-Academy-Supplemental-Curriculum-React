import React from 'react';

const CarForm = (props) => {

  return (
    <div>
      <h2>Speed: {props.speed} meters per second</h2>
      <form>
        <input
          type="range"
          value={props.speed}
          onChange={props.onInputChange}
        />
      </form>
    </div>
  )
};
export default CarForm;
